import React, { useState } from 'react';

const CareerMain = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone_number: '',
        college_name: '',
        degree: '',
        branch: '',
        year_of_passing: '',
        resume_url: '',
        interest: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [wordCount, setWordCount] = useState(0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'interest') {
            const wordArray = value.trim().split(/\s+/);
            const count = wordArray.filter(word => word !== '').length;

            if (count <= 200) {
                setFormData({ ...formData, [name]: value });
                setWordCount(count);
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.full_name) errors.full_name = 'Full Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.phone_number) errors.phone_number = 'Phone Number is required';
        if (!formData.college_name) errors.college_name = 'College Name is required';
        if (!formData.degree) errors.degree = 'Degree is required';
        if (!formData.branch) errors.branch = 'Branch is required';
        if (!formData.year_of_passing) errors.year_of_passing = 'Year of Passing is required';
        if (!formData.resume_url) errors.resume_url = 'Resume is required';
        if (!formData.interest) errors.interest = 'Interest is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setLoading(true);

            const payload = {
                ...formData,
                year_of_passing: parseInt(formData.year_of_passing),
            };

            try {
                const response = await fetch(`${networkconfig.MAIN_URL}/intership-registration`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                const data = await response.json();
                // console.log('Form Submitted:', data);

                setFormData({
                    full_name: '',
                    email: '',
                    phone_number: '',
                    college_name: '',
                    degree: '',
                    branch: '',
                    year_of_passing: '',
                    resume_url: '',
                    interest: ''
                });

                setWordCount(0);
                setLoading(false);
                setModalVisible(true);
                setErrors({});
            } catch (error) {
                console.error('Submission Error:', error);
                setLoading(false);
            }
        }
    };

    const closeModal = () => setModalVisible(false);

    return (
        <div>
            <section className="container mx-auto px-10 py-10">
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-red-600 font-bold text-center px-5">
                    Apply for Internship
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mt-4 text-center">
                    Fill out the form to kickstart your journey.
                </p>
            </section>

            <section>
                <div className="container mx-auto px-4 mb-20">
                    <form onSubmit={handleSubmit} className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                        {[
                            { name: 'full_name', placeholder: 'Full Name' },
                            { name: 'email', placeholder: 'Email', type: 'email' },
                            { name: 'phone_number', placeholder: 'Phone Number' },
                            { name: 'college_name', placeholder: 'College Name' },
                            { name: 'degree', placeholder: 'Degree' },
                            { name: 'branch', placeholder: 'Branch' },
                            { name: 'year_of_passing', placeholder: 'Year of Passing', type: 'number' },
                        ].map(({ name, placeholder, type = 'text' }) => (
                            <div key={name} className="flex flex-col">
                                <input
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    value={formData[name]}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 p-3 rounded-md w-full"
                                />
                                {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
                            </div>
                        ))}

                        <div className="flex flex-col">
                            <input
                                type="url"
                                name="resume_url"
                                placeholder="Paste your resume link (Google Drive, Dropbox, etc.)"
                                value={formData.resume_url}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full"
                            />
                            {errors.resume_url && <span className="text-red-500 text-sm">{errors.resume_url}</span>}
                        </div>

                        <div className="flex flex-col sm:col-span-2">
                            <textarea
                                name="interest"
                                placeholder="Why are you interested in this internship? (Max 200 words)"
                                value={formData.interest}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md h-32 resize-none"
                            />
                            <div className="flex justify-between text-sm">
                                {errors.interest && <span className="text-red-500">{errors.interest}</span>}
                                <span className="text-gray-400">{wordCount} / 200 words</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-red-600 text-white px-4 py-2 rounded-md w-full sm:col-span-2"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </section>

            {modalVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg text-center max-w-sm w-full">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">Form Submitted Successfully!</h3>
                        <p className="text-gray-700 mb-4">Thank you for applying. We’ll be in touch soon.</p>
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

export default CareerMain;
