const ShowPassword = ({ showPassword, setShowPassword }) => {
    return (
        <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
        >
            {showPassword ? "Hide" : "Show"}
        </button>
    );
}

export default ShowPassword;