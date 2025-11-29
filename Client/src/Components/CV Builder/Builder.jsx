import InnerNavBar from "../Navbar/InnerNavBar";
import { Steps } from "antd";
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Certification from "./Certification";
import Project from "./Project";
import { Link } from "react-router-dom";


const Builder = () => {
    const [pagination, setPagination] = useState(0);

    const handleNxt = () => {
        setPagination((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handleBack = () => {
        setPagination((prev) => Math.max(prev - 1, 0));
    };

    const steps = [
        {
            title: "Personal Details",
            content: <PersonalDetails />,
        },
        {
            title: "Educational Details",
            content: <EducationDetails />,
        },
        {
            title: "Work Experience",
            content: <Experiences />,
        },
        {
            title: "Projects",
            content: <Project />,
        },
        {
            title: "Skills",
            content: <Skills />,
        },
        {
            title: "Certification & Training",
            content: <Certification />,
        },

    ];

    return (
        <>
            
            
            <div className="w-full min-h-screen bg-zinc-100 p-6">
                <Steps current={pagination} items={steps.map(({ title }) => ({ title }))} />

                <div className="mt-8">{steps[pagination].content}</div>

                <div className="flex justify-center gap-6">
                    {pagination > 0 && pagination <= steps.length - 1 && (
                        <button
                            className="bg-blue-700 text-white p-4 rounded-lg mt-4 px-8 hover:bg-blue-800"
                            onClick={handleBack}
                        >
                            Back
                        </button>
                    )}


                    {pagination < steps.length - 1 && (
                        <button
                            className="bg-blue-700 text-white p-4 rounded-lg mt-4 px-8 hover:bg-blue-800"
                            onClick={handleNxt}
                        >
                            Next
                        </button>
                    )}

                    {pagination == steps.length - 1 && (
                        <Link to="/LayoutSelection">
                            <button
                                className="bg-blue-700 text-white p-4 rounded-lg mt-4 px-8 hover:bg-blue-800"
                                onClick={handleNxt}
                            >
                                Proceed
                            </button>
                        </Link>
                    )}
                </div>
            </div>
            
        </>
    );
};

export default Builder;
