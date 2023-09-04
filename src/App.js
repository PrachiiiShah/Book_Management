 //import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { Routes, Route } from "react-router-dom";


 import Home from "./Home";
 import Login from "./Login";
import Register from "./Register";

 import Book from "./Book";
import appStyle from "./AppStyle.module.css";


import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  const _isLogin = useSelector((state) => {
    return state.isLogin;
  });
  const _user = useSelector((state) => {
    return state.users;
  });
  // const { isLoggedIn, user } = useAuth();
  console.log(_user, _isLogin);
  return (
    <div className={appStyle.mainDiv}>
      
      <Routes>
        
         <Route path="login" element={_isLogin ? <Home /> : <Login />} /> 
        <Route path="register" element={_isLogin ? <Home /> : <Register />} />
          <Route path="/" element={_isLogin ? <Home /> : <Login />} /> 
      
        <Route
          path="/book"
          element={
            _isLogin && _user.roleId === 2 ? (
              <Book />
            ) : _isLogin && _user.roleId === 3 ? (
              <Home />
            ) 
          :(
              <login />
          )
            
              
            
          }
          />
        
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
