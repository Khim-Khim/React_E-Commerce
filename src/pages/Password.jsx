import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Password = () => {
  const [password, setPassword] = useState('');
  const [rePeatlPassword, seRepeatPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();


  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Password Setup</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleRegister}>
              <div className="form my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Repeat">Repeat Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="RepeatPassword"
                  placeholder="Refill your password"
                  value={rePeatlPassword}
                  onChange={(e) => seRepeatPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Register
                </button>
              </div>
              <div className="my-3">
                <p>
                  Already have an account?{' '}
                  <Link to="/login" className="text-decoration-underline text-info">
                    Login
                  </Link>{' '}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Password;
