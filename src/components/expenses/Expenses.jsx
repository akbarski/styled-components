import { useState } from "react";
import { Chart } from "../Chart/Chart";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import { ExpensesFilter } from "../expenses-filter/ExpensesFilter";
import styled from "styled-components";
export const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredItem = expenses.filter((elem) => {
    const stringifiedDate = new Date(elem.date).getFullYear().toString();
    return selectedYear === stringifiedDate;
  });

  const ExpenseWrapper = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #1f1f1f;
    height: fit-content;
    margin-top: 10rem;
    width: 50%;
    border-radius: 12px;
    list-style: none;
    align-items: center;
  `;
  return (
    <ExpenseWrapper>
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
    </ExpenseWrapper>
  );
};
