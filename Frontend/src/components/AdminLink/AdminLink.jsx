import { Link } from "react-router-dom";
import "./admin-link.scoped.css";
export default function AdminLink() {
  return (
    <div className="admin-container">
      <Link to="/administracion">Administración</Link>
    </div>
  );
}
