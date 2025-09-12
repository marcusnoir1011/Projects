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
            {mode ? (
                <section>
                    <label>Company Name: </label>
                    <input
                        type="text"
                        className="company"
                        value={company}
                        onChange={handleCompany}
                    />
                    <label>Position Title: </label>
                    <input
                        type="text"
                        className="position-title"
                        value={positionTitle}
                        onChange={handlePositionTitle}
                    />
                    <label>Main Responsitbilites: </label>
                    <input
                        type="text"
                        className="responsiblity"
                        value={responsibility}
                        onChange={handleResponsibility}
                    />
                    <label>Year of Experience: </label>
                    <input
                        type="number"
                        className="year-of-exp"
                        value={yOfExp}
                        onChange={handleYOfExp}
                    />
                </section>
            ) : (
                <section>
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
        </>
    );
};

export default ExperienceInfo;
