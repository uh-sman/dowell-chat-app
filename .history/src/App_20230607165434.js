import "./App.css";
import { Tooltip } from "react-tooltip";
import {
  Routes,
  Router,
  redirect,
  Route,
  useSearchParams,
} from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AppProvider } from "./container/ContextProvider/DataContext";
import ProtectedRoutes from "./container/protected/protectedRoutes";
import Home from "./container/home";
function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const date = new Date();
  console.log("date", date);
  return (
    <div className="container-lg w-100 ">
      <AppProvider>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/dowell-chat-app" element={<Home />} />
          </Route>
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
