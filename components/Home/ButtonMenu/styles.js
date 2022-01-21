import styled from 'styled-components';

export const BtnMenu = styled.button`
  max-width: 126px;
  background-color: #000;
  border: none;
  margin-left: 6px;
  cursor: pointer;
  outline: none;
  font-family: Helvetica;
  text-decoration: none;
  color: #fff;
  fill: #fff;

  display: flex;
  align-items: center;

  .menu__photo {
    border-radius: 50%;
    margin: auto 6px auto 10px;
    box-shadow: 0 0 5px 2px rgb(0 0 0 / 10%);
    object-fit: cover;

    box-sizing: boder-box;
    display: inline-block;

    @media (max-width: 900px) {
      display: none !important;
    }
  }

  span {
    font-size: 16px;
    margin: auto 10px auto 12px;
    font-weight: 700;

    @media (max-width: 900px) {
      display: none;
    }
  }

  &:hover {
    svg {
      fill: #1ed760;
    }
    span {
      color: #1ed760;
    }
  }
`;

export const Context = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  .paragraph {
    .link {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      padding-top: 4px;
      font-size: 16px;
      &:hover {
        color: #1ed760;
      }
    }
  }

  svg {
    transform: ${(props) =>
      props.isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'};

    @media (max-width: 900px) {
      display: none !important;
    }
  }
`;

export const Mobile = styled.div`
  padding: 0 0 1px 16px;

  border: none;
  background-color: transparent;

  display: none;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    display: inline-block;
  }

  .menu-hamburguer {
    background-color: #fff;
    border-radius: 1px;
    -webkit-transform-origin: 21px;
    transform-origin: 21px;

    display: block;
    height: 3px;
    width: 22px;

    margin: 4px 0;
    transition: 0.3s;
    position: relative;
  }

  .menu-hamburguer:first-child {
    display: ${(props) => (props.isMenuOpen ? 'none' : 'block')};
  }

  .menu-hamburguer:nth-child(2) {
    transform: ${(props) =>
      props.isMenuOpen ? 'rotate(135deg)' : 'rotate(0deg)'};
    top: ${(props) => (props.isMenuOpen ? '11px' : '0px')};
    right: ${(props) => (props.isMenuOpen ? '22px' : '0px')};
  }

  .menu-hamburguer:nth-child(3) {
    transform: ${(props) =>
      props.isMenuOpen ? 'rotate(-135deg)' : 'rotate(0deg)'};
    top: ${(props) => (props.isMenuOpen ? '-11px' : '0px')};
    right: ${(props) => (props.isMenuOpen ? '22px' : '0px')};
  }
`;
