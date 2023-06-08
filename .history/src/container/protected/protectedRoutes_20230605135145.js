import { Link, Navigate, Outlet } from "react-router-dom";

// const useAuth = () => {
//   const user = { loggedIn: localStorage.getItem("tokenId") };
//   const user = { token: false };
//   return user;
// };

const ProtectedRoutes = () => {
  let isAuth = { token: false };

  return isAuth.token ? (
    <Outlet />
  ) : (
    // <Navigate to="/https://100014.pythonanywhere.com/" />
    <Link
      to={{ pathname: "/https://100014.pythonanywhere.com/" }}
      target="_blank"
    >
      Click to open HereWeCode (new tab)
    </Link>
  );
};

export default ProtectedRoutes;

//  then app.js should look this way

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import other components that you need...

{
  /* <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/user-list" element={<UserListPage />} />
          <Route path="/add-user" element={<AddUserPage />} />
          <Route path="/user-details/:id" element={<UserDetailsPage />} />
          <Route path="/update-user/:id" element={<UpdateUserPage />} />
        </Route>
      </Routes>
</BrowserRouter> */
}
