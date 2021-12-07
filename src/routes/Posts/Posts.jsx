import './Posts.css';
import Post from '../Post/Post';
import POSTS_DATA from './Data';
import Nav from '../Nav/Nav';

export default function Posts(){

    return (
        <>
            <Nav />
            <div className="posts">
                {
                POSTS_DATA.map((post) => {
                    return <Post 
                    author={post.author}
                    content={post.content}
                    image={post.image}
                    date={post.date}
                    />
                })
                }
            </div>
        </>
    );
}