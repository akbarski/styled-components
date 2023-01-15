import "./ExpenseItem.css";
export const ExpenseItem = ({ title, price, date }) => {
  const formattedDate = new Date(date).toLocaleDateString("ru-ru", {
    dateStyle: "long",
  });
  return (
    <div className="list-contain">
      <div className="filter"></div>
      <div className="list">
        <div className="date-n-title">
          <p className="date">{formattedDate}</p>
          <p className="title">{title}</p>
        </div>
        <p className="price">{"$" + price + ",00"}</p>
      </div>
    </div>
  );
};
