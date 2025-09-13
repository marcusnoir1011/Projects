const EditButton = ({ toggleMode }) => {
    return (
        <>
            <button
                className="w-25 rounded-lg font-semibold px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white transition duration-200"
                type="button"
                onClick={toggleMode}
            >
                Edit
            </button>
        </>
    );
};

export default EditButton;
