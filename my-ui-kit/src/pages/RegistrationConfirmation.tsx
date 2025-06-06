import { Link } from 'react-router-dom';
import './Confirmation.css';

export default function RegistrationConfirmation() {
  return (
    <div className="confirmation-container">
      <a href="/" className="back-link">Back to home</a>
      <h1>Registration Confirmation</h1>
      <div className="confirmation-box">
        <p>
          Please activate your account via the activation link in the email <b>example@gmail.com</b>.<br />
          Please, check your email!
        </p>
        <Link to="/" className="go-home-btn">Go to home</Link>
      </div>
    </div>
  );
}
