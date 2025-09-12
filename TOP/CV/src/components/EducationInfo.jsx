const EducationInfo = ({ data, handlers, mode }) => {
    const { school, study, studyDate } = data;
    const { handleSchool, handleStudy, handleStudyDate } = handlers;
    return (
        <>
            {mode ? (
                <section>
                    <label className="block font-medium mb-1 text-gray-700">
                        School Name:{" "}
                    </label>
                    <input
                        type="text"
                        className="school"
                        value={school}
                        onChange={handleSchool}
                    />
                    <label className="block font-medium mb-1 text-gray-700">
                        Title of Study:{" "}
                    </label>
                    <input
                        type="text"
                        className="study"
                        value={study}
                        onChange={handleStudy}
                    />
                    <label className="block font-medium mb-1 text-gray-700">
                        Date of Study:{" "}
                    </label>
                    <input
                        type="text"
                        className="study-date"
                        value={studyDate}
                        onChange={handleStudyDate}
                    />
                </section>
            ) : (
                <section>
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
        </>
    );
};

export default EducationInfo;
