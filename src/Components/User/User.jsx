import { Link } from "react-router-dom";

const User = ({user}) => {

  const {id, name, email, phone} = user;
  const userStyle = {
    border: '2px solid darkblue',
    padding: '10px',
    margin: '10px',
    borderRadius: '10px'
  }
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Detailes</Link>
      <Link to={`/user/${id}`}>
        <button>Click Here</button>
      </Link>
    </div>
  );
};

export default User;