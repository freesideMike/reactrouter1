import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {


  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to={"/"}>Hem</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Om mig</NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>Projekt</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Kontakt</NavLink>
          </li>
          <li>
            <NavLink to={"/movies"}>Movies</NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div>&copy; Mikael Cardaba 2024</div>
      </footer>
    </>
  );
}
