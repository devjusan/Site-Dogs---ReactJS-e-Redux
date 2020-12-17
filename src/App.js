import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';
import { useDispatch } from 'react-redux';
import { autoLogin } from './store/user';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
