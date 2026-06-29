import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

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

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
    <div className="text-slate-400 space-y-3 leading-relaxed">{children}</div>
  </div>
);

const Privacy = () => {
  const navigate = useNavigate();

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

      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900 via-[#020617] to-[#020617]" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Privacy <GradientText>Policy</GradientText>
            </h1>
            <p className="text-slate-400">Last updated: June 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-12"
          >
            <Section title="1. Information We Collect">
              <p>We collect information you provide directly to us when you fill out forms, communicate with us via email or messaging, or otherwise interact with our services. This may include your name, email address, phone number, and project details.</p>
              <p>We also automatically collect certain information when you visit our website, including your IP address, browser type, device information, and usage data through cookies and similar technologies.</p>
            </Section>

            <Section title="2. How We Use Your Information">
              <p>We use the information we collect to respond to your inquiries, provide our services, improve our website and offerings, send relevant communications, and comply with legal obligations.</p>
              <p>We do not sell your personal information to third parties. Your data is used solely for business operations directly related to Astrivix's services.</p>
            </Section>

            <Section title="3. Data Protection">
              <p>We implement industry-standard security measures including SSL encryption, secure data storage, and access controls to protect your personal information against unauthorized access, alteration, or disclosure.</p>
              <p>While we strive to protect your data, no method of transmission over the Internet is 100% secure. We encourage you to take steps to protect your own information as well.</p>
            </Section>

            <Section title="4. Cookies">
              <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings.</p>
            </Section>

            <Section title="5. Third-Party Services">
              <p>We may use third-party services (such as analytics providers and communication tools) that have their own privacy policies. We encourage you to review their policies to understand how they handle your data.</p>
            </Section>

            <Section title="6. Your Rights">
              <p>You have the right to access, correct, or delete your personal data held by us. You may also withdraw consent for data processing where applicable. To exercise these rights, please contact us at business@astrivix.com.</p>
            </Section>

            <Section title="7. Contact Us">
              <p>If you have any questions about this Privacy Policy, please reach out to us at:</p>
              <p className="text-white">business@astrivix.com</p>
              <p className="text-white">Astrivix Corp, Metro Pillar No-41, Grande Tower, 3rd Floor, Pulinchode Junction, Aluva, Kerala 683101</p>
            </Section>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
