import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import './AllArticle.css'
import { Link } from 'react-router-dom';
const AllArticles = () => {
    const axiosPublic = useAxiosPublic()
    const [article, setArticle] = useState([])
    useEffect(() => {
        axiosPublic.get('/article')
            .then(res => setArticle(res.data))
        console.log(article);
    }, [])
    return (
        <>
            <div>
                {
                    article.map(singleArticle=><>
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={singleArticle.image} className="max-w-sm  " />
                                <div>
                                    <h1 className="text-5xl font-bold text-white">{singleArticle.title}</h1>
                                    <div className='flex-article'>
                                        <p className='article-first-flex'><span className='text-blue-600'>Publisher</span>: {singleArticle.publisher}</p>
                                        <p><span className='text-blue-600'>Article Type</span>: {singleArticle.option}</p>
                                    </div>
                                    <p className="py-6">{singleArticle.description}</p>
                                    <Link to={`/articleDetails/${singleArticle._id}`}><button className="btn bg-emerald-600 border-0 text-white">Article Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </>
    );
};

export default AllArticles;