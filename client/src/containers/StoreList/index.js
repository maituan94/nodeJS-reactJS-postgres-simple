import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import StoreListStyle from './StoreListStyle'
import { storeSelector } from '../../redux/selectors'
import { getStores } from '../../redux/actions/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import StoreModal from './storeModal'

const StoreList = () => {
    const stores = useSelector(storeSelector)
    const dispatch = useDispatch()
    const defaultModalProps = {
        open: false,
        modalTitle: '',
        onCloseModal: null,
        store: null,
        reloadStoreList: null,
        isCreateNew: null
    }
    const [modalProps, setModalProps] = useState(defaultModalProps)

    useEffect(() => {
        dispatch(getStores())
    }, [])

    const getStoreManager = (employees) => {
        if (!employees || employees.length <= 0) return ''
        let managerName = ''
        employees.forEach(emp => {
            if (emp.role?.toLowerCase() === 'manager') {
                managerName = emp.name
                return false
            }
        });
        return managerName;
    }

    const closeModal = (isReloadList = false) => {
        setModalProps(defaultModalProps)
        if (isReloadList) dispatch(getStores())
    }

    const addStore = () => {
        setModalProps({
            open: true,
            isCreateNew: true,
            modalTitle: 'Add New Store',
            onCloseModal: (isReloadList) => closeModal(isReloadList),
        })
    }

    const editStore = (store) => {
        setModalProps({
            open: true,
            modalTitle: 'Add New Store',
            isCreateNew: false,
            onCloseModal: (isReloadList) => closeModal(isReloadList),
            store: store
        })
    }

    return (
        <StoreListStyle>
            <h2 className='title'>Store List</h2>
            <div className='button-list'>
                <button onClick={() => addStore()} className='add-new-store'>
                    Add a new store
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Manager</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {stores.length > 0 ? stores.map((store, idx) => (
                        <tr key={idx}>
                            <td>{store.name}</td>
                            <td>{store.phone}</td>
                            <td>{`${store.address}, ${store.district}, ${store.city}`}</td>
                            <td>{getStoreManager(store.employees)}</td>
                            <td><FontAwesomeIcon icon={faEdit} onClick={() => editStore(store)} /></td>
                        </tr>
                    )) : <tr><td className='empty-store' colSpan='5'>Please add a new store.</td></tr>}
                </tbody>
            </table>
            {modalProps.open && <StoreModal {...modalProps} />}
        </StoreListStyle>
    )
}

export default StoreList