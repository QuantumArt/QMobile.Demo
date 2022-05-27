import React, { useEffect, useState } from 'react';
import { Image } from '../../types';

type Props = {
  imagesList?: Image[];
};

const ImagesSlider = ({ imagesList }: Props): JSX.Element => {
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (imagesList) {
      if (imagesList.length > 0) setActiveImage(imagesList[0].Image);
      else setActiveImage('');
    }
  }, [imagesList]);

  return (
    <div className="device-details__images-container">
      <div className="image-slider__main-container">
        <div className="image-slider__photos-container">
          {imagesList?.map(image => (
            <div
              key={image.Id}
              className="image-slider__photos-container-item"
              onClick={() => setActiveImage(image.Image)}
              role="presentation"
            >
              <div className="image-slider__photos-container-item-image">
                <img src={image.Image} alt="device" />
              </div>
            </div>
          ))}
        </div>
        <div className="image-slider__image">
          <img src={activeImage} alt="selected" />
        </div>
      </div>
    </div>
  );
};

ImagesSlider.defaultProps = {
  imagesList: [],
};

export default ImagesSlider;
