
import { useEffect, useState } from "react";

const certificateKey = "CertificateData"
const achievementKey = "AchievementData"

const Certification = () => {
    const [certificateForm, setCertificateForm] = useState(() => {
        const savedCertificateData = localStorage.getItem(certificateKey)
        return savedCertificateData
            ?
            JSON.parse(savedCertificateData) :

            [
                {

                    institution: "",
                    title: "",
                    date: "",
                    year: " ",

                }
            ]
    }
    )
    const [achievementForm, setAcheivementForm] = useState(() => {
        const savedAchievementData = localStorage.getItem(achievementKey)
        return savedAchievementData
            ? JSON.parse(savedAchievementData) :


            [
                {

                    institution: "",
                    awardtitle: "",
                    awarddate: " ",
                    year: ""
                }
            ]
    }
    )


    useEffect(() => {

        // localstorage setItem for Certificate
        localStorage.setItem(certificateKey, JSON.stringify(certificateForm))

    }, [certificateForm])

    useEffect(() => {

        //localstorage setItem for achievement
        localStorage.setItem(achievementKey, JSON.stringify(achievementForm))

    }, [achievementForm])




    const handleInputChange = (index, e, type) => {
        const { id, value } = e.target;

        if (type === "certificate") {
            const updated = [...certificateForm];
            updated[index][id] = value;
            setCertificateForm(updated);
        } else if (type === "achievement") {
            const updated = [...achievementForm];
            updated[index][id] = value;
            setAcheivementForm(updated);
        }
    };



    // ****Adding new certificate section ******
    const handleAddCertificateSection = () => {
        setCertificateForm([...certificateForm, { institution: "", title: "", date: "", year: "" }]);
    };


    // ****Adding new certificate section ******
    const handleAddAcheivementSection = () => {
        setAcheivementForm([...achievementForm, { institution: "", awardtitle: "", awarddate: "", year: "" }]);
    };


    // ****Delete Certificate section ******

    const handleDeleteCertificateSection = (index) => {
        const updatedSections = certificateForm.filter((_, i) => i !== index);  // Removing the item at the index
        setCertificateForm(updatedSections);
    };


    // ****Delete Achievement section ******


    const handleDeleteAchievementSection = (index) => {
        const updatedSections = achievementForm.filter((_, i) => i !== index);  // Removing the item at the index
        setAcheivementForm(updatedSections);  // Update the state with the filtered sections
    };



    const handleReset = () => {
        setCertificateForm([{
            institution: "",
            awardtitle: "",
            awarddate: " ",
            year: ""
        }])
        setAcheivementForm([{
            institution: "",
            awardtitle: "",
            awarddate: " ",
            year: ""
        }])

        localStorage.removeItem(certificateKey);
        localStorage.removeItem(achievementKey);
    }


    return (
        <>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <form action="">

                    <fieldset className="border border-gray-300 rounded p-4">
                        <legend className="text-lg font-semibold px-2">Certification & Training</legend>

                        {certificateForm.map((section, index) => (
                            <>
                                <div key={index}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        {/* First Name */}
                                        <div>
                                            <label htmlFor="institution" className="block font-medium mb-1">Name of institution</label>
                                            <input
                                                type="text"
                                                id="institution"
                                                value={section.institution}
                                                onChange={(e) => handleInputChange(index, e, "certificate")}
                                                required
                                                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />

                                        </div>

                                        {/* Title */}
                                        <div>
                                            <label htmlFor="title" className="block font-medium mb-1">Title</label>
                                            <input
                                                type="text"
                                                id="title"
                                                value={section.title}
                                                onChange={(e) => handleInputChange(index, e, "certificate")}
                                                required
                                                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        {/* completed date */}
                                        <div>
                                            <label htmlFor="date" className="block font-medium mb-1">Completed Date</label>
                                            <input
                                                type="date"
                                                id="date"
                                                placeholder="15-July"
                                                value={section.date}
                                                onChange={(e) => handleInputChange(index, e, "certificate")}
                                                required
                                                className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        {/* Year of completed
                                        <div>
                                            <label htmlFor="year" className="block font-medium mb-1">Completed Year</label>
                                            <input
                                                type="text"
                                                placeholder="2025"
                                                id="year"
                                                value={section.year}
                                                onChange={(e) => handleInputChange(index, e, "certificate")}
                                                required
                                                className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div> */}

                                    </div>

                                    {/* Delete Button (if more than one section) */}
                                    {certificateForm.length > 1 && (
                                        <div className="md:col-span-2 text-right mt-2">
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteCertificateSection(index)}
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



                            <input type="button" onClick={handleAddCertificateSection} value="Add another section" className="bg-blue-700 mt-2  text-white rounded-lg hover:bg-blue-800 px-12 py-2" />

                        </div>
                    </fieldset>

                    <hr className="mt-10" />
                    {/* ******************************** Achievement****************************** */}

                    <fieldset className="border border-gray-300 rounded  mt-10 p-4">
                        <legend className="text-lg font-semibold px-2">Achievements</legend>

                        {achievementForm.map((section, index) => (
                            <>
                                <div key={index}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        {/* First Name */}
                                        <div>
                                            <label htmlFor="institution" className="block font-medium mb-1">Name of institution</label>
                                            <input
                                                type="text"
                                                id="institution"
                                                value={section.institution}
                                                onChange={(e) => handleInputChange(index, e, "achievement")}

                                                required
                                                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />

                                        </div>

                                        {/* Educational Institution */}
                                        <div>
                                            <label htmlFor="awardtitle" className="block font-medium mb-1">Award Title</label>
                                            <input
                                                type="text"
                                                id="awardtitle"
                                                value={section.awardtitle}
                                                onChange={(e) => handleInputChange(index, e, "achievement")}

                                                required
                                                className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        {/* award Date*/}
                                        <div>
                                            <label htmlFor="awarddate" className="block font-medium mb-1">Award Date</label>
                                            <input
                                                type="text"
                                                id="awarddate"
                                                placeholder="15-July"
                                                onChange={(e) => handleInputChange(index, e, "achievement")}

                                                value={section.date}
                                                required
                                                className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        {/* Year of completed */}
                                        <div>
                                            <label htmlFor="year" className="block font-medium mb-1">Award Year</label>
                                            <input
                                                type="text"
                                                placeholder="2025"
                                                onChange={(e) => handleInputChange(index, e, "achievement")}

                                                value={section.year}
                                                id="year"
                                                required
                                                className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                    </div>

                                    {/* Delete Button (if more than one section) */}
                                    {achievementForm.length > 1 && (
                                        <div className="md:col-span-2 text-right mt-2">
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteAchievementSection(index)}
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



                            <input type="button" onClick={handleAddAcheivementSection} value="Add another section" className="bg-blue-700 mt-2  text-white rounded-lg hover:bg-blue-800 px-12 py-2" />

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

export default Certification
