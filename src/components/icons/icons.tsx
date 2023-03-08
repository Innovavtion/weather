import React from 'react';

import IconsSVG from './icons.svg';

function Icons(parameters: { name: string; color: string; size: string; className?: string }) {
  return (
    <svg
      className={`icon icon-${parameters.name} ${parameters.className}`}
      fill={parameters.color}
      width={parameters.size}
      height={parameters.size}
    >
      <use xlinkHref={`${IconsSVG}#icon-${parameters.name}`} />
    </svg>
  );
}

export default Icons;
