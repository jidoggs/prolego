import PropTypes from "prop-types";
import React from "react";
import requiredIf from "react-required-if";

function CustomButton({
  variant,
  onClick,
  onMouseEnter,
  onMouseExist,
  type,
  disabled,
  actionName,
  className,
  icon,
  iconOrientation,
}) {
  
  return (
    <button
      type={type}
      className={`${className? className: ""} btn${variant === "OUTLINE" ? "Outline" : ""} btn${
        iconOrientation === undefined ? "": iconOrientation === "left" ? "__left" : "__right"
      } `}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseExist}
      disabled={disabled}
    >
      {actionName}
      {icon}
    </button>
  );
}

CustomButton.propTypes = {
  variant: PropTypes.oneOf(["OUTLINE"]),
  actionName: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "reset", "submit"]).isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseExist: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  iconOrientation: requiredIf(
    PropTypes.oneOf(["left","right"]),
    (props) => props.icon !== undefined
  ),
};

export default CustomButton;
