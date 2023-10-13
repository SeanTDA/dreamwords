import React, { useEffect, useRef } from "react";

const ImageCrop = ({ index, imageUrl, resolution, imageSubtitle, zoom = 5, imageClassName, borderRadius }) => {
  const canvasRef = useRef();
  const [IMAGE_WIDTH, IMAGE_HEIGHT] = resolution;

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      const x = (index % 2) * IMAGE_WIDTH / 2;
      const y = index > 1 ? IMAGE_HEIGHT / 2 : 0;
      const ctx = canvasRef.current.getContext('2d');

      ctx.clearRect(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT); // Clear previous content
      ctx.drawImage(image,
        x + zoom, y + zoom,
        (IMAGE_WIDTH / 2) - (zoom * 2), (IMAGE_HEIGHT / 2) - (zoom * 2),
        0, 0,
        IMAGE_WIDTH, IMAGE_HEIGHT
      );
    };

    image.src = imageUrl;
  }, [imageUrl, index, resolution]);

  return (
    <div>
      <div className={imageClassName}>
        <canvas
          ref={canvasRef}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          style={{
            width: '99%',
            borderRadius: `${borderRadius}px`,
          }}
        />
      </div>
      <div className="image-clue-subtitle">
        <b>{imageSubtitle}</b>
      </div>
    </div>
  );
};

export default ImageCrop;
