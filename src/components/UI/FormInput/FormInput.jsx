import styled from "styled-components";
const Input = styled.input`
  width: 22vw;
  border-radius: 12px;
  border: none;
  height: 5vh;
`;
const FormInput = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.labelName}</label>
      <Input
        className={props.class}
        type={props.inputType}
        placeholder={props.placeholder || "..."}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};
export default FormInput;
