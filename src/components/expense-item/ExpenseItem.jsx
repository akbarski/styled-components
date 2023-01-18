import styled from "styled-components";
export const ExpenseItem = ({ title, price, date }) => {
  const formattedDate = new Date(date).toLocaleDateString("ru-ru", {
    dateStyle: "long",
  });

  const ListContainer = styled.div`
    width: 98%;
  `;
  const Lists = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: center;
    background-color: #4b4b4b;
    margin: 1rem;
    border-radius: 12px;
  `;

  const DatenTitle = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
    margin-left: 1rem;
  `;

  const DateField = styled.p`
    display: flex;
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    height: 10vh;
    background-color: #2a2a2a;
    border-radius: 12px;
    padding: 1rem;
    border: 2px solid white;
  `;

  const Title = styled.p`
    font-size: 1.8rem;
  `;

  const Price = styled.p`
    text-align: center;
    font-size: 1.8rem;
    width: fit-content;
    background-color: #40005d;
    border-radius: 12px;
    padding: 0.4rem;
    margin-right: 1rem;
  `;
  return (
    <ListContainer>
      <Lists>
        <DatenTitle>
          <DateField>{formattedDate}</DateField>
          <Title>{title}</Title>
        </DatenTitle>
        <Price>{"$" + price + ",00"}</Price>
      </Lists>
    </ListContainer>
  );
};
