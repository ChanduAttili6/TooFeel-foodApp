import Logo from "../../public/TooFeel-logos.jpeg";
const Navbar = () => {
  return (
    <nav className="nav-sec">
      <div className="logo-container">
        <img src={Logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Main</li>
          <li>Beverages</li>
          <li>Profile</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
