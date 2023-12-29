import "./App.css";
import Landing from "./pages/Landing";
import Merchandise from "./pages/Merchandise";
import Team from './components/Teams/Team'; 

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import Landing from './pages/Landing';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/merchant" element={<Merchandise />} />
        <Route exact path="/team" element={<Team />} />

         
        


      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
