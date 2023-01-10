import Button from "../UI/button/Button";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";
export const NewExpense = ({ onNewExp }) => {
  const [showForm, setShowform] = useState(false);

  const showExpenseForm = () => {
    setShowform((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="main-container">
      <div className="button-div">
        {showForm ? (
          <ExpenseForm onShowForm={showExpenseForm} onNewExp={onNewExp} />
        ) : (
          <Button
            onClick={showExpenseForm}
            width={"15vw"}
            title="Добавить новый расход"
          />
        )}
      </div>
    </div>
  );
};
