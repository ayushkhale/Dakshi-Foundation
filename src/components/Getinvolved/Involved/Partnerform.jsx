import React, { useState } from 'react';
import networkconfig from '../../../networkconfig';

const Partnerform = () => {

    // State management for form fields
    const [formData, setFormData] = useState({
        companyName: '',
        contactPersonName: '',
        phoneNumber: '',
        email: '',
        websiteLink: '',
        missionStatement: '', // Added field for Mission 
        address: '', // Replacing State with address
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // State for loading
    const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Form validation
    const validateForm = () => {
        let errors = {};
        if (!formData.companyName) errors.companyName = 'Company Name is required';
        if (!formData.contactPersonName) errors.contactPersonName = 'Father\'s Name is required';
        if (!formData.phoneNumber) errors.phoneNumber = 'Mobile Number is required';
        if (!formData.email) errors.email = 'email is required';
        if (!formData.websiteLink) errors.websiteLink = 'websiteLink is required';
        if (!formData.missionStatement) errors.missionStatement = 'Working Experience is required'; // Validate working experience
        if (!formData.address) errors.address = 'address is required'; // Validate address
        return errors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setLoading(true); // Show loader on submission

            try {
                const response = await fetch(`${networkconfig.MAIN_URL}partner-data`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error("Something went wrong with the Form Submission.");
                }

                const data = await response.json();
                console.log("Donation submitted successfully:", data);

                setFormData({
                    companyName: '',
                    contactPersonName: '',
                    phoneNumber: '',
                    email: '',
                    websiteLink: '',
                    missionStatement: '',
                    address: '', 
                });

                setLoading(false); // Hide loader
                setModalVisible(true); // Show success modal
            } catch (error) {
                console.error("Error during form submission:", error);
                setLoading(false); // Hide loader
                alert("There was an error processing your Form. Please try again later.");
            }
        }
    };

    // Close success modal
    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div id='partner-form'>
            {/* Introduction Section */}
            <section className="container mx-auto px-10 py-10">
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-red-600 font-bold text-center px-5">
                    Become A Partner
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mt-4 text-center">
                    Join us in making a meaningful difference.
                </p>
            </section>

            {/* Form Section */}
            <section className="mb-12">
                <div className="container mx-auto px-4">
                    <form className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="companyName" 
                                placeholder="Organization Name" 
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.companyName && <span className="text-red-500 text-sm">{errors.companyName}</span>}
                        </div>

                        {/* Father's Name */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="contactPersonName" 
                                placeholder="Contact Person Name" 
                                value={formData.contactPersonName}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.contactPersonName && <span className="text-red-500 text-sm">{errors.contactPersonName}</span>}
                        </div>

                        {/* Mobile Number */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="phoneNumber" 
                                placeholder="Mobile Number" 
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
                        </div>

                        {/* email */}
                        <div className="flex flex-col">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                        </div>

                        {/* websiteLink */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="websiteLink" 
                                placeholder="Website Link" 
                                value={formData.websiteLink}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.websiteLink && <span className="text-red-500 text-sm">{errors.websiteLink}</span>}
                        </div>

                        {/* Working Experience */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="missionStatement" 
                                placeholder="Mission Statement" 
                                value={formData.missionStatement}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.missionStatement && <span className="text-red-500 text-sm">{errors.missionStatement}</span>}
                        </div>

                        {/* address */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="address" 
                                placeholder="Address" 
                                value={formData.address}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="bg-red-600 text-white px-4 py-2 rounded-md w-full sm:col-span-2"
                            disabled={loading} // Disable the button during loading
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </section>

            {/* Success Modal */}
            {modalVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg text-center max-w-sm w-full">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">Form Submitted Successfully!</h3>
                        <p className="text-gray-700 mb-4">Thank you for your submission. We will contact you soon.</p>
                        <button 
                            onClick={closeModal}
                            className="bg-red-600 text-white px-6 py-2 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Partnerform;
