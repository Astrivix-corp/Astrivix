import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Target, Award, ArrowRight, MapPin, Clock, ChevronDown, X, Sparkles, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase border border-white/10 bg-white/5 text-white/70 backdrop-blur-md ${className}`}>
    <Sparkles className="w-3 h-3 text-sky-400" />
    {children}
  </span>
);

const GradientText = ({ children, className = '' }) => (
  <span className={`bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

const GlassCard = ({ children, className = '' }) => (
  <div className={`relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-sky-500/5 via-transparent to-transparent pointer-events-none" />
    {children}
  </div>
);

const Career = () => {
  const navigate = useNavigate();

  const [popup, setPopup] = useState({
    show: false,
    title: '',
    message: ''
  });

  const showPopup = (title, message) => {
    setPopup({ show: true, title, message });
  };

  const closePopup = () => {
    setPopup({ show: false, title: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#020617]">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="text-xl md:text-2xl font-bold tracking-wider text-white hover:opacity-80 transition-opacity"
            >
              ASTRIVIX
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900 via-[#020617] to-[#020617]" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 lg:px-8">
          <Badge className="mb-6">Join Our Team</Badge>

          <h1 className="flex items-center justify-center gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight px-4">
            <span className="text-white">CAREERS AT</span>{' '}
            <span className="italic flex items-center gap-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <GradientText>Astrivix</GradientText>
              <img src="./public/logo.jpg" alt="Astrivix" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full" />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed tracking-wide text-slate-400 sm:text-base">
            Join our creative team and help build amazing digital experiences that make a difference
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => showPopup('Open Positions', 'We are currently not accepting new job applications.')}
            className="mt-8 group h-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 text-sm font-bold text-white shadow-glow transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            View Open Positions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </motion.div>
      </section>

      {/* Open Positions Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Open Positions</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Current <GradientText>Openings</GradientText>
            </h2>
            <p className="text-slate-400 text-lg">Find your perfect role from our current openings</p>
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
              >
                <GlassCard className="p-6">
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4 text-sky-400" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-sky-400" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-sky-400" />
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed mt-3">{job.description}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => showPopup(`Application limit for ${job.title} has already been reached.`)}
                      className="shrink-0 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.5)] transition-all duration-300 text-sm sm:text-base font-semibold"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {popup.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 max-w-sm sm:max-w-md w-full shadow-2xl m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">{popup.title}</h3>
              <button
                onClick={closePopup}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-slate-400 mb-6">{popup.message}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                closePopup();
                navigate('/');
              }}
              className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2.5 rounded-lg hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.5)] transition-all duration-300 font-semibold"
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