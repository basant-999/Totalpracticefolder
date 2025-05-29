import React from 'react'

const SecondTop = () => {
  return (
   <>
     
         <nav className="navbar navbar-dark bg-dark px-4 py-3">
      <a className="navbar-brand text-warning fw-bold ps-4" href="#">
        login name
      </a>

      <div className="d-flex align-items-center">
        {/* Show these when user is NOT logged in */}
        <button className="btn btn-outline-light btn-sm me-2">
          Login
        </button>
        <button className="btn btn-warning btn-sm">
          Signup
        </button>

       
      </div>
    </nav>
   </>
  )
}

export default SecondTop