import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <header>
        <h1>Meu Projeto</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 Meu Projeto. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
