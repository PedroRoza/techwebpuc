import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // importe o módulo firestore para acessar o banco de dados

const auth = firebase.auth();
const db = firebase.firestore(); // inicialize o módulo firestore

function Home() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, email, displayName } = user;
        
        // Obtenha os dados do usuário a partir do banco de dados
        db.collection('users').doc(uid).get().then(doc => {
          if (doc.exists) {
            const { barcode } = doc.data();
            setUserData({ uid, email, displayName, barcode });
          } else {
            setUserData({ uid, email, displayName });
          }
        });
      } else {
        setUserData(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="geralCadastro">
        <h1>
         Dados de usuário
        </h1>
        <div className='divinput'>
         <h1>Bem-vindo(a), {userData?.displayName}</h1>
        <div className='divinput'>
            <p>Seu ID de usuário é: {userData?.uid}</p>
        </div>
        </div>
        <div style={{display: 'flex'}}>
         <button className='btnAcesso' onClick={() => navigate('/')}>Voltar</button>      
        </div>
    </div>
  );
}

export default Home;
