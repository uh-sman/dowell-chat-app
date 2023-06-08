import "./App.css";
import { Tooltip } from "react-tooltip";
import { Routes, Router, redirect, Route } from "react-router-dom";
// import { createHashRouter } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "./container";
import Footer from "./container/Footer";
import { AppProvider } from "./container/ContextProvider/DataContext";
import Navbar from "./container/Header/Navbar";
import ScrollBar from "./container/Chats/message/ScrollBar";
import ProtectedRoutes from "./container/protected/protectedRoutes";
function App() {
  // const router = createHashRouter([
  //   {
  //     path: "/",
  //     element: <Container />,
  //     loader: "",
  //   },
  // ]);

  // const userLogic = () => {
  //   if (!session_id) {
  //     redirect;
  //   }
  // };
  const date = new Date();
  console.log("date", date);
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <AppProvider>
          <div className="container-lg w-100 ">
            <Container />
            {/* </div> */}

            <Footer />
          </div>
        </AppProvider>
      </Route>
    </Routes>
  );
}

export default App;
