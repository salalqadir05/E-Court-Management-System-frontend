import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date();

  return (
    <>
    <footer className="bg-light py-2 mt-auto">
      <div className="container d-flex justify-content-end align-items-center">
        <strong className="text-dark">
          Copyright © {date.getFullYear()} <Link to="/lawyerpanel">E-Court Management System</Link>.
        </strong>
        All rights reserved.
      </div>
    </footer>

<aside className="control-sidebar control-sidebar-dark">
</aside>
</>
  );
};

export default Footer;
