import Logo from "../img/logo.png";

const size = {
  with: 205,
  height: 205,
};

const Header = () => {
  return <img src={Logo} alt="logo" style={size} />;
};

export default Header;
