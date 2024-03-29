import './App.css'
import LandingPage from './components/MainComponent'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar'
import {Routes, Route} from "react-router-dom" 
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import RentButton from './components/RentButton'
import {useAuth0} from '@auth0/auth0-react'
import { EmailForm } from './components/EmailForm'
function App() {

  return (
    // <div className="App">
    //   {/* <NavBar/>
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/signin" element={<SignIn/>} />
    //   </Routes> */}

    //   {/* <button>Hello World</button> */}
      

    // </div>
    <>
      <LoginButton />
      <LogoutButton />
      <EmailForm/>
    </>
  )
    
}

export default App
