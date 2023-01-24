import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 50px auto;
  padding: 16px;
  max-width: 500px;
  text-align: center;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.primaryBgCl};
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export const Title = styled.h1`
  display: inline-block;
  padding: 4px 16px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.Out};
`;

export const SubTitle = styled.h2`
  display: inline-block;
  padding: 4px 16px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.Out};
`;
