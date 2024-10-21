import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog
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
                    <div className='text-xl text-gray-500'>
                        <span>{reading_time} min read</span>
                    </div>
                </div>
                <h2 className='text-4xl font-bold leading-snug w-3/4'>{title}</h2>
                <p className='text-xl text-gray-500'>
                    {
                        hashtags.map((hashtag, idx) => <span key={idx}>#{hashtag} </span>)
                    }
                </p>
                <p ><a href="" className='underline text-[#6047EC] font-semibold'>mark as read</a></p>
            </div>






            {/* <div className='px-2 space-y-4 mb-8 border-b-2 '>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <img src={author_img} className='w-16' alt="" />
                        <div>
                            <h4 className='text-2xl font-semibold'>{author}</h4>
                            <p className='text-gray-500'>{posted_date}</p>
                        </div>
                    </div>
                    
                </div>
                
                
                
            </div> */}
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;