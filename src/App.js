import React,{useState, useEffect} from 'react'
import { auth } from "./components/firebase";
import Home from "./components/Pages/Home"
import Login from "./components/Pages/Login"
import Error404 from "./components/Pages/Error404"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Appbar from './components/Appbar';
import PopularMovies from "./components/Pages/PopularMovies"
import PopularTv from "./components/Pages/PopularTv"
import Register from "./components/Pages/Register"
import Search from "./components/Pages/Search"
import Profile from "./components/Pages/Profile"
import Support from "./components/Pages/Support"


const App = () => {

  useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
     console.log(authUser);
     if (authUser) {
       setUser(authUser)
       setLogincheck(true)
     }
     else {
       setUser(null);
       setLogincheck(false)
     }
   })
  }, []);

  const [Logincheck,setLogincheck] = useState(false);
  

  const [User, setUser] = useState(null);

  return (
    <Router>
      {
        Logincheck ? (
            <>
              <Appbar Logincheck={Logincheck} User={User} />
              <Switch>

                <Route path="/" exact component={Logincheck ? Home : Login} />

                <Route path="/Filmler">
                  {
                    Logincheck ? (
                      <PopularMovies />
                    )
                    : (
                    <Login />
                    )
                  }
                </Route>

                <Route path="/Diziler">
                  {
                    Logincheck ? (
                      <PopularTv />
                    )
                    : (
                      <Login />
                    )
                  }
                </Route>

                <Route path="/Ara" component={Logincheck ? Search : Login} />
                <Route path="/Login" component={Logincheck ? Login : Login} />
                <Route path="/Register"component={Logincheck ? Home : Login} />



                <Route path="/Profil">
                  {
                    Logincheck ? (
                      <Profile User={User} />
                    )
                    : (
                      <Login />
                    )
                  }
                </Route>

                <Route path="/Destek"component={Logincheck ? Support : Login} />
                <Route path="*" component={Logincheck ? Error404 : Login} />
              </Switch>
            </>

            
          )
        : (
          <>
            <Appbar Logincheck={Logincheck} User={User} />
            <Login Logincheck={Logincheck} setLogincheck={setLogincheck} />
          </>
            
        )
      }
    </Router>
  )
}


export default App
