import React from 'react'

const index = () => {
  return (
    <>
        <div className="container-fluid bg-info">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">&copy; 2023 Hugo Gonzalez, Inc</p>



                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Cities</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"><span><i className="bi bi-person-circle p-1 "></i></span>Login</a></li>

                </ul>
            </footer>
           </div>
    </>
  )
}

export default index
