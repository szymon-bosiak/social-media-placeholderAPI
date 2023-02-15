import React from 'react'
import { useForm } from 'react-hook-form';
import { Values } from '../../interfaces';
import './Popup.scss';
import { CgCloseO } from 'react-icons/cg';
import { API_DELETE_PROFILE } from '../../API';

const PopupUpdate = (props: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm<Values>({
        defaultValues: {
            name: (props.profile[0].name),
            username: (props.profile[0].username),
            email: (props.profile[0].email),
            phone: (props.profile[0].phone),
            website: (props.profile[0].website),
            city: (props.profile[0].address.city),
            street: (props.profile[0].address.street),
            suite: (props.profile[0].address.suite),
            zipcode: (props.profile[0].address.zipcode),
            bs: (props.profile[0].company.bs),
            catchPhrase: (props.profile[0].company.catchPhrase),
        }
    });

    const onSubmitUpdate = handleSubmit((data) => {
        fetch(`${API_DELETE_PROFILE}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: (data.name),
                username: (data.username),
                email: (data.email),
                phone: (data.phone),
                website: (data.website),
                city: (data.city),
                street: (data.street),
                suite: (data.suite),
                zipcode: (data.zipcode),
                bs: (data.bs),
                catchPhrase: (data.catchPhrase),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        props.handleCloseUpdate()
        setTimeout(() => {
            alert('User information updated successfully.')
        }, 500)
    })

  return (
      <div className='popup'>
            
          <div className="popup-inner">
              <button className='close_btn' onClick={props.handleCloseUpdate}><CgCloseO /></button>
                {/* <p>{users}</p> */}
              <div className="user_form">
                  <form onSubmit={onSubmitUpdate}>
                      <input type="text" placeholder="Name" {...register("name", {
                          required: "This field must be filled in!", minLength: {
                              value: 3,
                              message: 'This field must contain at least 3 characters.'
                          }, maxLength: {
                              value: 26,
                              message: 'This field can contain up to 26 characters.'
                          },
                      })} />
                      <p className='error_msg'>{errors.name?.message}</p>

                      <input type="text" placeholder="Username" {...register("username", {
                          required: "This field must be filled in!", minLength: {
                              value: 3,
                              message: 'This field must contain at least 3 characters.'
                          }, maxLength: {
                              value: 16,
                              message: 'This field can contain up to 16 characters.'
                          },
                      })} />
                      <p className='error_msg'>{errors.username?.message}</p>

                      <input type="email" placeholder="Email" {...register("email", {
                          required: "This field must be filled in!", max: 40, min: 5, maxLength: 40,
                          pattern: {
                              value: /[\w-.]+@([\w-]+\.)+[\w-]{2,4}/i,
                              message: "Invalid email address."
                          }
                      })} />
                      <p className='error_msg'>{errors.email?.message}</p>

                      <input type="text" placeholder="Phone" {...register("phone", {
                          required: "This field must be filled in!", minLength: {
                              value: 9,
                              message: 'This field must contain at least 9 characters.'
                          }, maxLength: {
                              value: 16,
                              message: 'This field can contain up to 16 characters.'
                          },
                      })} />
                      <p className='error_msg'>{errors.phone?.message}</p>

                      <input type="text" placeholder="Website" {...register("website", {
                          required: "This field must be filled in!", minLength: {
                              value: 5,
                              message: 'This field must contain at least 5 characters.'
                          }, maxLength: {
                              value: 40,
                              message: 'This field can contain up to 40 characters.'
                          },
                      })} />
                      <p className='error_msg'>{errors.website?.message}</p>

                      <input type="text" placeholder="City" {...register("city", {
                          required: "This field must be filled in!", minLength: {
                              value: 3,
                              message: 'This field must contain at least 3 characters.'
                          }, maxLength: {
                              value: 15,
                              message: 'This field can contain up to 15 characters.'
                          },
                      })} />
                      <p className='error_msg'>{errors.city?.message}</p>

                      <input type="text" placeholder="Street" {...register("street", {
                          required: "This field must be filled in!", minLength: {
                              value: 3,
                              message: 'This field must contain at least 3 characters.'
                          }, maxLength: {
                              value: 18,
                              message: 'This field can contain up to 18 characters.'
                          },
                      })} />
                      <p className='error_msg'>{errors.city?.message}</p>

                      <input type="text" placeholder="Suite" {...register("suite", {
                          required: "This field must be filled in!", minLength: {
                              value: 3,
                              message: 'This field must contain at least 3 characters.'
                          }, maxLength: {
                              value: 18,
                              message: 'This field can contain up to 18 characters.'
                          },
                      })} />
                      <p className='error_msg'>{errors.suite?.message}</p>

                      <input type="text" placeholder="Zip code" {...register("zipcode", {
                          required: "This field must be filled in!", minLength: {
                              value: 6,
                              message: 'This field must contain at least 6 characters.'
                          }, maxLength: {
                              value: 12,
                              message: 'This field can contain up to 12 characters.'
                          },
                      })} />
                      <p className='error_msg'>{errors.zipcode?.message}</p>

                      <input type="text" placeholder="Base subject" {...register("bs", {
                          required: "This field must be filled in!", minLength: {
                              value: 3,
                              message: 'This field must contain at least 3 characters.'
                          }, maxLength: {
                              value: 40,
                              message: 'This field can contain up to 40 characters.'
                          },
                      })} />
                      <p className='error_msg'>{errors.bs?.message}</p>

                      <input type="text" placeholder="Catch phrase " {...register("catchPhrase", {
                          required: "This field must be filled in!", minLength: {
                              value: 3,
                              message: 'This field must contain at least 3 characters.'
                          }, maxLength: {
                              value: 40,
                              message: 'This field can contain up to 40 characters.'
                          },
                      })} />
                      <p className='error_msg'>{errors.catchPhrase?.message}</p>

                      <button type="submit" className='submit_btn'>Update user information</button>
                  </form>
              </div>

          </div>
      </div>
  )
}

export default PopupUpdate