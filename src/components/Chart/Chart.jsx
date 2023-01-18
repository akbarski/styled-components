import styled from "styled-components";

import { ChartBar } from "./chart-bar/ChartBar";

export const Chart = ({ items }) => {
  const maximumPrice = 3000;
  const month = [
    {
      label: "Январь",
      currentPrice: 0,
    },
    {
      label: "Февраль",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апрель",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Август",
      currentPrice: 0,
    },
    {
      label: "Сентябрь",
      currentPrice: 0,
    },
    {
      label: "Октябрь",
      currentPrice: 0,
    },
    {
      label: "Ноябрь",
      currentPrice: 0,
    },
    {
      label: "Декабрь",
      currentPrice: 0,
    },
  ];

  items.forEach((element) => {
    const monthNumber = new Date(element.date).getMonth();
    month[monthNumber].currentPrice += element.price;
  });

  const ChartsWrapper = styled.div`
    height: 10vh;
    background-color: #f8dfff;
    border-radius: 1rem;
    width: 95%;
    height: 30vh;
    margin: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <ChartsWrapper>
      {month.map((elem) => {
        return (
          <ChartBar
            key={elem.label}
            label={elem.label}
            currentPrice={elem.currentPrice}
            maximumPrice={maximumPrice}
          />
        );
      })}
    </ChartsWrapper>
  );
};
