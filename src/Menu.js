import {Outlet, Link } from 'react-router-dom';
import './App.css';


export default function Menu() {
  return (
    <nav className="menu">
    <Link to="/">Home</Link>
    <Link to="/contacts">Contacts</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/photos">Photos</Link>
</nav>
  );
}


