import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', { password });

      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        setLoggedIn(true);
        router.push('/');
      }
    } catch (error) {
      console.error('An error occurred while logging in:', error);
    }
  };

  if (loggedIn) {
    return <p>You are already logged in!</p>;
  }

  return (
    <Layout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary">Log in</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
