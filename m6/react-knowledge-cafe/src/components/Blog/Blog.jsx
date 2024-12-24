import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;

    return (
        <div className="mb-20">
            <img className="w-full" src={cover} alt={`Cover Photo ${title}`}></img>
            <div className="flex justify-between">
                <div className="flex my-4">
                    <img className="w-14" src={author_img} alt={`${author}`} />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <span>{reading_time} min read</span>
                    <button
                    onClick={() => handleAddToBookmark(blog)}
                    ><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p className="my-2">
                {
                    hashtags.map((hash, index, ) =>
                        <span className="mr-2" key={index}><a href="">#{hash}</a></span>
                    )
                }
            </p>
            <button 
            onClick={() => handleMarkAsRead(id, reading_time)}
            className="border-b-2 border-blue-600 text-blue-500">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;