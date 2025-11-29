

import { useState } from "react";
const skillKey = "SkillsDetails"

const Skills = () => {
    const [skillsForm, setSkillsForm] = useState(() => {

        const savedData = localStorage.getItem(skillKey);
        return savedData ?
            JSON.parse(savedData) :

            [
                {
                    skills: ""
                }
            ]
    }
    )



    //// localstorage set item
    localStorage.setItem(skillKey, JSON.stringify(skillsForm))




    /// handle Change function
    const handleChange = (index, e) => {
        const { id, value } = e.target;
        const updatedForm = [...skillsForm]
        updatedForm[index][id] = value;
        setSkillsForm(updatedForm);

    }

    // ****Adding new section ******
    const handleAddSection = () => {
        setSkillsForm([...skillsForm, { skills: "" }]);
    };
    // ****Delete  section ******
    const handleDeleteSection = (index) => {
        const updatedSections = skillsForm.filter((_, i) => i !== index);  // Removing the item at the index
        setSkillsForm(updatedSections);  // Update the state with the filtered sections
    };


    const handleReset = () => {
        setSkillsForm([{
            skills: ""
        }])

        localStorage.removeItem(skillKey);
    }

    return (
        <>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <form action="">

                    <fieldset className="border border-gray-300 rounded p-4">
                        <legend className="text-lg font-semibold px-2">Skills</legend>

                        {skillsForm.map((section, index) => (
                            <>
                                <div key={index}>

                                    <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">


                                        {/* Educational Institution */}
                                        <div className="flex w-full gap-2" >
                                            <div className="w-full">

                                                <input
                                                    type="text"
                                                    id="skills"
                                                    value={section.skills}
                                                    onChange={(e) => handleChange(index, e)}
                                                    required
                                                    className="w-[80%] border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>

                                            {/* <div className="flex flex-col float-right mt-6 rounded-full mr-2"> */}



                                                <input type="button" onClick={handleAddSection} value="+" className="bg-blue-700   text-white rounded-lg hover:bg-blue-800 px-6 py-2" />

                                            {/* </div> */}


                                            {/* Delete Button (if more than one section) */}
                                            {skillsForm.length > 1 && (
                                                // <div className="md:col-span-2 text-right mt-6 mr-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDeleteSection(index)}
                                                        className="bg-red-600 text-white rounded-lg px-6 py-2 hover:bg-red-700"
                                                    >
                                                        -
                                                    </button>
                                                // </div>
                                            )}
                                        </div>
                                    </div>
                                    <hr className="mt-6 border border-gray-300" />
                                </div>
                            </>

                        ))}

                    </fieldset>

                </form>
                <div className='mt-8 flex justify-center items-center '>
                    <button className='bg-red-500 text-white px-6 py-2 rounded-sm' onClick={handleReset}>Reset all</button>
                </div>
            </div>
        </>
    )
}

export default Skills

