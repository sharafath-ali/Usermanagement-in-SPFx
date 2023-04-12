import  { useState } from "react";
import * as React from 'react';
const UploadAndDisplayImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
     )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files![0]);
          
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;