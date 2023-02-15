import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_USERS } from '../API';
import { AddressInformation, CompanyInformation, UserInformation } from '../interfaces';
import './Users.scss';

const Users = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      await axios
        .get(`${API_USERS}`)
        .then(res => {
          setUsers(res.data)
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
      {users.map((user: UserInformation) => {
          const { id, name, username, email, phone, website, address, company } = user;
          return (
            <div key={id}
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
          );
        })}
    </>
  )
}

export default Users