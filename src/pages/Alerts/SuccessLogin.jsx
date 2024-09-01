import React from 'react';

function SuccessLogin() {
  return (
    <div className="alert alert-success alert-dismissible fade show w-25 ml-auto" role="alert">
      <strong>Successfully Logged In</strong> 
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default SuccessLogin;
