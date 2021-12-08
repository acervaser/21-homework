import { Routes, Route } from 'react-router-dom';
import Menu from './routes/Menu/Menu';
import Home from './routes/Home/Home';
import Posts from './routes/Posts/Posts';
import Photos from './routes/Photos/Photos';
import Contacts from './routes/Contacts/Contacts';

export default function App() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="21-homework/contacts" element={<Contacts />} />
                <Route path="21-homework/posts" element={<Posts/>} />
                <Route path="21-homework/photos"element={<Photos />} />
                <Route path="21-homework/" element={<Home />} />
            </Routes>
        </>
    );
}