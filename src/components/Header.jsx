import {Link} from "react-router-dom";
const Header = () =>{
    return <>
    <header>
    <div className="logoBox">
        <img className="logo" src="./DASH.png" alt="" />
    </div>
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/songs"}>Songs</Link>
        <Link to={"/lyrics"}>Lyrics</Link>
    </nav>
    </header>
    </>
}

export default Header;