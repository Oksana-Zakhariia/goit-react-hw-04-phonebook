import { Field } from 'formik';
import styled from 'styled-components';
export const Input = styled(Field)`
  padding: 10px;
  box-shadow: ${props => props.theme.shadow};
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.mainBorderColor};
  outline: none;
  margin-left: ${props => props.theme.spacing.large};
`;
export const FormLabel = styled.label`
  color: ${props => props.theme.colors.greyText};
  font-size: ${props => props.theme.fonts.largeFontSize};
  margin-right: auto;
  margin-left: auto;
  margin-right: ${props => props.theme.spacing.large};
`;
export const FormButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${props => props.theme.colors.mainBorderColor};
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.mainBorderColor};
  border-radius: 10px;
`;
