import React from 'react'

function Failalert(props) {
  return (
    <>
            <div className="alert alert-danger alert-dismissible d-flex align-items-center justify-content-centre ml-auto fade show w-25">
        <i className="bi-exclamation-octagon-fill" />
        <strong className="mx-2">{props.item}!</strong> 
        {props.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" />
        </div>

    
    </>
  )
}

export default Failalert