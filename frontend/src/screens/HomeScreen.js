import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Footer from '../components/Footer';
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  const handleLike = (product) => {
    // Implement your logic to update the product with a like
    // You may want to make an API call to update the backend
    console.log('Liked:', product.name);
  };

  const handleDislike = (product) => {
    // Implement your logic to update the product with a dislike
    // You may want to make an API call to update the backend
    console.log('Disliked:', product.name);
  };

  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <br></br>
        <br></br>
        <div className="marquee-container">
          <marquee width="100%" height="50%" direction="left" scrollamount="15">
            <img
              src="https://www.pngarts.com/files/7/Food-Delivery-PNG-Pic.png"
              width="auto"
              height="300"
              alt="Food Delivery"
            />
            <img
              className="sc-dcJsrY iCKyXx"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/fcda1fa70eceaf885ad4a8d3fb651b97"
              width="625"
              height="400"
              alt="Meals under 199"
            />
            <img
              className="sc-dcJsrY iCKyXx"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7004bb67da2bc79145552e05a4605d6e"
              width="625"
              height="400"
              alt="Restaurants in Focus"
            />
            <img
              className="sc-dcJsrY iCKyXx"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7dec1c62b4e539323ea54bae5e152c62"
              width="625"
              height="400"
              alt="TOP BRANDS TOP OFFERS"
            />
            <img
              className="sc-dcJsrY iCKyXx"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/1450b9e6f13d2004ba137d3bad6e96bd"
              width="625"
              height="400"
              alt="Flat deals"
            />
          </marquee>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div>
        <Helmet>
          <title>FOODIE</title>
        </Helmet>
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="15"
          style={{
            fontFamily: 'Arial, sans-serif',
            color: '#3498db',
            fontSize: '36px',
            fontWeight: 'bold',
          }}
        >
          🚚.....🎉 Exciting News!! Get 10% Discount on Your First Order & Enjoy
          FREE Delivery within 3 km! 🌟 Beyond that, it's just 30 Rs/km. Hurry
          up, place your order now! 🛒 Don't miss out on this amazing offer! 🎁
        </marquee>
        <h1>Top Foods</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox style={{ color: 'red' }} variant="danger">
              {error}
            </MessageBox>
          ) : (
            <Row style={{ justifyContent: 'center' }}>
              {products.map((product) => (
                <Col
                  key={product.slug}
                  style={{ marginBottom: '15px' }}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <Product
                    product={product}
                    style={{ border: '1px solid #ccc', padding: '10px' }}
                  />
                </Col>
              ))}
            </Row>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
export default HomeScreen;
