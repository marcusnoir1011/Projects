const SubmitButton = ({ onSubmitClick }) => {
    return (
        <>
            <button
                className="w-25 rounded-lg font-semibold px-4 py-2 shadow-sm bg-blue-500 hover:bg-blue-600 text-white transition duration-200"
                type="button"
                onClick={onSubmitClick}
            >
                Submit
            </button>
        </>
    );
};

export default SubmitButton;
