import Button from "./Button";

const Header = () => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>Covid tracker </h1>
    </header>
  );
};

export default Header;
