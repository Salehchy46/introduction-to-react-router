import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { loadConfigFromFile } from "vite";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header></Header>
      {
        navigation.state === 'loading' ? <p>Loading...</p> : <Outlet></Outlet>
      }
      <Footer></Footer>
    </div>
  );
};

// useNavigation to set any load conditon

export default Home;