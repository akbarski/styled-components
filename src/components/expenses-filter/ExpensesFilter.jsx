import "./ExpensesFilter.css";

export const ExpensesFilter = ({ value, changeYear }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Фильтр по году</label>
        <select value={value} onChange={changeYear}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};
