import { Link } from 'react-router-dom';
import './Menu.css';


export default function Menu() {
  return (
    <nav className="menu">
    <Link to="/21-homework/" className="link-nav">Home</Link>
    <Link to="/21-homework/contacts" className="link-nav">Contacts</Link>
    <Link to="/21-homework/posts" className="link-nav">Posts</Link>
    <Link to="/21-homework/photos" className="link-nav">Photos</Link>
</nav>
  );
}


