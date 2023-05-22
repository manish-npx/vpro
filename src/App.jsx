//import { useState } from 'react'
import './App.css'
import Auth from './components/navbar/Auth';
import Guest from './components/navbar/Guest';
import AuthUser from './components/AuthUser';



const App = () => {
  const { getToken } = AuthUser();

  return getToken() ? <Auth /> : <Guest />

}

export default App
