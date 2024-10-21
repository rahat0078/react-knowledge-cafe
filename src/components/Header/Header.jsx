import profile from '../../assets/profile.png';

const Header = () => {
    return (
        <header className="py-8 px-2 flex justify-between items-center border-b-2">
            <h1 className='text-6xl font-bold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>

    );
};

export default Header;