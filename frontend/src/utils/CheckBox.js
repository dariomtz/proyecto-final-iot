import { useId } from "react";

const CheckBox = ({ label, value, setValue }) => {
  const id = useId();
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={value}
        className="form-check-input me-2"
        onChange={() => setValue(!value)}
      />
      <label htmlFor={id} className="form-check-label">
        {value ? <del>{label}</del> : label}
      </label>
    </div>
  );
}

export default CheckBox;