import React, { useState } from "react";

type PanelButtonProps = {
  updateState: () => void;
};

const PanelButton = ({ updateState }: PanelButtonProps) => {
  const [active, setActive] = useState(false);
  const handleButton = () => {
    updateState();
    setActive(!active);
  };
  return (
    <button
      className={active ? "button-panel is-active" : "button-panel"}
      onClick={handleButton}
    >
      <span></span>
    </button>
  );
};

export default PanelButton;
