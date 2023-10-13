import React, { useContext, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { AppContext } from '../../App';
import ImageCrop from './imageCrop';

function ImageClue() {
  const appContext = useContext(AppContext);
  const { levelData, pressedLetters } = appContext;

  const [imageRes, setImageRes] = useState([null, null]);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
        console.log(image.width, image.height);
      setImageRes([image.width, image.height]);
    };

    image.src = levelData.imageURL;
  }, [levelData.imageURL]);

  let imagesToShow = ['1', '2', '3', '4'];
  if (levelData.imageCount !== undefined) {
    imagesToShow = levelData.imageCount.split(' ');
  }

  let imageClueClassName = 'image-clue';

  return (
    <div className={imageClueClassName}>
      <Slider autoplay={true} dots={true} arrows={false} pauseOnFocus={true} autoplaySpeed={3800}>
        {imagesToShow.map((image, index) => (
          pressedLetters.length >= 0 && imagesToShow.includes(image) ? (
            <ImageCrop
              key={index}
              index={index}
              resolution={imageRes}
              imageUrl={levelData.imageURL}
              zoom={5}
              borderRadius="20"
            />
          ) : null
        ))}
      </Slider>
    </div>
  );
}

export default ImageClue;
