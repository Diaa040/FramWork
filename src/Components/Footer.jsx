import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="info card-group m-4 d-flex flex-md-row justify-content-evenly flex-md-wrap">
        <div className="location text-center"> 
          <h3>LOCATION</h3>
          <p>Graphic Artist - Web Designer - Illustrator</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="social text-center ">
          <h3>AROUND THE WEB</h3>
          <div className="icons">
            <i class="fa-brands fa-facebook mx-1"></i>
            <i class="fa-brands fa-twitter mx-1"></i>
            <i class="fa-brands fa-linkedin mx-1"></i>
            <i class="fa-solid fa-globe mx-1"></i>
          </div>
        </div>
        <div className="about">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
      </div>
      <div className="copyright">
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  )
}
