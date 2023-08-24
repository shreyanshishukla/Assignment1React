import { Link } from "react-router-dom";

export default function Menu({ day, menus }) {
  console.log("menuss", day, menus);
  return (
    <div className="menu">
      <div className="menuname">{day}</div>
      {menus.map((m) => (
        <div className="options">
          <Link to={`/${m == "Home" ? "" : m}`}>{m}</Link>
        </div>
      ))}
    </div>
  );
}
