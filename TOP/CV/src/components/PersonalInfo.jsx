const PersonalInfo = ({ data, handlers, mode }) => {
    const { name, email, phNumber } = data;
    const { handleName, handleEmail, handlePhNumber } = handlers;
    return (
        <>
            {mode ? (
                <section className="text-xl font-bold mb-2 border-b pb-1">
                    <label className="block font-medium mb-1 text-gray-700">
                        Name:{" "}
                    </label>
                    <input
                        type="text"
                        className="name"
                        value={name}
                        onChange={handleName}
                    />
                    <label className="block font-medium mb-1 text-gray-700">
                        Email:{" "}
                    </label>
                    <input
                        type="email"
                        className="email"
                        value={email}
                        onChange={handleEmail}
                    />
                    <label className="block font-medium mb-1 text-gray-700">
                        Phone Number:{" "}
                    </label>
                    <input
                        type="text"
                        className="phNumber"
                        value={phNumber}
                        onChange={handlePhNumber}
                    />
                </section>
            ) : (
                <section>
                    <p className="text-gray-800 mb-2 font-medium">
                        Name: {name}
                    </p>
                    <p className="text-gray-800 mb-2 font-medium">
                        Email: {email}
                    </p>
                    <p className="text-gray-800 mb-2 font-medium">
                        Phone Number: {phNumber}
                    </p>
                </section>
            )}
        </>
    );
};

export default PersonalInfo;
