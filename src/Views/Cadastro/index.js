import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

function Cadastro (){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [data, setData] = useState('');
  const [msg, setMsg] = useState('');
  const [user, setUser] = useState(null);
  const handleName = (event) => {
    setNome(event.target.value);
  };
  const handleLastName = (event) => {
    setSobreNome(event.target.value);
  };
  const handleDate = (event) => {
    setData(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleCadastro = (event) => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        user.updateProfile({
          displayName: nome + " " + sobreNome
        }).then(() => {
          // Update successful
          firebase.firestore().collection('users').doc(user.uid).set({
            data: data,
            email: email
          })
          setUser(user);
          setMsg('Cadastro realizado com sucesso!');
        }).catch((error) => {
          // An error occurred
          setMsg(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMsg(errorMessage);
      });
  };
  
    return (
        <div className="geralCadastro">
        <h1>
         Cadastro de usuário
        </h1>
        <div className='divinput' style={{display: 'flex'}
        }>
         <input style={{marginRight: '10px'}} className='inputLogin' type="text" placeholder='Nome' value={nome}
               onChange={handleName}/>
         <input className='inputLogin' type="text" placeholder='Sobrenome' value={sobreNome}
               onChange={handleLastName}/>
        </div>
        <div>
          
        </div>
        <div style={{display: 'flex'}}>
            <div style={{display: 'flex', paddingTop: '8px', justifyContent: 'start', width: '290px', height: '30px', alignItems: 'center'}}>
                <h4>
                    Data de Nascimento
                </h4>
            </div>
        <input className='inputLogin' type="date" placeholder='Data de aniversário' value={data}
               onChange={handleDate}/>
         
        </div>
        <div style={{marginTop: '10px'}}>
        <input style={{marginRight: '10px'}} className='inputLogin' type="email" placeholder='Email' value={email}
               onChange={handleEmailChange}/>
         <input className='inputLogin' type="password" placeholder='Senha'  value={password}
               onChange={handlePasswordChange}/>
        </div>
        <div className='divinput'>
        </div>
        <div style={{display: 'flex'}}>
         <button className='btnAcesso' onClick={handleCadastro} style={{marginRight: '10px'}}>Cadastrar</button>
         <button className='btnAcesso' onClick={() => navigate('/')}>Voltar</button>
 
        </div>
         {msg} {/* exibe a mensagem caso o acesso tenha sido bem sucedido */}
       </div>
      );
}
export default Cadastro