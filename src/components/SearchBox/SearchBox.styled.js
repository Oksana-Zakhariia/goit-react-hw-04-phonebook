import styled from 'styled-components';
export const InputLabel = styled.label`
  color: ${props => props.theme.colors.greyText};
  font-size: ${props => props.theme.fonts.largeFontSize};
  margin-right: auto;
  margin-left: auto;
  display: flex;
  gap: ${props => props.theme.spacing.small};
  align-items: center;
`;
export const Filter = styled.input`
  padding: 10px;
  box-shadow: ${props => props.theme.shadow};
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.mainBorderColor};
  outline: none;
`;
