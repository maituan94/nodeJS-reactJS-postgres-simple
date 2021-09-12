import React, { useEffect } from 'react';

import ToastStyle from './ToastStyle';

const Toast = (props) => {
  const {
    children,
    type,
    left,
    top,
    position,
    right,
    isOpen,
    toggleToast
  } = props

  useEffect(() => {
    let timer = setTimeout(() => toggleToast(), 4000);
    return () => {
      clearTimeout(timer);
    }
  }, [isOpen])

  if (!isOpen) return ''
  return (
    <ToastStyle className={position} type={type} left={left} top={top} right={right} >
      <button onClick={toggleToast} />
      {children}
    </ToastStyle>
  )
}

Toast.defaultProps = {
  type: 'notice',
  left: '100%',
  top: '0',
  position: 'right',
  right: '0',
};

export default Toast;