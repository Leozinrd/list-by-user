import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

export const LoginContainer = styled.div`
  background: ${(p) => p.theme.colors.loginPage.loginGradient};
  min-height: 16rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 1rem;

  input {
    height: 1.4rem;
    width: -webkit-fill-available;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    border: none;

    :focus {
      outline: 0.125rem solid ${(p) => p.theme.colors.loginPage.inputBorder};
      border-radius: 0.5rem;
    }
  }

  .erroNome {
    outline: 0.125rem solid ${(p) => p.theme.colors.loginPage.error};
  }
`;

export const User = styled.label``;

export const Password = styled.label``;

export const Text = styled.h3`
  margin: 0;
  text-align: center;
  padding-bottom: 0.8rem;
  font-size: 1.375rem;
  color: ${(p) => p.theme.colors.white};
`;

export const LoginButton = styled.button<{ loading: boolean }>`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.5rem;
  border: 0rem solid transparent;
  font-weight: bold;
  font-size: 0.875rem;

  :hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.loginPage.hoverButton};
    color: ${(p) => p.theme.colors.white};
  }

  ${(props) =>
    props.loading
      ? css`
          ::after {
            content: '';
          }
        `
      : css`
          ::after {
            content: 'Entrar';
          }
        `}
`;

export const RegisterButton = styled(LoginButton)`
  ${(props) =>
    props.loading
      ? css`
          ::after {
            content: '';
          }
        `
      : css`
          ::after {
            content: 'Registrar';
          }
        `}
`;

export const ResetPasswordButton = styled(LoginButton)`
  ${(props) =>
    props.loading
      ? css`
          ::after {
            content: '';
          }
        `
      : css`
          ::after {
            content: 'Enviar e-mail';
          }
        `}
`;

export const Error = styled.div``;

export const ErrorMessage = styled.p`
  color: ${(p) => p.theme.colors.text};
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

export const RegisterContent = styled.div``;

export const LoginText = styled.p`
  color: ${(p) => p.theme.colors.white};
  margin: 0;
  text-align: center;

  &:nth-of-type(2) {
    a {
      color: ${(p) => p.theme.colors.loginPage.hoverButton};
      text-decoration: underline;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export const PasswordLogin = styled(Password)`
  & > :nth-child(3) {
    padding-top: 0.5rem;
    font-size: 0.5625rem;
    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const RegisterText = styled(LoginText)`
  text-align: center;
`;

export const TextReset = styled(Text)`
  max-width: 12rem;
`;

export const GoBackButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(-0.625rem, 0.625rem);
`;
