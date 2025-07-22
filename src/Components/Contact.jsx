import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div className="contact">
      <h2 className=" text-uppercase text-center">conatct section</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="line me-3" />
        <i className="fa-solid fa-star" />
        <div className="line ms-3" />
      </div>
      <div classname="contact-info">
        <form
          noValidate
          action
          className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched"
        >
          <input
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            className="form-control border-0 border-bottom pb-3 my-5 position-relative ng-pristine ng-valid ng-touched"
          />
          
          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            name="userName"
            className="form-control border-0 border-bottom py-3 my-5 position-relative ng-pristine ng-valid ng-touched"
          />
          
          <input
            id="userEmail"
            type="text"
            placeholder="userEmail"
            name="userName"
            className="form-control border-0 border-bottom py-3 my-5 position-relative ng-pristine ng-valid ng-touched"
          />
        
          <input
            id="userPassword"
            type="text"
            placeholder="userPassword"
            name="userName"
            className="form-control border-0 border-bottom py-3 my-1 position-relative ng-pristine ng-valid ng-touched"
          />
          <button
            className="btn mt-4 text-white"
            style={{ backgroundColor: "#1abc9c" }}
          >
            {" "}
            send Message{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
