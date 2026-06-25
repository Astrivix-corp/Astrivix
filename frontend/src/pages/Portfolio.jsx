import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { ArrowRight, Shield, Zap, Server, Cloud, Sparkles, MessageCircle, Download, ChevronDown } from 'lucide-react';

const WHATSAPP_NUMBER = "1234567890";
const WHATSAPP_MESSAGE = "Hi Astrivix, I'd like to discuss a project.";

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

const ProjectCard = ({ title, tags, description, large = false, icon: Icon }) => (
    <GlassCard className={`group p-6 hover:border-sky-500/50 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)] ${large ? 'col-span-2 row-span-2' : 'col-span-1'}`}>
        <div className="relative z-10 h-full flex flex-col">
            {Icon && (
                <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-sky-400" />
                </div>
            )}
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-md bg-slate-800/80 text-slate-300">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-slate-400 text-sm mt-auto">{description}</p>
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-sky-400" />
            </div>
        </div>
    </GlassCard>
);

function useCountUp(end, duration = 2000, start = false) {
    const [value, setValue] = useState(0);
    const rafRef = useRef(0);

    useEffect(() => {
        if (!start) {
            setValue(0);
            return;
        }

        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setValue(Math.floor(eased * end));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(step);
            }
        };

        rafRef.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafRef.current);
    }, [end, duration, start]);

    return value;
}

const STATS = [
    { label: "Projects Delivered", end: 20, suffix: "+" },
    { label: "Clients", end: 30, suffix: "+" },
    { label: "Conversion", end: 45, suffix: "%" },
    { label: "Positive Feedback", end: 98, suffix: "%" },
];

const StatItem = ({ value, label, highlight = false }) => (
    <div className="text-center">
        <div className={`text-xl md:text-2xl font-bold ${highlight ? 'text-emerald-400' : 'text-white'}`}>
            {value}
        </div>
        <div className="text-slate-400 text-xs mt-0.5">{label}</div>
    </div>
);

const StatsSection = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="bg-[#020617] border-t border-slate-800/50">
            <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
                <div className="grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4">
                    <StatCountItem label="Projects Delivered" end={20} suffix="+" visible={visible} />
                    <StatCountItem label="Clients" end={30} suffix="+" visible={visible} />
                    <StatCountItem label="Conversion" end={45} suffix="%" visible={visible} />
                    <StatCountItem label="Positive Feedback" end={98} suffix="%" visible={visible} />
                </div>
            </div>
        </section>
    );
};

function StatCountItem({ label, end, suffix, visible }) {
    const count = useCountUp(end, 2000, visible);
    return (
        <div className="text-center">
            <div className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                {count}<span className="text-sky-400">{suffix}</span>
            </div>
            <div className="mt-2 text-sm font-medium tracking-wide text-slate-400 uppercase">
                {label}
            </div>
        </div>
    );
}

const CTACard = () => (
    <GlassCard className="p-12 md:p-16 text-center border-sky-500/30 hover:border-sky-400/50 transition-all duration-500">
        <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                READY TO BUILD?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
                Intake for Q1 2025 is now open
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.5)] transition-all duration-300 hover:scale-105">
                    Start a Project
                    <ArrowRight className="w-5 h-5" />
                </button>
                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold backdrop-blur-xl transition-all hover:bg-white/10"
                >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                </a>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3" /> SSH Access
                </span>
                <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Encrypted
                </span>
                <span className="flex items-center gap-1">
                    <Server className="w-3 h-3" /> Instant Response
                </span>
            </div>
        </div>
    </GlassCard>
);

const Portfolio = () => {
    return (
        <div className="bg-[#020617]">
            <Navbar currentPage="portfolio" />

            {/* Hero Section */}
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900 via-[#020617] to-[#020617]" />
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 lg:px-8">
                    <Badge className="mb-6">
                        Web Development Studio
                    </Badge>

                    <h1 className="text-center text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                        <span className="block text-white">Portfolio Of</span>
                        <span className="italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            <GradientText>Astrivix</GradientText>
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed tracking-wide text-slate-400 sm:text-base">
                        Boutique design & development studio crafting high-performance
                        websites for startups that want to lead their industry.
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                        <button className="group h-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 text-sm font-bold text-white shadow-glow transition-all hover:scale-105 active:scale-95">
                            <a href="#work" className="flex items-center gap-2">
                                Start a Project
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </button>

                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-12 rounded-full border border-white/10 bg-white/5 px-5 backdrop-blur-xl transition-all hover:bg-white/10 flex items-center gap-2 text-sm text-white"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span className="hidden sm:inline">WhatsApp</span>
                        </a>

                        <button className="h-12 rounded-full border border-white/10 bg-white/5 px-5 backdrop-blur-xl transition-all hover:bg-white/10 flex items-center">
                            <Download className="h-4 w-4 text-white" />
                        </button>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
                    <a href="#work" className="flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-sky-400">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
                        <ChevronDown className="h-5 w-5" />
                    </a>
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection />

            {/* Featured Deployments Section */}
            <section id="work" className="relative py-12 md:py-14 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Featured Deployments
                            </h2>
                            <p className="text-slate-400">
                                A showcase of complex architectures and scalable solutions.
                            </p>
                        </div>
                        <Badge className="mt-4 md:mt-0">
                            <Server className="w-3 h-3" />
                            99.99% Uptime
                        </Badge>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProjectCard
                            title="CloudScale ERP"
                            tags={['React', 'AWS', 'PostgreSQL']}
                            description="Enterprise-grade resource planning with real-time sync"
                            large
                            icon={Cloud}
                        />
                        <ProjectCard
                            title="FinFlow Mobile"
                            tags={['Flutter', 'Node.js']}
                            description="Trading terminal UI"
                            icon={Zap}
                        />
                        <ProjectCard
                            title="NextGen AI"
                            tags={['Python', 'TensorFlow']}
                            description="Abstract neural network background"
                            icon={Shield}
                        />
                        <ProjectCard
                            title="SecureVault"
                            tags={['Rust', 'Kubernetes']}
                            description="Data center/server rack background"
                            icon={Server}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-14 md:py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <CTACard />
                </div>
            </section>

            {/* Footer */}
            <footer className="relative py-8 px-6 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2025 Astrivix. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-sky-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-sky-400 transition-colors">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;