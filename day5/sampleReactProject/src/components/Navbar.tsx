import Button from "./Button";
import Name from "./Name";
import "./Navbar.css"

const Navbar = () =>{
    let inputVal = "";
return (<>
    <div className="nav">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <input type="text" placeholder="search" onChange={(e) => {
            inputVal = e.target.value;
            console.log(inputVal);
        }} />
        <Name props={inputVal} />
        <Button/>
    </div>
</>)
}

export default Navbar;