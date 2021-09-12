import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Toast from '../../components/commons/Toast';
import Header from '../../components/Header';
import MegaMenu from '../../components/MegaMenu';
import HomeStyle from './HomeStyle';
import { loadingSelector, errorSelector } from '../../redux/selectors'

const Home = (props) => {
  const loading = useSelector(loadingSelector)
  const error = useSelector(errorSelector)
  const [isOpenToast, setIsOpenToast] = useState(false)

  useEffect(() => {
    if (error) {
      setIsOpenToast(true)
    }
  }, [error])

  return (
    <HomeStyle>
      <Header />
      <section className='body'>
        <div className='left-block'>
          <MegaMenu />
        </div>
        <div className='right-block'>
          {props.children}
        </div>
      </section>
      {loading && (
        <div className='loading'>
          <div className='loader' />
        </div>
      )}
      <Toast isOpen={isOpenToast} type={error ? 'error' : 'success'} toggleToast={() => setIsOpenToast(false)}>
        {error ? 'Error !' : 'Success !'}
      </Toast>
    </HomeStyle>
  )
}

export default Home;
