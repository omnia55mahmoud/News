import NavLink from './nav-link';

export default function MainHeader() {
  
  return (
    <header id="main-header">
      <div id="logo">
        <NavLink href="/">NextNews</NavLink>
      </div>
      <nav>
        <ul>
          <NavLink href="/news">News</NavLink>
          <NavLink href="/archive">Archive</NavLink>
        </ul>
      </nav>
    </header>
  );
}