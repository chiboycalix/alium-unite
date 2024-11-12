import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddUserPage from './pages/AddUserPage';
import ManageUsersPage from './pages/ManageUsersPage';
import { UserProvider } from './context/UserContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Toaster position="top-right" />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-user" element={<AddUserPage />} />
            <Route path="/manage-users" element={<ManageUsersPage />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  );
}

export default App;