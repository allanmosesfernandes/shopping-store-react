import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import  CrwnLogo  from '../../assets/crown.svg'
const Navigation = () => {
  return (
  <>
    <div className='navigation'>
        <Link className='logo' to='/'>
            <img src={CrwnLogo} />
        </Link>
        
        <div className="links-container">
            <Link className='nav-links-container' to='/shop'>Shop</Link> 
        </div>
    </div>
    <Outlet />
    </>

  )
}

export default Navigation