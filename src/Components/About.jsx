import { useEffect } from "react";



export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return <>
    <div className="About text-white d-flex flex-column justify-content-center align-content-center ">
      <h2 className="text-center">ABOUT COMPONENT</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 bg-white"/>
          <i className="fa-solid fa-star" />
          <div className="line ms-3 bg-white"/>
      </div>
      <div className="container ">
        <div className="row justify-content-evenly  px-5">
          <p className="w-50">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className="w-50">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
  </>;
}
