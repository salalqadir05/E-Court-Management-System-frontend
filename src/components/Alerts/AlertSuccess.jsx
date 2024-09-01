import React, { useEffect } from 'react'

function AlertSuccess(props) {

  return (
    <>

<div className="alert alert-success alert-dismissible d-flex align-items-center justify-content-centre ml-auto fade show w-50 ">
  <i className="bi-check-circle-fill" />
  <strong className="mx-2">Successfully!</strong> {props.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" />
</div>



    </>
  )
}

export default AlertSuccess