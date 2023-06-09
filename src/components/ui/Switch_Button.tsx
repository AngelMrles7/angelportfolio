import { ReactComponentElement } from "react";

interface SwitchButtonProps {
  id: string;
  isChecked: boolean;
  toggle: () => void;
  textLeft: string;
  textRight: string;
  IconLeft?: JSX.Element;
  IconRight?: JSX.Element;
}

const SwitchButton = ({
  id,
  isChecked,
  toggle,
  textLeft,
  textRight,
  IconLeft,
  IconRight,
}: SwitchButtonProps) => {
  return (
    <label htmlFor={id} className="switchBtn">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onClick={toggle}
        readOnly
      />
      <div className="toggle"></div>
      <div className="switchBtn__content">
        <span className="switchBtn__content__left">
          {IconLeft}
          <p>{textLeft}</p>
        </span>
        <span className="switchBtn__content__right">
          {IconRight} <p>{textRight}</p>
        </span>
      </div>
    </label>
  );
};

export default SwitchButton;
