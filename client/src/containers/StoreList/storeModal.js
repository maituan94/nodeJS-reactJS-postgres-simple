import React, { useEffect } from 'react'
import Modal from '../../components/commons/Modal';
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addStore, updateStoreProfile, resetCreateOrUpdateSuccess } from '../../redux/actions/store'
import { merge } from 'lodash'

const StoreModal = (props) => {

  const defaultValues = {
    name: props.store?.name || '',
    address: props.store?.address || '',
    district: props.store?.district || '',
    city: props.store?.city || '',
    phone: props.store?.phone || '',
    employees: props.store?.employees || []
  }

  const dispatch = useDispatch()
  const createOrUpdateSuccess = useSelector(state => state.store.createOrUpdateSuccess)
  const { control, formState: { errors }, register, handleSubmit } = useForm({ defaultValues })
  const { fields, append, remove } = useFieldArray({ control, name: 'employees' })

  const { onCloseModal, modalTitle, isCreateNew } = props

  const onSubmit = (data) => {
    if (isCreateNew) {
      dispatch(addStore(data))
    } else {
      const mergedData = merge(props.store, data)
      dispatch(updateStoreProfile(mergedData))
    }
  }

  useEffect(() => {
    if (createOrUpdateSuccess) {
      onCloseModal(true)
      dispatch(resetCreateOrUpdateSuccess())
    }
  }, [createOrUpdateSuccess])

  return (
    <Modal toggle={onCloseModal}>
      <div className='store-form'>
        <div className='modal-header'>
          <h2>{modalTitle}</h2>
          <FontAwesomeIcon icon={faTimes} onClick={onCloseModal} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-item'>
            <div className='label'>Name: </div>
            <input name='name' placeholder='Store name...' ref={register({
              required: {
                value: true,
                message: 'Name is required'
              }
            })} />
          </div>
          {errors.name && <div className='error'>{errors.name.message}</div>}
          <div className='form-item'>
            <div className='label'>Address: </div>
            <input name='address' placeholder='Street...' ref={register()} />
          </div>
          <div className='form-item'>
            <div className='label'>District: </div>
            <input name='district' placeholder='District...' ref={register()} />
          </div>
          <div className='form-item'>
            <div className='label'>City: </div>
            <input name='city' placeholder='City' ref={register()} />
          </div>
          <div className='form-item'>
            <div className='label'>Phone: </div>
            <input name='phone' placeholder='Phone Number' ref={register({
              required: {
                value: true,
                message: 'Phone is required'
              },
              pattern: {
                value: /(0[3|5|7|8|9])+([0-9]{8})\b/,
                message: 'Invalid vietnam phone number'
              }
            })} />
          </div>
          {errors.phone && <div className='error'>{errors.phone.message}</div>}
          <div className='form-item add-employee'>
            <button onClick={(e) => {
              e.preventDefault()
              append({ name: '' });
            }}>Add new employee</button>
          </div>
          {fields.map((item, index) => {
            return (
              <div className='array-field' key={item.id}>
                <div className='form-item'>
                  <div className='employee-form'>
                    <input
                      placeholder='Employee Name...'
                      name={`employees[${index}].name`}
                      ref={register({
                        required: {
                          value: true,
                          message: 'Employee name is required'
                        }
                      })}
                      defaultValue={item.name}
                    />
                    {errors.employees && errors.employees[index]?.name && <div className='error'>{errors.employees[index].name.message}</div>}
                  </div>
                  <div className='employee-form'>
                    <Controller
                      defaultValue={item.role || ''}
                      render={({ value, onChange, onBlur }) => {
                        return (
                          <select
                            value={value}
                            onChange={(e) => {
                              onChange(e.target.value);
                            }}
                          >
                            <option value='' disabled selected>Select employee role</option>
                            <option value='manager'>Manager</option>
                            <option value='leader'>Leader</option>
                            <option value='member'>Member</option>
                          </select>
                        );
                      }}
                      name={`employees[${index}].role`}
                      rules={{ validate: value => value !== '' }}
                      control={control}
                    />
                    {errors.employees && errors.employees[index]?.name && <div className='error'>Role is required</div>}
                  </div>
                </div>
                <div className='form-item address'>
                  <input
                    placeholder='Address...'
                    name={`employees[${index}].address`}
                    ref={register()}
                    defaultValue={item.address}
                  />
                  <input
                    placeholder='District...'
                    name={`employees[${index}].district`}
                    ref={register()}
                    defaultValue={item.district}
                  />
                  <input
                    placeholder='City...'
                    name={`employees[${index}].city`}
                    ref={register()}
                    defaultValue={item.city}
                  />
                </div>
                <FontAwesomeIcon className='delete-employee' icon={faTrashAlt} onClick={() => remove(index)} />
              </div>
            );
          })}
          <button className='save-button' type='submit'>Save</button>
        </form>
      </div>
    </Modal>
  );
}

export default StoreModal;