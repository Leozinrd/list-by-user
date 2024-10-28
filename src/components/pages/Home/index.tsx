import { useRef } from 'react';
import { useAuth } from '../../../contexts/authContext';
import Container from '../../layout/Container';
import PasswordInput from '../../common/Password';

import {
  LoginContainer,
  User,
  Password,
  PasswordLogin,
  Text,
  LoginButton,
  RegisterButton,
  ResetPasswordButton,
  Error,
  ErrorMessage,
  RegisterContent,
  LoginText,
  RegisterText,
  TextReset,
  GoBackButton,
} from './styles';
import { Loading } from '../../common/DotLoading';

function Main() {
  const {
    handleLogin,
    handleRegister,
    handleResetPassword,
    loading,
    showWarning,
    emailError,
    passwordError,
    showLogin,
    showRegister,
    showResetPassword,
    setShowLogin,
    setShowRegister,
    setShowResetPassword,
    nameError,
    lastNameError,
    passwordWarning,
  } = useAuth();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const registerEmailRef = useRef<HTMLInputElement>(null);
  const registerPasswordRef = useRef<HTMLInputElement>(null);
  const registerNameRef = useRef<HTMLInputElement>(null);
  const registerLastNameRef = useRef<HTMLInputElement>(null);
  const emailRecoverPasswordRef = useRef<HTMLInputElement>(null);

  const showRegisterForm = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const showLoginForm = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const showResetPasswordForm = () => {
    setShowResetPassword(true);
    setShowRegister(false);
    setShowLogin(false);
  };

  const showLoginAgain = () => {
    setShowResetPassword(false);
    setShowLogin(true);
  };

  return (
    <Container>
      <LoginContainer showResetPassword={showResetPassword}>
        {showLogin && (
          <>
            <User>
              <Text>Login</Text>
              <input
                ref={emailRef}
                name="Login"
                placeholder="E-mail"
                type="email"
                className={emailError ? 'erroNome' : ''}
              />
            </User>
            <PasswordLogin>
              <Text>Senha</Text>
              <PasswordInput
                placeholder="Digite sua senha"
                ref={passwordRef}
                className={passwordError ? 'erroNome' : ''}
                onEnterPress={(e) =>
                  handleLogin(
                    e,
                    emailRef.current?.value,
                    passwordRef.current?.value
                  )
                }
              />
              <LoginText>
                Esqueceu sua senha? Clique{' '}
                <a onClick={showResetPasswordForm}>aqui</a>!
              </LoginText>
            </PasswordLogin>
            <LoginButton
              onClick={(e) =>
                handleLogin(
                  e,
                  emailRef.current?.value,
                  passwordRef.current?.value
                )
              }
              loading={loading}
            >
              {loading && <Loading loading={loading} />}
            </LoginButton>

            <RegisterContent>
              <LoginText>Ainda não possui cadastro?</LoginText>
              <LoginText>
                Cadastre-se <a onClick={showRegisterForm}>aqui</a>!
              </LoginText>
            </RegisterContent>
            {showWarning && (
              <Error>
                <ErrorMessage>Credenciais inválidas!</ErrorMessage>
              </Error>
            )}
          </>
        )}
        {showRegister && (
          <>
            <User>
              <Text>Nome</Text>
              <input
                ref={registerNameRef}
                type="text"
                placeholder={nameError ? 'Informe seu nome!' : 'Seu Nome'}
                className={nameError ? 'erroNome' : ''}
              />
            </User>
            <User>
              <Text>Sobrenome</Text>
              <input
                ref={registerLastNameRef}
                type="text"
                placeholder={
                  lastNameError ? 'Informe seu sobrenome!' : 'Seu Sobrenome'
                }
                className={lastNameError ? 'erroNome' : ''}
              />
            </User>
            <User>
              <Text>E-mail</Text>
              <input
                ref={registerEmailRef}
                type="email"
                placeholder={emailError ? 'Informe seu e-mail!' : 'Seu e-mail'}
                className={emailError ? 'erroNome' : ''}
              />
            </User>
            <Password>
              <Text>Senha</Text>
              <PasswordInput
                placeholder={
                  passwordError ? 'Informe uma senha!' : 'Digite sua senha'
                }
                ref={registerPasswordRef}
                className={passwordError ? 'erroNome' : ''}
                onEnterPress={(e) =>
                  handleRegister(
                    e,
                    registerNameRef.current?.value,
                    registerLastNameRef.current?.value,
                    registerEmailRef.current?.value,
                    registerPasswordRef.current?.value
                  )
                }
              />
            </Password>
            <RegisterButton
              onClick={(e) =>
                handleRegister(
                  e,
                  registerNameRef.current?.value,
                  registerLastNameRef.current?.value,
                  registerEmailRef.current?.value,
                  registerPasswordRef.current?.value
                )
              }
              loading={loading}
            >
              {loading && <Loading loading={loading} />}
            </RegisterButton>
            <RegisterContent>
              <RegisterText>Já possui cadastro?</RegisterText>
              <RegisterText>
                Clique <a onClick={showLoginForm}>aqui</a>!
              </RegisterText>
            </RegisterContent>
            {showWarning && (
              <Error>
                <ErrorMessage>E-mail já cadastrado!</ErrorMessage>
              </Error>
            )}
            {passwordWarning && (
              <Error>
                <ErrorMessage>
                  Senha deve conter pelo menos 6 caracteres!
                </ErrorMessage>
              </Error>
            )}
          </>
        )}
        {showResetPassword && (
          <>
            <GoBackButton onClick={showLoginAgain} />
            <TextReset>Informe o e-mail cadastrado</TextReset>
            <input
              ref={emailRecoverPasswordRef}
              type="email"
              placeholder="Digite seu email"
              className={emailError ? 'erroNome' : ''}
            />
            <ResetPasswordButton
              onClick={(e) =>
                handleResetPassword(e, emailRecoverPasswordRef.current?.value)
              }
              loading={loading}
            >
              {loading && <Loading loading={loading} />}
            </ResetPasswordButton>
            {showWarning && (
              <Error>
                <ErrorMessage>E-mail enviado!</ErrorMessage>
              </Error>
            )}
          </>
        )}
      </LoginContainer>
    </Container>
  );
}

export default Main;
