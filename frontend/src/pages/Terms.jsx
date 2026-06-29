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

const Terms = () => {
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
              Terms & <GradientText>Services</GradientText>
            </h1>
            <p className="text-slate-400">Last updated: June 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-12"
          >
            <Section title="1. Acceptance of Terms">
              <p>By accessing or using the Astrivix website and services, you agree to be bound by these Terms and Services. If you do not agree with any part of these terms, you should not use our services.</p>
              <p>We reserve the right to update or modify these terms at any time without prior notice. Continued use of our services after changes constitutes acceptance of the revised terms.</p>
            </Section>

            <Section title="2. Services">
              <p>Astrivix provides branding, design, digital marketing, and related creative services. The scope, timeline, and deliverables for each project will be outlined in a separate agreement or proposal provided to the client.</p>
              <p>We reserve the right to refuse service to any person or entity for any reason.</p>
            </Section>

            <Section title="3. Client Responsibilities">
              <p>Clients agree to provide accurate and complete information necessary for the execution of services. Delays caused by late or inadequate client input may affect project timelines.</p>
              <p>Clients are responsible for reviewing and approving work within agreed timelines. Failure to provide timely feedback may result in project delays for which Astrivix is not liable.</p>
            </Section>

            <Section title="4. Intellectual Property">
              <p>Upon full payment, clients receive ownership of the final deliverables as specified in the project agreement. Astrivix retains the right to display completed work in its portfolio unless otherwise agreed in writing.</p>
              <p>All pre-existing intellectual property of Astrivix (including tools, frameworks, and methodologies) remains the property of Astrivix.</p>
            </Section>

            <Section title="5. Payments and Refunds">
              <p>Payment terms are outlined in individual project agreements. All fees are non-refundable unless otherwise stated in writing. Late payments may result in project suspension.</p>
            </Section>

            <Section title="6. Limitation of Liability">
              <p>Astrivix shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our total liability is limited to the amount paid by the client for the specific service giving rise to the claim.</p>
            </Section>

            <Section title="7. Contact">
              <p>For questions about these terms, please contact us:</p>
              <p className="text-white">business@astrivix.com</p>
              <p className="text-white">Astrivix Corp, Metro Pillar No-41, Grande Tower, 3rd Floor, Pulinchode Junction, Aluva, Kerala 683101</p>
            </Section>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
