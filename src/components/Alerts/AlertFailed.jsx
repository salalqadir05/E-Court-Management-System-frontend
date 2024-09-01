import React from 'react'

function AlertFailed() {
  return (
    <>
<div className="alert alert-danger alert-dismissible d-flex align-items-center justify-content-centre ml-auto fade show w-50">
  <i className="bi-exclamation-octagon-fill" />
  <strong className="mx-2">Rejection!</strong> 
  Case is Rejected 
  <button type="button" className="btn-close" data-bs-dismiss="alert" />
</div>

    
    </>
  )
}

export default AlertFailed