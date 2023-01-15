import { useState } from "react";
import { Chart } from "../Chart/Chart";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import { ExpensesFilter } from "../expenses-filter/ExpensesFilter";
import "./Expenses.css";
export const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredItem = expenses.filter((elem) => {
    const stringifiedDate = new Date(elem.date).getFullYear().toString();
    return selectedYear === stringifiedDate;
  });
  return (
    <div className="list-container">
      <ExpensesFilter value={selectedYear} changeYear={yearChangeHandler} />
      <Chart items={expenses} />
      {filteredItem.map((elem) => {
        return (
          <ExpenseItem
            key={elem.title + new Date().toString}
            title={elem.title}
            price={elem.price}
            date={elem.date}
          />
        );
      })}
    </div>
  );
};
