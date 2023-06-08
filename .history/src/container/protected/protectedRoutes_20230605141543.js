import { Link, Navigate, Outlet } from "react-router-dom";

// const useAuth = () => {
//   const user = { loggedIn: localStorage.getItem("tokenId") };
//   const user = { token: false };
//   return user;
// };

const ProtectedRoutes = () => {
  let isAuth = { token: false };
  if (!isAuth.token) return (window.location = "https://www.google.com");

  // return (
  //   <Navigate
  //     to="
  //     https://100014.pythonanywhere.com/"
  //     replace
  //     // render={() => (window.location = "https://www.google.com")}
  //   />
  // );

  return <Outlet />;
};

export default ProtectedRoutes;

// const ProtectedRoutes = () => {
//   let isAuth = { token: false };

//   return isAuth.token ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/https://100014.pythonanywhere.com/" />
//     <Navigate
//       to={{ pathname: "*/https://100014.pythonanywhere.com/" }}

//     />

//   );
// };
