import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import { MdInfo } from 'react-icons/md'; // Import the MdInfo icon
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { Link } from 'react-router-dom';
import { getError } from '../utils';
//import Button from 'react-bootstrap/esm/Button';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, orders: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function OrderHistoryScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  // const navigate = useNavigate();

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(
          `/api/orders/mine`,
          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div style={{ margin: '20px', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Helmet>
        <title>Order History</title>
      </Helmet>

      <h1 style={{ fontSize: '2em', marginBottom: '20px' }}>Order History</h1>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger" style={{ marginBottom: '20px' }}>{error}</MessageBox>
      ) : (
        <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <th style={tableHeaderStyle}>ID</th>
              <th style={tableHeaderStyle}>DATE</th>
              <th style={tableHeaderStyle}>TOTAL</th>
              
              <th style={tableHeaderStyle}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={tableCellStyle}>{order._id}</td>
                <td style={tableCellStyle}>{order.createdAt.substring(0, 10)}</td>
                <td style={tableCellStyle}>{order.totalPrice.toFixed(2)}</td>
                
                <td style={tableCellStyle}>
                <td>
                  <Link to={`/order/${order._id}`}>
                    <MdInfo />
                  </Link>
                </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const tableHeaderStyle = {
  padding: '12px',
  textAlign: 'left',
  backgroundColor: '#3498db', // Change this color as needed
  color: '#fff', // Change the text color to make it readable
};

const tableCellStyle = {
  padding: '12px',
  textAlign: 'left',
  backgroundColor: '#ecf0f1', // Change this color as needed
};