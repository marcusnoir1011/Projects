const EducationInfo = ({ data, handlers, mode }) => {
    const { school, study, studyDate } = data;
    const { handleSchool, handleStudy, handleStudyDate } = handlers;
    return (
        <>
            <div className="container rounded-lg shadow-md mx-auto max-w-2xl p-4 space-y-6 bg-white">
                {mode ? (
                    <section className="text-lg font-bold mb-2 pb-1">
                        <label className="block font-medium mb-1 text-gray-700">
                            School Name:{" "}
                        </label>
                        <input
                            type="text"
                            className="school w-full border rounded-md p-1 mb-3 focus:outline focus:ring-2 foucs:ring-blue-500"
                            value={school}
                            onChange={handleSchool}
                        />
                        <label className="block font-medium mb-1 text-gray-700">
                            Title of Study:{" "}
                        </label>
                        <input
                            type="text"
                            className="study w-full border rounded-md p-1 mb-3 foucs:outline-none focus:ring-2 focus:ring-blue-500"
                            value={study}
                            onChange={handleStudy}
                        />
                        <label className="block font-medium mb-1 text-gray-700">
                            Date of Study:{" "}
                        </label>
                        <input
                            type="text"
                            className="study-date w-full border rounded-md p-1 mb-3 foucs:outline-none focus:ring-2 focus:ring-blue-500 "
                            value={studyDate}
                            onChange={handleStudyDate}
                        />
                    </section>
                ) : (
                    <section className="text-lg font-bold mb-2 pb-1">
                        <p className="font-medium mb-2 text-gray-800">
                            School Name: {school}
                        </p>
                        <p className="font-medium mb-2 font-gray-800">
                            Title of Study: {study}
                        </p>
                        <p className="font-medium mb-2 font-gray-800">
                            Date of Study: {studyDate}
                        </p>
                    </section>
                )}
            </div>
        </>
    );
};

export default EducationInfo;
