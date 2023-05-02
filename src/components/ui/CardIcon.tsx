import React from "react";

interface CardIconProps {
  icon: JSX.Element;
  about: string;
}

const CardIcon = ({ icon, about }: CardIconProps) => {
  return (
    <div className="card-icon">
      <div className="card-icon__wrap-icon">{icon}</div>
      <p className="card-icon__about">{about}</p>
    </div>
  );
};

export default CardIcon;
