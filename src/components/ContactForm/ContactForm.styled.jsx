import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrap = styled(Form)`
  margin: 20px auto;
  padding: 20px;
  max-width: 300px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.In};
`;

export const Label = styled.label`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding-bottom: 8px;

  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.Out};
`;

export const Input = styled(Field)`
  display: block;
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 10px;
  width: 80%;

  background-color: transparent;
  outline: none;

  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.In};

  &::placeholder {
    text-align: center;
  }

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.boxShadow.Out};
  }
`;

export const Message = styled(ErrorMessage)`
  position: absolute;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-size: 11px;
`;

export const FormBtn = styled.button`
  display: inline-flex;
  padding: 8px 24px;

  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;

  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.Out};

  &:active {
    box-shadow: ${props => props.theme.boxShadow.In};
  }
`;
