import "./ImageDisplay.css";

import { useEffect, useState } from "react";

const ImageDisplay = () => {
  const [images, setImages] = useState([]);
  const unsplash = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/?page=1&limit=3&client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }`
      );
      const data = await response.json();
      console.log(data);

      setImages(data);

      console.log(images);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    unsplash();
  }, []);

  return (
    <div className="imgDisWrap">
      <h2>image</h2>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img src={image.urls.small} alt={image.id}></img>
          </div>
        );
      })}
    </div>
  );
};

export default ImageDisplay;
