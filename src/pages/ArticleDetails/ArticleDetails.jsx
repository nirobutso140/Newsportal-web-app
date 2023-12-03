import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useLoaderData } from 'react-router-dom';
import './ArticleDetails.css'

const ArticleDetails = () => {
    const singleArticle = useLoaderData()
    const axiosPublic = useAxiosPublic()
    console.log(singleArticle);

    return (
        <>
            <div className='articleDetails'>
                <div className="card lg:card-side bg-base-100">
                    <figure><img src={singleArticle.image} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{singleArticle.title}</h2>
                        <div className='flex-article'>
                            <p className='article-first-flex'><span className='text-blue-600'>Publisher</span>: {singleArticle.publisher}</p>
                            <p><span className='text-blue-600'>Article Type</span>: {singleArticle.option}</p>
                            
                        </div>
                        <p>{singleArticle.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticleDetails;