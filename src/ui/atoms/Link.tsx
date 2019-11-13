import styled from 'styled-components';

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: ${props => props.theme.palette.link};
`;
