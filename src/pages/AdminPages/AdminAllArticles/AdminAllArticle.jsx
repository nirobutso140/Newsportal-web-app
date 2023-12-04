import React from 'react';
import useAxiosPrivet from '../../../hooks/useAxiosPrivet';
import { FcApproval } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import './AdminAllArticle.css'
import { useEffect } from 'react';
import { useState } from 'react';

const AdminAllArticle = () => {
    const [adminArticle, setAdminArticle] = useState([])
    const axiosPrivet = useAxiosPrivet()
    useEffect(() => {
        axiosPrivet.get('/article')
            .then(res => setAdminArticle(res.data))
        console.log(adminArticle);
    }, [])
    return (
        <>
            <div className='adminArticle'>
                {
                    adminArticle.map(adminSingleArt => <>
                       <div className="hero ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            {/* <img src={adminSingleArt.image} className="max-w-sm rounded-lg shadow-2xl" /> */}
                            <div>
                                <h1 className="text-5xl font-bold">{adminSingleArt.title}</h1>
                                <div className="publish text-rose-600">
                                   <p className='publisher_first'>{adminSingleArt.publisher}</p>
                                   <p>{adminSingleArt.option}</p>
                                </div>
                                <p className="py-6">{adminSingleArt.description}</p>
                                <div className='author text-teal-400'> 
                                    <p className='author_item'>{adminSingleArt.author}</p>
                                    <p className='author_item'>{adminSingleArt.email}</p>
                                    <p className='author_item'>{adminSingleArt.date}</p>
                                    <img src={adminSingleArt.image} alt="" />
                                </div>
                               <div className="icon_container">
                                <FcApproval className="approval icon"/>
                                <MdDelete className="delete icon"/>
                                <MdWorkspacePremium className="premium icon"/>
                                <VscSignOut className="leave icon"/>
                               </div>
                            </div>
                        </div>
                    </div>
                    </>)
                }
            </div>
        </>
    );
};

export default AdminAllArticle;