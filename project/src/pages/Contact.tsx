import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg h-32 bg-white dark:bg-gray-700 dark:text-white"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6 text-gray-800 dark:text-gray-200">
            <div className="flex items-center space-x-4">
              <Mail className="text-orange-600" />
              <span>24CU0330051@student.hindustanuniv.ac.in</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-orange-600" />
              <span>+91 9962416421</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-orange-600" />
              <span>Hindustan Institute of Technology and Science<br />Padur, OMR, Chennai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}