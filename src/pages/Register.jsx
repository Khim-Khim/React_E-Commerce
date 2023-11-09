import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otp, setOtp] = useState('');

  const handleGetOtp = (e) => {
    e.preventDefault();

    setShowOtpPopup(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    setShowOtpPopup(false);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                {showOtpPopup && (
                  <div className="alert alert-success" role="alert">
                    OTP has been sent to your email.
                  </div>
                )}
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              {showOtpPopup ? (
                <div className="form my-3">
                  <label htmlFor="OTP">Enter OTP</label>
                  <input
                    type="text"
                    className="form-control"
                    id="OTP"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
              ) : null}
              <div className="my-3">
                <p>
                  Already have an account?{' '}
                  <Link to="/login" className="text-decoration-underline text-info">
                    Login
                  </Link>{' '}
                </p>
              </div>
              <div className="text-center">
                {showOtpPopup ? (
                  <Link to="/password" className="my-2 mx-auto btn btn-dark">
                    Verify
                  </Link>
                ) : (
                  <button className="my-2 mx-auto btn btn-dark" type="submit" onClick={handleGetOtp}>
                    Register
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
