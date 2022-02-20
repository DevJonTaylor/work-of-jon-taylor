function Bar({children}) {
  return (
    <nav className="navbar-component" role="navigation" aria-label="main navigation">
      <div className="container-fluid">
        {children}
      </div>
    </nav>
  );
}

export { Bar }