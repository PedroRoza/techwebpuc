import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('Clique em acessar para fazer a verificação');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = () => {
    if (password.length < 6 || !email.includes('@')) {
      setMsg('Usuário ou senha incorretos!');
      return;
    }
    if (email === 'eduardo.lino@pucpr.br' && password === '123456') {
      setMsg('Acessado com sucesso!');
    } else {
      setMsg('Usuário ou senha incorretos!');
    }
  };
  return (
    <div className="geral">
     <h1>
      Login
     </h1>
     <div className='divinput'>
      <input className='inputLogin' type="email" placeholder='Digite seu Email' value={email}
            onChange={handleEmailChange}/>
     </div>
     <div className='divinput'>
      <input className='inputLogin' type="password" placeholder='Digite sua Senha'  value={password}
            onChange={handlePasswordChange}/>
     </div>
      <button className='btnAcesso' onClick={handleLogin}>Acessar</button>
      {msg} {/* exibe a mensagem caso o acesso tenha sido bem sucedido */}
    </div>
  );
}

export default App;
