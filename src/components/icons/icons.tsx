import React from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.

import IconsSVG from './icons.svg';

interface IconProps {
  name: string;
  color?: string;
  size: string;
  className?: string;
}

function Icons(icon: IconProps) {
  return (
    <svg className={`icon icon-${icon.name} ${icon.className}`} fill={icon.color} width={icon.size} height={icon.size}>
      <use xlinkHref={`${IconsSVG}#icon-${icon.name}`} />
    </svg>
  );
}

export default Icons;
