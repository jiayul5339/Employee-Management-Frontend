import { Link } from "react-router-dom";

const DashHeader = () => {
  return (
    <header className="dash-header">
        <div className="dash-header__container">
            <Link to="/dash">
                <h1>Dash</h1>
            </Link>
            <nav className="dash-header__nav">
                <Link to="/dash/notes">Notes</Link>
                <Link to="/dash/users">Users</Link>
            </nav>
        </div>
    </header>
  )
}

export default DashHeader