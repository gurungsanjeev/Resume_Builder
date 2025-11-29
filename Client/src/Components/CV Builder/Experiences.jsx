import React from 'react'


import { useState, useEffect } from "react";


const experienceKey = "WorkExperiences"
const Experiences = () => {
    const [experienceForm, setExperienceForm] = useState(() => {
        const savedData = localStorage.getItem(experienceKey);
        return savedData
            ? JSON.parse(savedData)
            : [
                {

                    institution: "",
                    position: "",
                    jDate: "",
                    eDate: "",
                    role: ""

                }
            ]
    });


   


    useEffect(() => {

        ///seting data in localstorage
        localStorage.setItem(experienceKey, JSON.stringify(experienceForm))
    }, [experienceForm])




    const handleChange = (index, e) => {
        const { id, value } = e.target;
        const updatedForm = [...experienceForm];
        updatedForm[index][id] = value;
        setExperienceForm(updatedForm);

    }



    // ****Adding new section ******
    const handleAddSection = () => {
        setExperienceForm([...experienceForm, { institution: "", position: "", jDate: "", eDate: "", role: "" }]);
    };
    // ****Delete  section ******


    const handleDeleteSection = (index) => {
        const updatedSections = experienceForm.filter((_, i) => i !== index);  // Removing the item at the index
        setExperienceForm(updatedSections);  // Update the state with the filtered sections
    };



    const handleReset = () => {
        setExperienceForm([{
            institution: "",
            position: "",
            jDate: "",
            eDate: "",
            role: ""
        }])
        

        localStorage.removeItem(experienceKey);
       
    }


    return (
        <>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <form action="">

                    <fieldset className="border border-gray-300 rounded p-4">
                        <legend className="text-lg font-semibold px-2">Work Experience / Internship / Volunteering (if any)</legend>

                        {experienceForm.map((section, index) => (
                            <div key={index}>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    {/* First Name */}
                                    <div>
                                        <label htmlFor="institution" className="block font-medium mb-1">Name of institution</label>
                                        <input
                                            type="text"
                                            value={section.institution}
                                            onChange={(e) => handleChange(index, e)}
                                            id="institution"
                                            required
                                            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />

                                    </div>

                                    {/* Educational Institution */}
                                    <div>
                                        <label htmlFor="position" className="block font-medium mb-1">Position</label>
                                        <input
                                            type="text"
                                            id="position"
                                            value={section.position}
                                            onChange={(e) => handleChange(index, e)}
                                            required
                                            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* Year of joined */}
                                    <div>
                                        <label htmlFor="jDate" className="block font-medium mb-1">Joined Date</label>
                                        <input
                                            type="date"
                                            id="jDate"
                                            onChange={(e) => handleChange(index, e)}
                                            value={section.jDate}
                                            required
                                            className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    {/* Year of completed */}
                                    <div>
                                        <label htmlFor="eDate" className="block font-medium mb-1">End Date</label>
                                        <input
                                            type="date"
                                            id="eDate"
                                            value={section.eDate}
                                            onChange={(e) => handleChange(index, e)}
                                            required
                                            className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                </div>
                                {/* roles */}
                                <div className="mt-4">
                                    <label htmlFor="role" className="block font-medium mb-1">Your Key Roles</label>
                                    <textarea name=""
                                        id="role"
                                        value={section.role}
                                        onChange={(e) => handleChange(index, e)}
                                        className="w-full h-24  border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                </div>
                                {/* Delete Button (if more than one section) */}
                                {experienceForm.length > 1 && (
                                    <div className="md:col-span-2 text-right">
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteSection(index)}
                                            className="bg-red-600 text-white rounded-lg px-6 py-2 hover:bg-red-700"
                                        >
                                            Delete Section
                                        </button>
                                    </div>
                                )}
                                <hr className="mt-6 border border-gray-300" />

                            </div>

                        ))}
                        <div className="flex flex-col float-right mt-6 ">



                            <input type="button" onClick={handleAddSection} value="Add another section" className="bg-blue-700 mt-2  text-white rounded-lg hover:bg-blue-800 px-12 py-2" />

                        </div>
                    </fieldset>

                </form>
                <div className='mt-8 flex justify-center items-center '>
                    <button className='bg-red-500 text-white px-6 py-2 rounded-sm' onClick={handleReset}>Reset all</button>
                </div>
            </div>
        </>
    )
}

export default Experiences
