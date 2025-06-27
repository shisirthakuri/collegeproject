import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ContactMessege = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/getcontact`);
        if (response.status === 200) {
          setMessage(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    getMessage();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Course</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Message</th>
            </tr>
          </thead>
          <tbody>
            {message.length > 0 ? (
              message.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-100 transition duration-200">
                  <td className="px-4 py-2 text-sm">{index + 1}</td>
                  <td className="px-4 py-2 text-sm">{item.name}</td>
                  <td className="px-4 py-2 text-sm">{item.email}</td>
                  <td className="px-4 py-2 text-sm">{item.course}</td>
                  <td className="px-4 py-2 text-sm max-w-xs break-words">{item.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-6">
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactMessege;
