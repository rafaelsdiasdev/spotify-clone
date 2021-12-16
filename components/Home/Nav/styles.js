import styled from 'styled-components';

export const Container = styled.nav``;

export const List = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  background: #000;
  font-family: Helvetica;
  font-size: 16px;

  @media (max-width: 900px) {
    padding: 0;
    align-items: start;
    position: relative;
    display: list-item;
  }
`;

export const ListItem = styled.li`
  font-weight: 700;

  &:last-child {
    padding: 0;
    margin: 0;
    position: relative;
  }
`;
