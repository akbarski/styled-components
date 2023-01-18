import styled from "styled-components";

const Button = ({ title, onClick, width, ...rest }) => {
  const Button = styled.button`
    background-color: #4a026b;
    color: white;
    height: 5vh;
    border-radius: 10px;
    width: 10vw;

    :hover {
      background-color: #600a87;
    }

    :active {
      background-color: #520b73;
    }

    :disabled {
      background-color: gray;
    }
  `;

  const btnStyle = {
    width: width,
  };
  return (
    <Button style={btnStyle} onClick={onClick} {...rest}>
      {title}
    </Button>
  );
};
export default Button;
