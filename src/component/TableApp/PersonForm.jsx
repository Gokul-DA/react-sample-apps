import { DevTool } from '@hookform/devtools'
import React, { Component } from 'react'
import { useForm } from 'react-hook-form'
import './personForm.css'
function PersonForm(props) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmitHandler = (e) => {
    if (props.editedRecord) {
      props.updatePerson(e)
    } else {
      props.addPerson(e)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='form-group'>
          <label>First Name</label>
          <input
            type='text'
            className='form-control'
            defaultValue={
              props.editedRecord ? props.editedPerson.firstName : ''
            }
            id='firstName'
            aria-describedby='firstName'
            placeholder='Enter First Name'
            {...register('firstName', {
              required: 'First Name cannot be empty',
              maxLength: {
                value: 30,
                message: 'First Name must be at most 30 characters long',
              },
              minLength: {
                value: 3,
                message: 'First Name must be at least 3 characters long',
              },
            })}
          />
          <p className='error'>{errors.firstName?.message}</p>
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input
            type='text'
            className='form-control'
            defaultValue={props.editedRecord ? props.editedPerson.lastName : ''}
            id='lastName'
            aria-describedby='lastName'
            placeholder='Enter Last Name'
            {...register('lastName', {
              required: 'Last Name cannot be empty',
            })}
          />
          <p className='error'> {errors.lastName?.message} </p>
        </div>
        <div className='form-group'>
          <label>Address</label>
          <input
            type='text'
            className='form-control'
            defaultValue={props.editedRecord ? props.editedPerson.address : ''}
            id='address'
            aria-describedby='address'
            placeholder='Enter Address'
            {...register('address', {
              required: 'Address cannot be empty',
            })}
          />
          <p className='error'> {errors.address?.message} </p>
        </div>

        {props.editedRecord && (
          <>
            <button type='submit' className='btn btn-primary'>
              Update
            </button>
            <button
              type='reset'
              className='btn btn-primary'
              onClick={props.cancelEdit}
            >
              Cancel
            </button>
          </>
        )}
        {!props.editedRecord && (
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        )}
      </form>
      <DevTool control={control}></DevTool>
    </div>
  )
}

export default PersonForm
