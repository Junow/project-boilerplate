import React, {useState} from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const login = async ()=>{
    const data = {
      id:id,
      pwd:pwd
    }
    axios.post('http://localhost:3000/login', data)
    .then(response=>{
      if(response.data.success){
        alert('login success');
      } else{
        alert(`login fail! - ${response.data.message}`);
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const changeId = (e:React.ChangeEvent) =>{
    const target = e.target as HTMLInputElement;
    setId(target.value);
  }
  
  const changePwd = (e:React.ChangeEvent) =>{
    const target = e.target as HTMLInputElement;
    setPwd(target.value);
  }

  return (
    <div className="App">
      <input placeholder='id' onChange={changeId} value={id}/>
      <input placeholder='pwd' type='password' onChange={changePwd} value={pwd}/>
      <input type='submit' value='login' onClick={login}/>
    </div>
  );
}

export default App;
