import styled from "styled-components";

export const ChartBar = ({ label, maximumPrice, currentPrice }) => {
  const fullHeight = (currentPrice * 100) / maximumPrice;

  const ChartBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
  `;

  const Bars = styled.div`
    height: 10vh;
    width: 1.4rem;
    border-radius: 1rem;
    height: 15vh;
    background-color: #a892ee;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgb(57, 54, 54);
  `;

  const ChartBarFill = styled.div`
    background-color: #4826b9;
    width: 100%;
    transition: all 0.3s ease-out;
    border-radius: 1rem;
  `;

  const Month = styled.p`
    width: 3vw;
    text-align: center;
    color: black;
  `;
  return (
    <ChartBarContainer>
      <Bars>
        <ChartBarFill style={{ height: fullHeight }}></ChartBarFill>
      </Bars>
      <Month>{label}</Month>
    </ChartBarContainer>
  );
};
