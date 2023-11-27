import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <div className="sideBar">
                    <p className='nav_logo'>UPCOMMING</p>
                    <li><NavLink to='dashboard/allusers'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    >All Users</NavLink></li>


                    <li><NavLink to='dashboard/allarticls'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    >All Articles</NavLink></li>
                    <li><NavLink to='dashboard/addpublisher'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    >Add Publisher</NavLink></li>

                    <li><NavLink to='/myschedules'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    >My Schedules</NavLink></li>

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
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default Dashboard;