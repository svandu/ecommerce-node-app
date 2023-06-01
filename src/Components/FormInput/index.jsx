/* eslint-disable react/prop-types */
import "./forminput.scss"

export default function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      {label && (
        <label className= "form-input-label">
          {label}
        </label>
      )}
      <input className="form-input" {...otherProps} />
    </div>
  );
}
 