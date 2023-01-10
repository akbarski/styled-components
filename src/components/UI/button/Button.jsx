import "./Button.css";

const Button = ({ title, onClick, width }) => {
  const btnStyle = {
    width: width,
  };
  return (
    <button style={btnStyle} onClick={onClick}>
      {title}
    </button>
  );
};
export default Button;
