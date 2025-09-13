const ExperienceInfo = ({ data, handlers, mode }) => {
    const { company, positionTitle, responsibility, yOfExp } = data;
    const {
        handleCompany,
        handlePositionTitle,
        handleResponsibility,
        handleYOfExp,
    } = handlers;
    return (
        <>
            <div className="container rounded-lg shadow-md mx-auto max-w-2xl p-4 space-y-6 bg-white">
                {mode ? (
                    <section className="text-lg font-bold mb-2 pb-1">
                        <label className="block font-medium mb-1 text-gray-700">
                            Company Name:{" "}
                        </label>
                        <input
                            type="text"
                            className="company w-full border rounded-md p-1 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={company}
                            onChange={handleCompany}
                        />
                        <label className="block font-medium mb-1 text-gray-700">
                            Position Title:{" "}
                        </label>
                        <input
                            type="text"
                            className="position-title w-full border rounded-md p-1 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={positionTitle}
                            onChange={handlePositionTitle}
                        />
                        <label className="block font-medium mb-1 font-gray-700">
                            Main Responsitbilites:{" "}
                        </label>
                        <input
                            type="text"
                            className="responsiblity w-full border rounded-md p-1 mb-3 focus:outline-none focus:ring-2 foucs:ring-blue-500"
                            value={responsibility}
                            onChange={handleResponsibility}
                        />
                        <label className="block font-medium mb-1 font-gray-700">
                            Year of Experience:{" "}
                        </label>
                        <input
                            type="number"
                            className="year-of-exp w-full border rounded-md p-1 mb-3 focus:outlien focus:ring-2 focus:ring-blue-500"
                            value={yOfExp}
                            onChange={handleYOfExp}
                        />
                    </section>
                ) : (
                    <section className="text-lg font-bold mb-2 pb-1">
                        <p className="font-medium mb-2 font-gray-800">
                            Company Name: {company}
                        </p>
                        <p className="font-medium mb-2 font-gray-800">
                            Position Title: {positionTitle}
                        </p>
                        <p className="font-medium mb-2 font-gray-800">
                            Main Responsibilities: {responsibility}
                        </p>
                        <p className="font-medium mb-2 font-gray-800">
                            Year of Experience: {yOfExp}
                        </p>
                    </section>
                )}
            </div>
        </>
    );
};

export default ExperienceInfo;
