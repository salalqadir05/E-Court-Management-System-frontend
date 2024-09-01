import React from 'react'

function newAlertFailed() {
  return (
    <>
<div className="container mt-5">
  <div className="row">
    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
      <div className="alert alert_info"> <button aria-hidden="true" data-dismiss="alert" className="close" type="button">×</button> <strong>Info!</strong> </div>
      <div className="alert alert_success"> <button aria-hidden="true" data-dismiss="alert" className="close" type="button">×</button> <strong>success!</strong> </div>
      <div className="alert alert_warning"> <button aria-hidden="true" data-dismiss="alert" className="close" type="button">×</button> <strong>warning!</strong> </div>
      <div className="alert alert_error"> <button aria-hidden="true" data-dismiss="alert" className="close" type="button">×</button> <strong>error!</strong> </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default newAlertFailed