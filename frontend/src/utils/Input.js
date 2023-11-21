import { useId } from "react";
const Input = ({ label, placeholder, value, setValue, buttons = [], type = "text" }) => {
    const id = useId();
    return (
        <div className="my-3">
            <label htmlFor={id}>{label}</label>
            <div className="input-group">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    id={id}
                    className="form-control"
                />
                {buttons}
            </div>
        </div>
    );
}

export default Input;