import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import './AllPublisher.css'


const AllPublisher = () => {
   const axiosPublic = useAxiosPublic()
   const [publisher, setPublisher] = useState([])
   useEffect(()=>{
      axiosPublic.get('/publisher')
      .then(res => setPublisher(res.data))
      
   }, [])
   console.log(publisher);
    return (
        <>
           {
             publisher.map(publish => <>
               <p>hello</p>
             </>)
           }
        </>
    );
};

export default AllPublisher;