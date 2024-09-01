import React from 'react';

function SuccessAccount() {
  return (
    <div className="alert alert-success alert-dismissible fade show w-25 ml-auto" role="alert">
      <strong>Successfully Register Your Account</strong> 
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default SuccessAccount;
