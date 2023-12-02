import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import './AllPublisher.css'
import Title from '../../../components/Title';



const AllPublisher = () => {
   const axiosPublic = useAxiosPublic()
   const [publisher, setPublisher] = useState([])
   useEffect(() => {
      axiosPublic.get('/publisher')
         .then(res => setPublisher(res.data))

   }, [])
   console.log(publisher);
   return (
      <>
         <br /><br /><br /><br />
         <Title>ALL PUBLISHER</Title>
         <div className="publisher_container">
           
            {
               publisher.map(publish => <>
                   <div className="publisher">
                      <img src={publish.photo} alt="" />
                      <p>{publish.name}</p>
                   </div>
               </>)
            }
         </div>
      </>
   );
};

export default AllPublisher;