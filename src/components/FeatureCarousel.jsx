import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FeatureCarousel = () => {

    const [post, setPost] = useState([])

    useEffect(() => {

        axios.get('https://dummyjson.com/posts')
            .then(res => {
                console.log(res.data.posts, 'res');
                setPost(res.data.posts);
            });
    }, [])

    const postsRetrive = post.map(val => {
        return (
            <Carousel.Item interval={3000} key={val.id}>
                <div className="col d-flex align-items-start">
                    <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>
                    </div>
                    <div>
                        <h2>{val.title.slice(0, 50)}</h2>
                        <p>{val.body.slice(0, 250) + ' ...'}</p>
                        <Link to="/" className="btn btn-primary">
                            View
                        </Link>
                    </div>
                </div>

            </Carousel.Item>
        )
    })

    return (
        <>
            <div>
                <Carousel>
                    {postsRetrive}
                </Carousel>
            </div>
        </>
    )
}

export default FeatureCarousel
