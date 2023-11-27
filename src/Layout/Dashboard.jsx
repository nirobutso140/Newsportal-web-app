import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import './Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <div className="sideBar">
                    <p className='nav_logo'>UPCOMMING</p>
                    
                    <li><NavLink to='allusers'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    ><span><FaUserFriends /></span> <span>All Users</span></NavLink></li>


                    <li><NavLink to='dashboard/allarticls'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    ><MdOutlineArticle /> All Articles</NavLink></li>
                    <li><NavLink to='dashboard/addpublisher'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    ><IoMdPersonAdd /> Add Publisher</NavLink></li>

                    <li><NavLink to='/'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-fuchsia-600" : ""
                        }
                    ><IoHome /> Home</NavLink></li>
                </div>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default Dashboard;