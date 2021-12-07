import { Routes, Route } from 'react-router-dom';
import Menu from './routes/Menu/Menu';
import Home from './routes/Home/Home';
import Posts from './routes/Posts/Posts';
import Photos from './routes/Photos/Photos';

export default function App() {
    return (
        <>
            <Menu />
            <Routes>
                {/* <Route path="reactjs-routing/contacts" element={<Contacts />} /> */}
                <Route path="/posts" element={<Posts />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/" exact element={<Home />} />
            </Routes>
        </>
    );
}