// src/app/login.js
import { useState } from "react";
import axios from "axios";
import './css/board.css'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.data.success) {
        onLogin();
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <h1 className="text-2xl">Autotest login</h1>
      <div>
        <label htmlFor="username"></label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} 
        className="input-bordered"
        placeholder="Username" 
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} 
        className="input-bordered"
        placeholder="Password" 
        />
      </div>
      <button onClick={handleLogin} className='login-bordered'>Login</button>
    </main>
  );
}