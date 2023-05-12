import './App.css';

function App() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [showProfile,setShowProfile] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={{username,email,showProfile,setUsername,setEmail,setShowProfile}}>
          {showProfile?<Profile username={username} email={email}></Profile>:<Login setUsername={setUsername} setEmail={setEmail} setShowProfile={setShowProfile}></Login>}
      </LoginContext.Provider>
    </div>
  );


}

export default App;
