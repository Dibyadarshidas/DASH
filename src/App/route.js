import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

  import Header from "../components/Header";
  import Footer from "../components/Footer";

  import Home from "../pages/Home";

  const NavRoutes = () =>{
    return <>
    <Router>
            <Header/>
        <Routes>
            <Route exact path="/" element = {<Home/>} />
        </Routes>
            <Footer/>
    </Router>
    </>
  }

  export default NavRoutes;