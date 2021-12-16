import styled from 'styled-components';

export const Svg = styled.svg`
  width: 130px;
  margin-bottom: ${(props) =>
    props.marginBottom !== '0' ? props.marginBottom : '0'};
`;
