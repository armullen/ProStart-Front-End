import { Link } from 'react-router-dom'

function Header() {
    return(
        <div className="header">
            <nav className='navBar'>
                <Link to='/'>Home</Link>
                <Link to='/facilities'>Facilities</Link>
                <Link to='/calendar'>Calendar</Link>
                <Link to='/ourstaff'>Our Staff</Link>
            </nav>
        </div>
    )
}

export default Header;