import { ExpenseItem } from "../expense-item/ExpenseItem";
import "./Expenses.css";
export const Expenses = ({ expenses }) => {
  return (
    <ul className="list-container">
      {expenses.map((elem) => {
        return (
          <ExpenseItem
            key={elem.title + new Date().getTime()}
            title={elem.title}
            price={elem.price}
            date={elem.date}
          />
        );
      })}
    </ul>
  );
};
