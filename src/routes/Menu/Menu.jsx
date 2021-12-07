import { Link } from 'react-router-dom';
import './Menu.css';


export default function Menu() {
  return (
    <nav className="menu">
    <Link to="/" className="link-nav">Home</Link>
    <Link to="/contacts" className="link-nav">Contacts</Link>
    <Link to="/posts" className="link-nav">Posts</Link>
    <Link to="/photos" className="link-nav">Photos</Link>
</nav>
  );
}


