import { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/FormInput/FormInput";
import "./ExpenseForm.css";
export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const titleInputChange = (event) => {
    setTitle(event.target.value);
  };
  const priceInputChange = (event) => {
    setPrice(event.target.value);
  };
  const dateInputChange = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      price,
      date,
    };

    props.onNewExp(expenseData);
    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <form className="form">
      <div className="input-box">
        <FormInput
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="Введите"
          value={title}
          onChange={titleInputChange}
        />
        <FormInput
          id="number"
          labelName="Кол-во"
          inputType="number"
          value={price}
          onChange={priceInputChange}
        />
      </div>
      <div className="date-block">
        <FormInput
          id="date"
          labelName="Дата"
          inputType="date"
          value={date}
          onChange={dateInputChange}
        />
      </div>
      <div className="btn-box">
        <Button title={"Отмена"} onClick={cancelHandler} />
        <Button onClick={saveHandler} title={"Сохранить"} />
      </div>
    </form>
  );
};
