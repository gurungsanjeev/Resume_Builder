import React from 'react'
import { useState, useEffect } from "react";

const educationKey = "EducationDetails"
const EducationDetails = () => {    
    const [educationForm, setEducationForm] = useState(() => {
        const savedData = localStorage.getItem(educationKey);
        try {
            const parsedData = savedData ? JSON.parse(savedData) : null;
            return Array.isArray(parsedData)
                ? parsedData
                : [
                    {
                        level: "",
                        affiliated: "",
                        programme: "",
                        year: "",
                        gpa: ""
                    }
                ];
        } catch (error) {
            console.error("Error parsing localStorage data:", error);
            return [
                {
                    level: "",
                    affiliated: "",
                    programme: "",
                    year: "",
                    gpa: ""
                }
            ];
        }
    });



    useEffect(() => {

        ///seting data in localstorage
        localStorage.setItem(educationKey, JSON.stringify(educationForm))
    }, [educationForm])


    const handleChange = (index, e) => {
        const { id, value } = e.target;
        const updatedForm = [...educationForm];
        updatedForm[index][id] = value;
        setEducationForm(updatedForm);

    }



    // ****Adding new section ******
    const handleAddSection = () => {
        setEducationForm([...educationForm, { level: "", affiliated: "", programme: "", year: "", gpa: "" }]);
    };
    // ****Delete  section ******
    const handleDeleteSection = (index) => {
        const updatedSections = educationForm.filter((_, i) => i !== index);  // Removing the item at the index
        setEducationForm(updatedSections);  // Update the state with the filtered sections
    };


    const handleReset = () => {
        setEducationForm([{
            level: "",
            affiliated: "",
            programme: "",
            year: "",
            gpa: ""
        }])
        

        localStorage.removeItem(educationKey);
       
    }


    return (
        <>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <form action="">

                    <fieldset className="border border-gray-300 rounded p-4">
                        <legend className="text-lg font-semibold px-2">Education Background</legend>

                        {educationForm.map((section, index) => (
                            <div key={index}>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    {/* First Name */}
                                    <div>
                                        <label htmlFor="level" className="block font-medium mb-1">Educations</label>
                                        <select
                                            id="level"
                                            onChange={(e) => handleChange(index, e)}
                                            value={section.level}
                                            className="w-full h-[42px] border border-blue-400 rounded-lg">
                                            <option value="">---Educations---</option>
                                            <option value="Secondary">Secondary</option>
                                            <option value="Higher">Higher</option>
                                            <option value="Undergraduate">Undergraduate</option>
                                            <option value="Postgraduate">Postgraduate</option>
                                            <option value="Phd">Phd</option>
                                        </select>

                                    </div>

                                    {/* Educational Institution */}
                                    <div>
                                        <label htmlFor="affiliated" className="block font-medium mb-1">Name of university affiliated </label>
                                        <input
                                            type="text"
                                            id="affiliated"
                                            value={section.affiliated}
                                            onChange={(e) => handleChange(index, e)}
                                            required
                                            className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* Name of program */}
                                    <div>
                                        <label htmlFor="programme" className="block font-medium mb-1">Programme Name</label>
                                        <input
                                            type="text"
                                            id="programme"
                                            value={section.programme}
                                            onChange={(e) => handleChange(index, e)}
                                            placeholder="BBA"
                                            required
                                            className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* Year of completed */}
                                    <div>
                                        <label htmlFor="year" className="block font-medium mb-1">Completed year</label>
                                        <input
                                            type="date"
                                            id="year"
                                            value={section.year}
                                            onChange={(e) => handleChange(index, e)}
                                            required
                                            className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* GPA */}
                                    <div>
                                        <label htmlFor="gpa" className="block font-medium mb-1">Secured GPA</label>
                                        <input
                                            type="number"
                                            id="gpa"
                                            value={section.gpa}
                                            onChange={(e) => handleChange(index, e)}
                                            required
                                            placeholder="4.0"
                                            className="w-full border
                                             border-blue-400
                                              rounded-lg px-4
                                               py-2 focus:outline-none
                                                focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    {/* Delete Button (if more than one section) */}
                                    {educationForm.length > 1 && (
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
                                </div>
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

export default EducationDetails
