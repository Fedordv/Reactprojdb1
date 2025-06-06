import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './SignUp.css';

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirm) {
      alert('Пароли не совпадают');
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(userData));

    navigate('/registration-confirmation');
  };

  return (
    <div className="signup-container">
      <a href="/" className="back-link">Back to home</a>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p className="signin-hint">
        Already have an account? <a href="#">Sign in</a>
      </p>
    </div>
  );
}
