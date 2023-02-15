import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_MY_POSTS } from '../../API';
import { PostInformation } from '../../interfaces';
import '../Posts.scss';

const MyPosts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            await axios
                .get(`${API_MY_POSTS}`)
                .then(res => {
                    setPosts(res.data)
                })
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="my_posts">
            <p className='my_posts-header'>My posts:</p>
            {loading ? <p>Loading...</p> : <></>}
            {posts.map((post: PostInformation) => {
                const { id, body, title } = post;
                return (
                    <div key={id}
                        className="item_container post_container">

                        <div className="post">
                            <div className='title'>
                                <h4>{title}</h4>
                            </div>
                            <p>{body}</p>
                        </div>

                    </div>
                );
            })}
        </div>
    )
}

export default MyPosts