import React, { FC } from 'react';
import './IconButton.css';

interface IconButtonProps {
  key?: number;
  iconNumber: number;
  onClick: () => void;
}

const IconButton: FC<IconButtonProps> = ({ iconNumber, onClick }: IconButtonProps) => {
  return (
    <svg width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg" className="icon-btn">
      <g onClick={onClick} className="circle-btn">
        <circle cx="20" cy="20" r="18" fill="transparent" strokeWidth="2" className="circle-btn_circle" />
        <text x="15" y="25" strokeWidth="0" className="circle-btn_text">
          {iconNumber}
        </text>
      </g>
    </svg>
  );
};

export default IconButton;
