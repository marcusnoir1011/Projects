// Core
import { useState } from "react";

// Custom
import "./App.css";
import PersonalInfo from "./components/PersonalInfo.jsx";
import EducationInfo from "./components/EducationInfo.jsx";
import ExperienceInfo from "./components/ExperienceInfo.jsx";
import SubmitButton from "./components/SubmitButton.jsx";
import EditButton from "./components/EditButton.jsx";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phNumber, setPhNumber] = useState("");
    const [school, setSchool] = useState("");
    const [study, setStudy] = useState("");
    const [studyDate, setStudyDate] = useState("");
    const [company, setCompany] = useState("");
    const [positionTitle, setPositionTitle] = useState("");
    const [responsibility, setResponsibility] = useState("");
    const [yOfExp, setYOfExp] = useState("");

    const [isEditing, setIsEditing] = useState(true);

    // Input handling
    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePhNumber = (event) => {
        setPhNumber(event.target.value);
    };
    const handleSchool = (event) => {
        setSchool(event.target.value);
    };
    const handleStudy = (event) => {
        setStudy(event.target.value);
    };
    const handleStudyDate = (event) => {
        setStudyDate(event.target.value);
    };
    const handleCompany = (event) => {
        setCompany(event.target.value);
    };
    const handlePositionTitle = (event) => {
        setPositionTitle(event.target.value);
    };
    const handleResponsibility = (event) => {
        setResponsibility(event.target.value);
    };
    const handleYOfExp = (event) => {
        setYOfExp(event.target.value);
    };

    // toggling handling
    const handleEditing = () => {
        setIsEditing(!isEditing);
    };

    const onSubmitClick = (event) => {
        event.preventDefault();
        handleEditing();
    };

    const personalData = { name, email, phNumber };
    const personalHandlers = { handleName, handleEmail, handlePhNumber };
    const educationData = { school, study, studyDate };
    const educationHandlers = { handleSchool, handleStudy, handleStudyDate };
    const experienceData = { company, positionTitle, responsibility, yOfExp };
    const experienceHandlers = {
        handleCompany,
        handlePositionTitle,
        handleResponsibility,
        handleYOfExp,
    };

    return (
        <>
            <div className="container mx-auto max-w-2xl p-4 space-y-6 bg-white rounded-lg shadow-md">
                <PersonalInfo
                    data={personalData}
                    handlers={personalHandlers}
                    mode={isEditing}
                />
                <EducationInfo
                    data={educationData}
                    handlers={educationHandlers}
                    mode={isEditing}
                />
                <ExperienceInfo
                    data={experienceData}
                    handlers={experienceHandlers}
                    mode={isEditing}
                />
                {isEditing ? (
                    <SubmitButton onSubmitClick={onSubmitClick} />
                ) : (
                    <EditButton toggleMode={handleEditing} />
                )}
            </div>
        </>
    );
}

export default App;
