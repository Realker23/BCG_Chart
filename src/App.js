// import logo from "./logo.svg";
import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";

// import CityCard from "./components/CityCards";
import Body from "./components/Body";
import LandingPage from "./components/LandingPage";
import CityDetail from "./components/CityDetail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/city/:keyId",
        element: <CityDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <div
      className="App bg-purple-400  h-full min-h-svh "
      style={{backgroundColor: "rgba(128, 0, 128, 0)"}}
    >
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
