import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_PHOTOS } from '../API';
import { PhotoInformation } from '../interfaces';
import './Photos.scss';

const Photos = () => {

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await axios
      .get(`${API_PHOTOS}`)
      .then(res => {
        console.log(res.data)
        setPhotos(res.data)
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
      {photos.map((photo: PhotoInformation) => {
          const { id, thumbnailUrl, title, albumId } = photo;
          return (
            <div key={id}
              className="item_container photo_container">

              <div className='photo_container_item'>
                
                <img src={thumbnailUrl} alt="photo" />
                <div className='title'>
                  <h4>{title}</h4>
                </div>
              </div>

            </div>
          );
        })}
    </>
  )
}

export default Photos