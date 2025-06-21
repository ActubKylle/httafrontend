import React from 'react';

const MessageBox = ({ showMessageBox, closeMessageBox }) => {
    if (!showMessageBox) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm">
                <p className="text-lg font-semibold text-green-700 mb-4">Message Sent!</p>
                <p className="text-gray-700 mb-6">Thank you for your inquiry. We will get back to you soon.</p>
                <button onClick={closeMessageBox} className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition duration-300">Close</button>
            </div>
        </div>
    );
};

export default MessageBox;