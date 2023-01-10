const FormInput = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.labelName}</label>
      <input
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
