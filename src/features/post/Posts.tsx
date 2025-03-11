import PostModel from "../../models/PostModel";
import Post from "./Post";
import './Posts.css';

interface PostsProps {
    posts: PostModel[];
}

export default function Posts({ posts }: PostsProps) {
    return (
        <div className="posts-container">
            {
                posts.map(
                    p => <Post key={p.id} {...p}></Post>
                )
            }
        </div>
    )
}