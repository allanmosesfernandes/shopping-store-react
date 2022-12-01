import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import  CrwnLogo  from '../../assets/crown.svg'
const Navigation = () => {
  return (
  <>
    <div className='navigation'>
        <Link className='logo-container ' to='/'>
            <img src={CrwnLogo} />
        </Link>
        
        <div className="nav-links-container">
            <Link className='nav-link' to='/shop'>Shop</Link> 
            <Link className='nav-link' to='/sign-in'>Sign In</Link> 
        </div>
    </div>
    <Outlet />
    </>

  )
}

export default Navigation