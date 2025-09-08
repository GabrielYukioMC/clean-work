import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ToDoList from './pages/toDoList/ToDoList.jsx';
import Layout from './layouts/Layout.jsx'; // Layout com Header/Footer fixo

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<ToDoList />} />
          {/* Adicione outras rotas aqui */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
