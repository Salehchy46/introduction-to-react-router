import { useLoaderData } from "react-router-dom";

const UserDatiales = () => {
  const user = useLoaderData();
  const {name, email, phone, website} = user;
  return (
    <div>
      <h2>Detailes about user: {name}</h2>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDatiales;