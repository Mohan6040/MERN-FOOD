import React from 'react';
import { Icon } from '@iconify/react';

const Feedback = () => {
  return (
    <>
      <div style={{ background: '#f7fafc', minHeight: '100vh', padding: '2rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2d3748', marginBottom: '1rem' }}>
            Contact Us
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e53e3e', marginBottom: '1rem' }}>
                Reach Out
              </h2>
              <p style={{ color: '#4a5568' }}>
                Have a question, concern, or feedback? We're here to help! Reach out to us through the channels below,
                and we'll get back to you as soon as possible.
              </p>

              <ul style={{ listStyleType: 'disc', listStylePosition: 'inside', marginTop: '1rem' }}>
                <li>Email: <a href="mailto:support@foodie.com">support@foodie.com</a></li>
                <li>Phone: 1-800-FOODIE (1-800-366343)</li>
                <li>Address: 123 Delicious Street, Foodie City, YUM 12345</li>
              </ul>

              <p style={{ color: '#4a5568', marginTop: '1rem' }}>
                Connect with us on social media for the latest updates, promotions, and delicious content:
              </p>
              <div style={{ display: 'flex', marginTop: '0.5rem' }}>
                <a href="https://www.facebook.com/login.php/" style={{ color: '#4299e1', textDecoration: 'underline' }}>
                  Facebook
                </a>
                <a href="https://twitter.com/login" style={{ color: '#4299e1', textDecoration: 'underline', marginLeft: '1rem' }}>
                  Twitter
                </a>
                <a href="https://www.instagram.com/?hl=en" style={{ color: '#4299e1', textDecoration: 'underline', marginLeft: '1rem' }}>
                  Instagram
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://www.i4b.com/application/files/2215/8228/3430/The_Time_to_Integrate_Your_Data_Is_Now_.jpg"
                alt="Contact Foodie"
                style={{ width: '100%', height: 'auto', maxWidth: '34rem', borderRadius: '0.375rem' }}
              />
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e53e3e', marginBottom: '1rem' }}>Report an Issue</h2>
            <form style={{ maxWidth: '20rem' }}>{/* Issue Reporting Form */}</form>
          </div>
        </div>
         <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <div style={{ background: '#edf2f7', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0.375rem', maxWidth: '75vw', padding: '0.75rem' }}>
          <div>
            <img
              style={{ borderRadius: '50%', boxShadow: '0 0 0 1px #4299e1', cursor: 'pointer' }}
              src="https://images.ctfassets.net/trvmqu12jq2l/3QVAjldcTQuXFrSGnqoeNX/c56c9a5188a3b9637fab633e8800c7c0/blog-hero-1920x678-v35.02.01-Top-10-Industry-Trends.jpg?q=70&w=1208&h=1080&f=faces&fit=fill"
              alt=""
              height="380px"
              width="400px"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', padding: '0.25rem', maxWidth: '50vw' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Foodie</h1>
            <p style={{ fontSize: '0.875rem', color: '#4a5568', fontWeight: 'medium' }}>
              In the fast-paced era of digital convenience, online food delivery has emerged as a gastronomic revolution,
              offering a delectable array of culinary delights at the tap of a screen. As urban lifestyles become
              increasingly hectic, the seamless integration of technology with the culinary world has not only redefined how
              we eat but has also ushered in a new era of dining in the comfort of our own homes. With just a few clicks, a
              world of flavors is brought to our doorsteps, transforming mundane meals into epicurean experiences, all thanks
              to the convenience and efficiency of online food delivery services.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0.375rem', maxWidth: '20rem', alignItems: 'center', padding: '0.75rem' }}>
          <div style={{ padding: '0.25rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '1rem', color: '#e53e3e', fontWeight: 'bold', textTransform: 'capitalize' }}>Let's connect on</h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', padding: '0.25rem', maxWidth: '20rem' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.25rem', padding: '0.125rem', maxWidth: '20rem' }}>
              <Icon icon="ic:baseline-email" color="#ff8c00" height="4vh" />
              <p style={{ fontSize: '0.875rem', color: '#4a5568', fontWeight: 'medium' }}>foodie001@gmail.com</p>
            </div>
            <a href="https://github.com/login">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '0.25rem', padding: '0.125rem', maxWidth: '20rem' }}>
                <Icon icon="icon-park:github" height="4vh" />
                <p style={{ fontSize: '0.875rem', color: '#4a5568', fontWeight: 'medium' }}>GitHub</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/login">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '0.25rem', padding: '0.125rem', maxWidth: '20rem' }}>
                <Icon icon="devicon:linkedin" height="4vh" />
                <p style={{ fontSize: '0.875rem', color: '#4a5568', fontWeight: 'medium' }}>Linkedin</p>
              </div>
            </a>
            <a href="https://twitter.com/login">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '0.25rem', padding: '0.125rem', maxWidth: '20rem' }}>
                <Icon icon="devicon:twitter" height="4vh" />
                <p style={{ fontSize: '0.875rem', color: '#4a5568', fontWeight: 'medium' }}>Twitter</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      </div>



    </>
  );
};


export default Feedback;

