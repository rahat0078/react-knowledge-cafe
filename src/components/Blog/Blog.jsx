import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className='border-b-2  py-10 space-y-6'>
            <div className='py-4'><img src={cover} alt="" className='w-full rounded-lg' /></div>
            <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <img src={author_img} className='w-16' alt="" />
                        <div>
                            <h4 className='text-2xl font-semibold'>{author}</h4>
                            <p className='text-gray-500'>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-gray-500'>
                        <span className='text-xl'>{reading_time} min read</span>

                        <button
                            onClick={() => handleAddToBookmark(blog)}
                            className='text-2xl'><CiBookmark /></button>
                    </div>
                </div>
                <h2 className='text-4xl font-bold leading-snug w-3/4'>{title}</h2>
                <p className='text-xl text-gray-500'>
                    {
                        hashtags.map((hashtag, idx) => <span key={idx}>#{hashtag} </span>)
                    }
                </p>
                <button
                    className='underline text-[#6047EC] font-semibold'
                    onClick={() => handleMarkAsRead(id, reading_time)}>
                    mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;