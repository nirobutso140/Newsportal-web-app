import React, { useEffect } from 'react';
import useAxiosPrivet from '../../../hooks/useAxiosPrivet';
import { useState } from 'react';
import './AllUsers.css'
import Swal from 'sweetalert2';


const AllUsers = () => {
    const [users, setUsers] = useState([])
    const axiosPrivet = useAxiosPrivet()



    useEffect(()=>{
    axiosPrivet.get('/users')
        .then(res => setUsers(res.data))
    }, [])


    const handleMakeAdmin = (user) => {
        console.log(user);
        axiosPrivet.patch(`/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: `${user.name}`,
                        text: "Congratulation! you are admin now",
                        icon: "success"
                    });
                }
            })
    }



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className='thead'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>

                    {/* foot */}
                    {
                        users.map(user => <>
                        
                            <tbody className='tbody'>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    {user.photo && <img src={user.photo} alt="Avatar Tailwind CSS Component" />}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    
                                        
                                        {
                                            user.role === 'admin' ?
                                            <td className='admin'>Admin</td>
                                            :
                                            <td onClick={() => handleMakeAdmin(user)} className='user'>User</td>
                                        }
                                        
                                    
                                </tr>
                            </tbody>

                        </>)
                    }

                </table>
            </div>
        </div>
    );
};

export default AllUsers;