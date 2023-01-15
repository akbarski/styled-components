import "./ChartBar.css";

export const ChartBar = ({ label, maximumPrice, currentPrice }) => {
  const fullHeight = (currentPrice * 100) / maximumPrice;

  return (
    <div className="chart-bar-container">
      <div className="bars">
        <div className="chart-bar-fill" style={{ height: fullHeight }}></div>
      </div>
      <p className="month-name">{label}</p>
    </div>
  );
};
