import React, { useState, useEffect } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';


export default function Portfolio() {
  useEffect(() => {
  document.title = "Portfolio";
  }, []);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImg = (id) => {
    const imgSrc = getImageById(id);
    setSelectedImage(imgSrc);
  };

  const closeImg = () => {
    setSelectedImage(null);
  };

  const getImageById = (id) => {
    switch (id) {
      case 'img1':
        return img1;
      case 'img2':
        return img2;
      case 'img3':
        return img3;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeImg();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="portfolio text-center container mb-4">
      <h2 className="text-uppercase">portfolio component</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="line me-3" />
        <i className="fa-solid fa-star" />
        <div className="line ms-3" />
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative image-box" onClick={() => openImg('img1')}>
              <img alt="" className="w-100 rounded-3" src={img1} />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative image-box" onClick={() => openImg('img2')}>
              <img alt="" className="w-100 rounded-3" src={img2} />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative image-box" onClick={() => openImg('img3')}>
              <img alt="" className="w-100 rounded-3" src={img3} />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative image-box" onClick={() => openImg('img2')}>
              <img alt="" className="w-100 rounded-3" src={img2} />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative image-box" onClick={() => openImg('img3')}>
              <img alt="" className="w-100 rounded-3" src={img3} />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative image-box" onClick={() => openImg('img1')}>
              <img alt="" className="w-100 rounded-3" src={img1} />
              <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay لعرض الصورة */}
      {selectedImage && (
        <div className="overlay" onClick={closeImg}>
          <img
            src={selectedImage}
            alt="Enlarged"
            className="popup-img"
            onClick={(e) => e.stopPropagation()} // لمنع الـ click داخل الـ image من غلق الـ overlay
          />
        </div>
      )}
    </div>
  );
}
