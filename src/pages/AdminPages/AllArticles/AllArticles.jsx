import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

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
                        <div className="hero min-h-screen ">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={singleArticle.image} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary">Get Started</button>
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