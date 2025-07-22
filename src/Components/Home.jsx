import { useEffect } from "react";
import img from "../assets/img.svg";
import favIcon from "../assets/favicon.png"
export default function Home() {
  useEffect(() => {
  document.title = "Home";
  }, []);
  useEffect(() => {
  const favicon = document.querySelector("link[rel~='icon']");
  if (favicon) {
    favicon.href = {favIcon};
  }
  }, []);


  return (
    <div className="home d-flex flex-column text-white">
      <div className="text-center ">
        <img src={img} className="mb-3" alt="" />
      </div>
      <di
        className="text-center pt-4 text-white"
      >
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
          start Framework
        </h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 bg-white"/>
          <i className="fa-solid fa-star" />
          <div className="line ms-3 bg-white"/>
        </div>
      </di>
      <div className="text-center"><p>Graphic Artist - Web Designer - Illustrator</p></div>
    </div>
  );
}
