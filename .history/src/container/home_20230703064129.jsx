import React, { useContext } from "react";
import Container from ".";
import Footer from "./Footer";
import ProductContext from "./ContextProvider/DataContext";
import { Loader } from "./spinner/loader";
const Home = () => {
  const { loading } = useContext(ProductContext);
  return loading ? (
    <div className="d-flex justify-content-center align-items-center mty-6">
      <Loader />
    </div>
  ) : (
    <div>
      <Container />
      <Footer />
    </div>
  );
};

export default Home;
