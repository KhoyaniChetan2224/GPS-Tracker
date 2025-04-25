import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSingup from './pages/UserSingup'
import CaptainLogine from './pages/CaptainLogine'
import CaptainSingup from './pages/CaptainSingup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={< UserLogin />} />
        <Route path='/riding' element={< Riding />} />
        <Route path='/captain-riding' element={< CaptainRiding />} />

        <Route path='/singup' element={< UserSingup />} />
        <Route path='/caption-logine' element={< CaptainLogine />} />
        <Route path='CaptainSingup' element={< CaptainSingup />} />
        <Route path='/home' element={
            <UserProtectWrapper>
              < Home />
            </UserProtectWrapper>
          } />
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            < UserLogout />
          </UserProtectWrapper>
        } />
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>

        } />
        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App