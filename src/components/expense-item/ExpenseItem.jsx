import "./ExpenseItem.css";
export const ExpenseItem = ({ title, price, date }) => {
  return (
    <div className="list">
      <div className="date-n-title">
        <p className="date">{date.toString()}</p>
        <p className="title">{title}</p>
      </div>
      <p className="price">{"$" + price + ",00"}</p>
    </div>
  );
};
