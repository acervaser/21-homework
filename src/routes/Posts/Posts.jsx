import './Posts.css';
import Post from '../Post/Post';
import { getData } from '../Post/data';


export default function Posts(){
let postData = getData();
    return (
        <>
           
            <div className="posts">
                 {
                 postData.map((post) => {
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