import React, { useContext, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { AppContext } from '../../App';
import ImageCrop from './imageCrop';

function ImageClue({ completedLevel }) {
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

  let indexOrder = [0,3,2,1];

  return (
    completedLevel ? (
    <div className={imageClueClassName}>
        <ImageCrop
        key={0}  // Assuming you want to use the first image
        index={0}
        resolution={imageRes}
        imageUrl={levelData.imageURL}
        zoom={5}
        borderRadius="20"
        useCrop = {false}
        />
    </div>

    ):(
    <div className={imageClueClassName}>
      <Slider autoplay={true} dots={true} arrows={false} pauseOnFocus={true} autoplaySpeed={3800}>
        {imagesToShow.map((image, index) => (
          pressedLetters.length >= index-1 && imagesToShow.includes(image) ? (
            <ImageCrop
              key={index}
              index={indexOrder[index]}
              resolution={imageRes}
              imageUrl={levelData.imageURL}
              zoom={5}
              borderRadius="20"
            />
          ) : null
        ))}
      </Slider>
    </div>
    )
  );
}

export default ImageClue;
