const PersonalInfo = ({ data, handlers, mode }) => {
    const { name, email, phNumber } = data;
    const { handleName, handleEmail, handlePhNumber } = handlers;
    return (
        <>
            <div className="container mx-auto max-w-2xl p-4 space-y-6 bg-white rounded-lg shadow-md">
                {mode ? (
                    <section className="text-lg font-bold mb-2 pb-1">
                        <label className="block font-medium mb-1 text-gray-700">
                            Name:{" "}
                        </label>
                        <input
                            type="text"
                            className="name w-full border rounded-md p-1 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={name}
                            onChange={handleName}
                        />
                        <label className="block font-medium mb-1 text-gray-700">
                            Email:{" "}
                        </label>
                        <input
                            type="email"
                            className="email w-full border rounded-md p-1 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={handleEmail}
                        />
                        <label className="block font-medium mb-1 text-gray-700">
                            Phone Number:{" "}
                        </label>
                        <input
                            type="text"
                            className="phNumber w-full border rounded-md p-1 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={phNumber}
                            onChange={handlePhNumber}
                        />
                    </section>
                ) : (
                    <section className="text-lg font-bold mb-2 pb-1">
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
            </div>
        </>
    );
};

export default PersonalInfo;
