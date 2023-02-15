import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_POSTS } from '../API';
import { PostInformation } from '../interfaces';
import './Posts.scss';

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      await axios
        .get(`${API_POSTS}`)
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
    <>
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
    </>
  )
}

export default Posts