import Button from "../UI/button/Button";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import { useState } from "react";
import styled from "styled-components";
export const NewExpense = ({ onNewExp }) => {
  const [showForm, setShowform] = useState(false);

  const showExpenseForm = () => {
    setShowform((prevState) => {
      return !prevState;
    });
  };
  const Container = styled.div`
    margin: 0 auto;
    width: 100vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const AddingBtn = styled.div`
    border-radius: 12px;
    background-color: #ad9be9;
    width: 50%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  `;

  return (
    <Container>
      <AddingBtn>
        {showForm ? (
          <ExpenseForm onShowForm={showExpenseForm} onNewExp={onNewExp} />
        ) : (
          <Button
            onClick={showExpenseForm}
            width={"15vw"}
            title="Добавить новый расход"
          />
        )}
      </AddingBtn>
    </Container>
  );
};
