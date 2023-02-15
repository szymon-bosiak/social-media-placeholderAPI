import React from 'react'
import { useForm } from 'react-hook-form';
import { Values } from '../interfaces';
import './Popup.scss';
import { CgCloseO } from 'react-icons/cg';


const PopupCreate = (props: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm<Values>();

    const onSubmitCreate = handleSubmit((data) => {
        console.log(data.name);

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
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

        props.handleCloseCreate()

        setTimeout(() => {
            alert('User created successfully.')
        }, 500)
    })

  return (
    <div className='popup'>
        <div className="popup-inner">
              <button className='close_btn' onClick={props.handleCloseCreate}><CgCloseO /></button>
            
              <div className="user_form">
                  <form onSubmit={onSubmitCreate}>
                      <input type="text" placeholder="Name" {...register("name", {
                          required: "This field must be filled in!", minLength: {
                              value: 3,
                              message: 'This field must contain at least 3 characters.'
                          }, maxLength: {
                              value: 16,
                              message: 'This field can contain up to 16 characters.'
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
                              value: /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/i,
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

                      <button type="submit" className='submit_btn'>Create new user</button>
                  </form>
              </div>

        </div>
    </div>
  )
}

export default PopupCreate