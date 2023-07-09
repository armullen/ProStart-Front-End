import { Link } from 'react-router-dom'

function Footer () {
    return (
        <div className='socials'> 
            <Link to='/contactus'>Connect with us!</Link>
            <h4>Copyright 2023 ProStart</h4>
            <h6>Website by Mullen Web Development</h6>           
        </div> 
    )
}

export default Footer;