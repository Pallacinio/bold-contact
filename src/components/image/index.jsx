import './index.css'

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FallbackImage from '../../../public/intro-background.jpg';

const FALLBACK_IMAGE = FallbackImage;

const Image = ({
  src,
  alt = 'Image',
  title,
  className,
  style,
  width,
  height,
  loading = 'lazy',
  onError,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(FALLBACK_IMAGE);
    if (onError) onError(); 
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      title={title}
      className={className}
      style={style}
      width={width}
      height={height}
      loading={loading}
      onError={handleError}
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loading: PropTypes.oneOf(['lazy', 'eager']),
  onError: PropTypes.func,
};

export default Image;