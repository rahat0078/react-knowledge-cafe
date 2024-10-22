import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='py-10 space-y-6'>
            <h3
                className='p-6 rounded-lg border-2 border-[#6047ec50] bg-[#7162c520] text-2xl font-bold text-[#6047EC] text-center'>
                Spent time on read : {readingTime} min</h3>
            <div >
                <div className='p-8 bg-[#1111110D] rounded-lg'>

                    <h3 className='text-2xl font-bold'>Bookmarked Blogs : {bookmarks.length}</h3>
                    {
                        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>

    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number

}

export default Bookmarks;