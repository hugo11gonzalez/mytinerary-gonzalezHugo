import React from 'react'

const index = () => {
  return (
    <>
        <div className="container-fluid col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://media.istockphoto.com/id/1439840143/es/foto/panorama-de-la-plaza-de-mayo-buenos-aires-vista-a%C3%A9rea-de-la-casa-rosada-palacio-de-gobierno-de.jpg?s=612x612&w=0&k=20&c=cgmHOK1Cj_aBSOIzQadZW5xi-X3cmt9yr42hw3EG4gk=" className="d-block mx-lg-auto img-fluid rounded" alt="Casa Rosada vista Aerea" width="700" height="500" loading="lazy"/>

      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Find the perfect destination</h1>
        <p className="lead">Find your perfect trip, designed by insiders who know and love their cities!" </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Find the destination</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default index
