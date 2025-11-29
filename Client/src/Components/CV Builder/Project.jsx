import React from 'react'


import { useState } from "react";

const projectKey = "ProjectData"

const Project = () => {
    const [projectForm, setProjectForm] = useState(() => {
        const savedData = localStorage.getItem(projectKey)
        return savedData
            ?
            JSON.parse(savedData) :
            [
                {
                    title: "",
                    summary: ""

                }
            ]
    }
    )


    /// localstorage set data
    localStorage.setItem(projectKey, JSON.stringify(projectForm))

    // handle change
    const handleChange = (index, e) => {
        const { id, value } = e.target;
        const updatedForm = [...projectForm];
        updatedForm[index][id] = value;
        setProjectForm(updatedForm);

    }


    // ****Adding new section ******
    const handleAddSection = () => {
        setProjectForm([...projectForm, { title: "", summary: "" }]);
    };
    // ****Delete  section ******
    const handleDeleteSection = (index) => {
        const updatedSections = projectForm.filter((_, i) => i !== index);  // Removing the item at the index
        setProjectForm(updatedSections);  // Update the state with the filtered sections
    };


    const handleReset = () => {
        setProjectForm([{
            title: "",
            summary: ""
        }])

        localStorage.removeItem(projectKey);
    }

    return (
        <>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <form action="">

                    <fieldset className="border border-gray-300 rounded p-4">
                        <legend className="text-lg font-semibold px-2">Projects / Research Work (optional)</legend>

                        {projectForm.map((section, index) => (
                            <>
                                <div key={index}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">



                                        {/* Educational Institution */}
                                        <div>
                                            <label htmlFor="title" className="block font-medium mb-1">Title</label>
                                            <input
                                                type="text"
                                                id="title"
                                                value={section.title}
                                                onChange={(e) => handleChange(index, e)}
                                                required
                                                className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>


                                    </div>
                                    <div className="grid mt-4">
                                        <label htmlFor="summary" className="block font-medium mb-1">
                                            Summary
                                        </label>
                                        <textarea
                                            name="intro"
                                            id="summary"
                                            value={section.summary}
                                            onChange={(e) => handleChange(index, e)}
                                            className="w-full border-2 p-2 border-gray-400 rounded-lg h-40"
                                        ></textarea>
                                    </div>



                                    {/* Delete Button (if more than one section) */}
                                    {projectForm.length > 1 && (
                                        <div className="md:col-span-2  mt-4 text-right">
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
                            </>

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

export default Project

