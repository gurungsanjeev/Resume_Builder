
import { useState, useEffect } from "react";





const PersonalDetails = () => {
    const [formData, setFormData] = useState({
        fname: "",
        mname: "",
        lname: "",
        gender: "",
        address: "",
        dob: "",
        title: "",
        phone: "",
        email: "",
        summary: "",
    });


    const personalKey = "personalDetails"



    // On component mount, check if data is already saved in localStorage
    useEffect(() => {
        const savedData = localStorage.getItem(personalKey);
        if (savedData) {
            setFormData(JSON.parse(savedData)); // Load saved data if it exists
        }
    }, []); // Empty dependency array ensures this runs only once


    // Save to localStorage when formData changes
    useEffect(() => {
        if (formData.fname || formData.mname || formData.lname || formData.gender || formData.title || formData.address || formData.dob || formData.phone || formData.email || formData.summary) {
            localStorage.setItem(personalKey, JSON.stringify(formData));
        }
    }, [formData]); // This will run whenever formData changes

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev, [id]: value,
        }));
    };

    const handleReset = () => {
        setFormData({
            fname: "",
            mname: "",
            lname: "",
            gender: "",
            address: "",
            dob: "",
            title: "",
            phone: "",
            email: "",
            summary: "",
        })

        localStorage.removeItem(personalKey);
    }

    return (
        <>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mt-20">
                <form>
                    <fieldset className="border border-gray-300 rounded p-4">
                        <legend className="text-lg font-semibold px-2">
                            Personal Details
                        </legend>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {/* First Name */}
                            <div>
                                <label htmlFor="fname" className="block font-medium mb-1">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.fname}
                                    onChange={handleChange}
                                    id="fname"
                                    required
                                    className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Middle Name */}
                            <div>
                                <label htmlFor="mname" className="block font-medium mb-1">
                                    Middle Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.mname}
                                    onChange={handleChange}
                                    id="mname"
                                    required
                                    className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor="lname" className="block font-medium mb-1">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lname"
                                    value={formData.lname}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Gender */}
                            <div>
                                <label htmlFor="gender" className="block font-medium mb-1">
                                    Gender <span className="text-red-500">*</span>
                                </label>
                                <select name=""
                                    id="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>

                                </select>

                            </div>

                            {/* Address */}
                            <div>
                                <label htmlFor="address" className="block font-medium mb-1">
                                    Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label htmlFor="dob" className="block font-medium mb-1">
                                    D.O.B <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block font-medium mb-1">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block font-medium mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@.com"
                                    required
                                    className="w-full border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="grid mt-4">
                            <label htmlFor="title" className="block font-medium mb-1">
                                Title
                            </label>
                            <input type='text'
                                name="title"
                                id="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder='Web Developer, Data Scientist, etc..'
                                className="w-full border-2 p-2 border-gray-400 rounded-lg "
                            />
                        </div>

                        <div className="grid mt-4">
                            <label htmlFor="summary" className="block font-medium mb-1">
                                Career Objective / Summary
                            </label>
                            <textarea
                                name="intro"
                                id="summary"
                                value={formData.summary}
                                onChange={handleChange}
                                className="w-full border-2 p-2 border-gray-400 rounded-lg h-40"
                            ></textarea>
                        </div>

                    </fieldset>
                </form>
            </div>
            <div className='mt-8 flex justify-center items-center '>
                <button className='bg-red-500 text-white px-6 py-2 rounded-sm' onClick={handleReset}>Reset all</button>
            </div>
        </>
    );
};

export default PersonalDetails;

