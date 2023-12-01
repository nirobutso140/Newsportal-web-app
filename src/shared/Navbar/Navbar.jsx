import { useContext } from 'react';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

  
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log(user);

  const handleLogOut = () => {
      logOut()
          .then(() => console.log("logout successfully"))
          .catch(error => console.error(error))
  }


  return (
    <>
      <div className="navbar">
        <p className='nav_logo'>UPCOMMING</p>
        <div className="links">
          <li><NavLink to='/'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
            }
          >Home</NavLink></li>


          <li><NavLink to='/AddArticle'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
            }
          >Add Article</NavLink></li>
          <li><NavLink to='/allarticles'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
            }
          >All Article</NavLink></li>

          <li><NavLink to='dashboard/allusers'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
            }
          >Dashboard</NavLink></li>

          <li> <NavLink to='/login'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
            }
          >Login</NavLink></li>
          <li><NavLink to='/register'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
            }
          >Register</NavLink></li>
        </div>
        <div className="userInfo_logout">
          {

            user ?
              <>
                <span className='mr-2'>{user?.displayName}</span> 
                <button onClick={handleLogOut} className="btn btn-sm btn-secondary">Log out</button>
              </>
              :
              <Link to='/login'>
                <button className="btn btn-sm">Log in</button>
              </Link>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;