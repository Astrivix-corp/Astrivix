import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';

const GradientText = ({ children, className = '' }) => (
  <span className={`bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase border border-white/10 bg-white/5 text-white/70 backdrop-blur-md ${className}`}>
    <Sparkles className="w-3 h-3 text-sky-400" />
    {children}
  </span>
);

const GlassCard = ({ children, className = '' }) => (
  <div className={`relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent pointer-events-none" />
    {children}
  </div>
);

const projects = [
  {
    title: "Project Alpha",
    category: "Branding",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Branding+Project"
  },
  {
    title: "Project Beta",
    category: "Web Design",
    description: "Modern responsive website with seamless user experience and intuitive navigation.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Web+Design"
  },
  {
    title: "Project Gamma",
    category: "Digital Marketing",
    description: "Comprehensive marketing campaign resulting in 200% increase in engagement.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Marketing"
  },
  {
    title: "Project Delta",
    category: "UI/UX Design",
    description: "End-to-end product design from user research to interactive prototypes.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=UI%2FUX+Design"
  },
  {
    title: "Project Epsilon",
    category: "Development",
    description: "Full-stack web application built with modern technologies for optimal performance.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Development"
  },
  {
    title: "Project Zeta",
    category: "Branding",
    description: "Strategic brand positioning and visual identity for a startup entering the market.",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Brand+Strategy"
  }
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020617]">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => navigate(-1)}
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

      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900 via-[#020617] to-[#020617]" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Our Work</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our <GradientText>Portfolio</GradientText>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Showcasing our best work across branding, design, and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                    <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
