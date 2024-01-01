import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {'This magic brain will detect faces in any picture.'}
      </p>
      <div className="center">
        <div className="form center pa4 br4 shadow-5">
          <input className="f4 pa2 w-70 br2 center" type="text"/>
          <button className="w-30 f4 link ph3 pv2 dib white bg-purple grow pointer">Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;