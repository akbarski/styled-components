import styled from "styled-components";

export const ExpensesFilter = ({ value, changeYear }) => {
  const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  `;

  const FilterRemote = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
  `;

  const Years = styled.select`
    height: 5vh;
    border-radius: 10px;
    width: 7vw;
    text-align: center;
  `;

  return (
    <FilterContainer>
      <FilterRemote>
        <label>Фильтр по году</label>
        <Years value={value} onChange={changeYear}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </Years>
      </FilterRemote>
    </FilterContainer>
  );
};
