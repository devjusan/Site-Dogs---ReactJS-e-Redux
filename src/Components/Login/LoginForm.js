import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import Head from '../Helper/Head';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/user';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { token, user } = useSelector((state) => state);
  const loading = token.loading || user.loading;
  const error = token.error || user.error;

  const dispatch = useDispatch();

  async function handleLogin(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      dispatch(
        userLogin({ username: username.value, password: password.value }),
      );
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Logar" description="Login no site Dogs." />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input name="username" label="Usuário" type="text" {...username} />
        <Input name="password" label="Senha" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos'} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se agora!</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
