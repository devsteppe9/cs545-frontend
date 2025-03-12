import PostModel from "../../models/PostModel";
import Post from "./Post";
import './Posts.css';

interface PostsProps {
    posts: PostModel[];
    onDeletePost: (id: number) => void;
}

export default function Posts({ posts, onDeletePost }: PostsProps) {
    return (
        <div className="posts-container">
            {
                posts.map(
                    p => {
                        return <Post key={p.id} {...p}
                            onDeletePost={onDeletePost}
                        />
                    }
                )
            }
        </div>
    )
}