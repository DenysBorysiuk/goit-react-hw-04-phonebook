import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin: 20px auto;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 50%;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.Out};
`;

export const Input = styled.input`
  display: block;
  margin-top: 4px;
  margin-right: auto;
  margin-left: auto;
  padding: 8px 10px;
  width: 80%;
  background-color: transparent;
  border: none;
  outline: none;
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
