import styled from 'styled-components';
export const ContactItem = styled.div`
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.mainBorderColor};
  color: ${props => props.theme.colors.greyText};
  width: 800px;
  padding: ${props => props.theme.spacing.small};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => props.theme.shadow};
  margin-bottom: ${props => props.theme.spacing.small};
`;
export const ContactButton = styled.button`
  width: 100px;
  padding: 5px;
  background-color: ${props => props.theme.colors.mainBorderColor};
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.mainBorderColor};
  border-radius: 5px;
`;
