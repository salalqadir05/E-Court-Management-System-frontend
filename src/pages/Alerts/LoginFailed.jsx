import React, { useState, useEffect } from 'react';

const LoginAlertFailed = () => {

  return (
    <div className=" d-flex justify-content-end">
    <div className="alert alert-danger alert-dismissible fade show w-25 ml-auto position-absolute mr-0 " role="alert">
    <strong>Logged In Failed</strong> 
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  </div>
  )
};

export default LoginAlertFailed;
