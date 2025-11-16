import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Target, Award, ArrowRight, MapPin, Clock, DollarSign, Send, ChevronDown, X } from 'lucide-react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Career = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const [popup, setPopup] = useState({
    show: false,
    title: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const showPopup = (title, message) => {
    setPopup({
      show: true,
      title,
      message
    });
  };

  const closePopup = () => {
    setPopup({
      show: false,
      title: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="career" />
      
      {/* Hero Section */}
      <div className="relative h-fit  flex justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-black/5"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-8xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl mt-32 lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-black">CAREERS AT </span>
            <span className="text-blue-600">PIXEL JUNKIE</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our creative team and help build amazing digital experiences that make a difference
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => showPopup('Open Positions', 'We are currently not accepting new job applications.')}
            className="bg-blue-600 mb-32 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Join Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career where you can grow and make an impact
            </p>
          </motion.div>
        </div>

        <div className="relative flex flex-row items-center justify-center gap-7">
          {[
            {
              icon: <Target className="w-8 h-8" />,
              title: "Meaningful Work",
              description: "Work on projects that matter and make a real impact in the digital world"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Great Team",
              description: "Collaborate with talented, passionate individuals who inspire each other"
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Growth Opportunities",
              description: "Continuous learning and development opportunities to advance your career"
            }
          ].map((item, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
          ))}
        </div>
      </div>


      {/* Open Positions Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect role from our current openings
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                title: "Senior Frontend Developer",
                type: "Full-time",
                location: "Remote / Hybrid",
                experience: "3+ years",
                description: "We're looking for an experienced frontend developer to join our team and help build amazing user interfaces."
              },
              {
                title: "UI/UX Designer",
                type: "Full-time", 
                location: "On-site",
                experience: "2+ years",
                description: "Join our design team to create beautiful and intuitive user experiences for our clients."
              },
              {
                title: "Project Manager",
                type: "Full-time",
                location: "Hybrid",
                experience: "4+ years", 
                description: "Lead projects and coordinate between teams to deliver exceptional results on time."
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => showPopup(`! Application limit for ${job.title} has already been reached.`)}
                    className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </motion.button>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </motion.div>
            ))}
          </div>
      </div>
      </div>

      {/* Popup Modal */}
      {popup.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{popup.title}</h3>
              <button
                onClick={closePopup}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">{popup.message}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                closePopup();
                navigate('/');
              }}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Got it!
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Career;