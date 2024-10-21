import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks }) => {
    return (
        <div className='py-10 space-y-6'>
            <div className='p-8 bg-[#1111110D] rounded-lg'>
                <h3 className='text-2xl font-bold'>Bookmarked Blogs : {bookmarks.length}</h3>
                    {
                        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                    }

            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array

}

export default Bookmarks;