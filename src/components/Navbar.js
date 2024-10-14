import icon from "../assets/images/menu.png";

// Navbar Component
function Navbar() {
    return (
      <nav>
        <h1>Perfumy</h1>
        <ul>
          <li>Home |</li>
          <li>Products |</li>
          <li>About |</li>
          <li>Contact</li>
        </ul>
        <img src={icon} alt="Menu Bar" />
      </nav>
    )
  }

  export default Navbar;