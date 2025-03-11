import PostModel from "../../models/PostModel";
import Post from "./Post";
import './Posts.css';

interface PostsProps {
    posts: PostModel[];
    setSelectedPost: (post: PostModel) => void;
    onDeletePost: (id: number) => void;
}

export default function Posts({ posts, setSelectedPost, onDeletePost }: PostsProps) {
    return (
        <div className="posts-container">
            {
                posts.map(
                    p => {
                        return <Post key={p.id} {...p}
                            setSelectedPost={setSelectedPost}
                            onDeletePost={onDeletePost}
                        />
                    }
                )
            }
        </div>
    )
}