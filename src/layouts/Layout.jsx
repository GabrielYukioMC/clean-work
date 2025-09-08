import React, { useState } from "react";
import "../styles/layout.css";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Header */}
      <header className="header">
        <h4 >Meu Projeto</h4>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      {/* Área principal */}
      <div className="main-container">
        {/* Menu Lateral */}
        <aside className="sidebar">
          <nav>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/todolist">To-Do List</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </aside>

        {/* Conteúdo */}
        <main className="content">
          {children || (
            <>
              <h2>Bem-vindo!</h2>
              <p>testeteteteetetetetete</p>
            </>
          )}
        </main>
      </div>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2025 Meu Projeto. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
