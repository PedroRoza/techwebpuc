import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const auth = firebase.auth();
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
      navigate('/Home'); // Redireciona para a página de dashboard após o login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="geral">
      <h1>Acesse sua conta</h1>
      <div className="divinput">
        <input
          className="inputLogin"
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="divinput">
        <input
          className="inputLogin"
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <button className="btnAcesso" onClick={handleLogin} style={{ marginRight: '10px' }}>
          Login
        </button>
        <button className="btnAcesso" onClick={() => navigate('/Cadastro')}>
          Cadastrar
        </button>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
}

export default Login;
