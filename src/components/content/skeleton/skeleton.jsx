import React from 'react';
import './index.scss';

const Skeleton = ({
    width,
    height,
    cn
}) => (
    <div className={`skeleton ${cn}`} style={{ width, height }}></div>
);

Skeleton.defaultProps = {
    width: '100px',
    height: '20px'
  };

export default Skeleton;