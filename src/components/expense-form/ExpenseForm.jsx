import { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/FormInput/FormInput";
import styled from "styled-components";
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

  const Form = styled.form`
    margin-top: 5rem;
    width: 50vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ad9be9;
    border-radius: 12px;
  `;

  const InputContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  `;

  const DateBlock = styled.div`
    width: 40%;
    margin-top: 1rem;
    justify-content: center;
    align-self: start;
    margin-left: 2.5rem;
  `;

  const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: flex-end;
    margin-right: 2rem;
  `;

  return (
    <Form>
      <InputContainer>
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
      </InputContainer>
      <DateBlock>
        <FormInput
          id="date"
          labelName="Дата"
          inputType="date"
          value={date}
          onChange={dateInputChange}
        />
      </DateBlock>
      <ButtonBox>
        <Button title={"Отмена"} onClick={cancelHandler} />
        <Button
          onClick={saveHandler}
          title={"Сохранить"}
          disabled={price === "" || date === "" || title === ""}
        />
      </ButtonBox>
    </Form>
  );
};
