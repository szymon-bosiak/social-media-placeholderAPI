import axios from 'axios';
import { AiOutlineUndo, AiOutlineUserAdd, AiOutlineUserDelete } from 'react-icons/ai';
import React, { useEffect, useState } from 'react'
import { API_DELETE_PROFILE, API_PROFILE } from '../API';
import { AddressInformation, CompanyInformation, UserInformation } from '../interfaces';
import './Profile.scss';
import PopupCreate from './ProfileComponents/PopupCreate';
import PopupUpdate from './ProfileComponents/PopupUpdate';
import MyPosts from './ProfileComponents/MyPosts';

const Profile = () => {

  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      await axios
        .get(`${API_PROFILE}`)
        .then(res => {
          setProfile(res.data)
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

  function deleteUser() {
    if (window.confirm('Do you want to delete this user profile?')) {
      alert('Profile has been deleted.')
      fetch(`${API_DELETE_PROFILE}`, {
        method: 'DELETE',
      });
    } else {
      alert('Profile has NOT been deleted.')
    }
  }

  const togglePopupCreate = () => {
    setIsOpenCreate(!isOpenCreate)
  }

  const togglePopupUpdate = () => {
    setIsOpenUpdate(!isOpenUpdate)
    setProfile(profile)
  }

  return ( 
    <div>
      {loading ? <p>Loading...</p> : <></>}
      {profile.map((user: UserInformation) => {
        const { id, name, username, email, phone, website, address, company } = user;
        return (
          <div key={`${Math.random() * 1000}`}>
            <div className="profile_container" >
              <div
                className="item_container users_container">

                <div className="user">
                  <p className="label">{id} - user ID</p>
                  <div className='username'>
                    <h4>{username}</h4>
                    <p className="inline smol"> - username</p>
                  </div>
                  <p>{name}</p>
                </div>

                <div className="contact">
                  <p className='label'>Contact</p>
                  <p>{email}</p>
                  <p>{phone}</p>
                  <p className="smol">or visit:</p>
                  <p>{website}</p>
                </div>

                <div className='address'>
                  {[address].map((addressDetails: AddressInformation) => {
                    const { city, street, suite, zipcode } = addressDetails;
                    return (
                      <div key={zipcode}>
                        <p className='label'>Address</p>
                        <p>{suite}</p>
                        <p>{street}</p>
                        <p>{city}</p>
                        <p>{zipcode}</p>
                      </div>
                    )
                  })}
                </div>

                <div className='company'>
                  {[company].map((companyDetails: CompanyInformation) => {
                    const { bs, catchPhrase, name } = companyDetails;
                    return (
                      <div key={name}>
                        <p className='label'>Company</p>
                        <p>{name}</p>
                        <p className='smol'>What we do:</p>
                        <p>{bs}</p>
                        <p className='smol'>Our catch phrase:</p>
                        <p>{catchPhrase}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="buttons">
                <div className="create">
                  <button onClick={togglePopupCreate}>
                    <i className='btn_icon'>
                      < AiOutlineUserAdd />
                    </i>
                    <p className='btn_txt'>Create new user</p>
                  </button>
                </div>

                <div className="update">
                  <button onClick={togglePopupUpdate}>
                    <i className='btn_icon'>
                      < AiOutlineUndo />
                    </i>
                    <p className='btn_txt'>Update user information</p>
                  </button>
                </div>

                <div className="delete">
                  <button onClick={deleteUser}>
                    <i className='btn_icon'>
                      < AiOutlineUserDelete />
                    </i>
                    <p className='btn_txt'>Delete user</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {isOpenCreate && <PopupCreate
        handleCloseCreate={togglePopupCreate}
      />}

      {isOpenUpdate && <PopupUpdate
        handleCloseUpdate={togglePopupUpdate}
        profile={profile} />}

      <MyPosts />

    </div>
  )
}

export default Profile