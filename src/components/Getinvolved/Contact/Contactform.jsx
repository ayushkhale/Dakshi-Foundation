import React, { useState } from 'react';
import networkconfig from '../../../networkconfig';

const Contactform = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Word limit check for message field
        if (name === 'message') {
            const words = value.trim().split(/\s+/);
            if (words.length > 200) return;
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const errs = {};
        if (!formData.name) errs.name = 'Name is required';
        if (!formData.email) errs.email = 'Email is required';
        if (!formData.subject) errs.subject = 'Subject is required';
        if (!formData.message) {
            errs.message = 'Message is required';
        } else {
            const wordCount = formData.message.trim().split(/\s+/).length;
            if (wordCount > 200) errs.message = 'Message must be under 200 words';
        }
        return errs;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setLoading(true);
            try {
                const response = await fetch(`${networkconfig.MAIN_URL}/contact-us`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                // console.log("Message sent:", result);

                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });

                setLoading(false);
                setModalVisible(true);
                setErrors({});
            } catch (err) {
                console.error("Error submitting contact form:", err);
                setLoading(false);
            }
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const wordCount = formData.message.trim() === '' ? 0 : formData.message.trim().split(/\s+/).length;

    return (
        <div className="container mx-auto px-4 py-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Contact Us</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-3 rounded-md"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-3 rounded-md"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-3 rounded-md"
                />
                {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}

                <textarea
                    name="message"
                    placeholder="Your Message (max 200 words)"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-3 rounded-md h-32 resize-none"
                />
                <div className="flex justify-between text-sm">
                    {errors.message && <span className="text-red-500">{errors.message}</span>}
                    <span className="text-gray-400">{wordCount} / 200 words</span>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            {modalVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg text-center max-w-sm w-full">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">Message Sent!</h3>
                        <p className="text-gray-700 mb-4">We’ve received your message and will be in touch soon.</p>
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

export default Contactform;
