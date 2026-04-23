import React, { useRef, useEffect, useState } from "react";

export default function AboutUs() {
    const sectionRef = useRef(null);
    const [imageIndices, setImageIndices] = useState([0, 0, 0, 0, 0]);

    useEffect(() => {
        const intervals = [];
        for (let i = 0; i < 5; i++) {
            const update = () => {
                setImageIndices(prev => {
                    const newIndices = [...prev];
                    newIndices[i] = (newIndices[i] + 1) % 3;
                    return newIndices;
                });
                const delay = 1000 + Math.random() * 1000;
                intervals[i] = setTimeout(update, delay);
            };
            update();
        }
        return () => {
            intervals.forEach(clearTimeout);
        };
    }, []);

    const timelineItems = [
        { num: "01", title: "Idea & Vision", text: "Define your services, target audience, and niche. Research competitors and draft a clear mission." },
        { num: "02", title: "Business Planning", text: "Decide business model, pricing, and set financial goals." },
        { num: "03", title: "Budgeting", text: "Plan startup costs and monthly expenses. Track revenue and profits." },
        { num: "04", title: "Branding & Identity", text: "Create brand name, logo, colors, and style guide." },
        { num: "05", title: "Legal & Administration", text: "Register company, open business account, and obtain tax IDs." },
        { num: "06", title: "Website & Digital Presence", text: "Design website with home, services, portfolio, and contact pages." },
        { num: "07", title: "Tools & Tech", text: "Use project management and communication tools." },
        { num: "08", title: "Marketing & Outreach", text: "Build portfolio and run campaigns." },
        { num: "09", title: "Client Acquisition", text: "Use proposals, demos, and CRM to convert leads." },
        { num: "10", title: "Team & Operations", text: "Hire or outsource talent. Define roles and workflows." },
        { num: "11", title: "Growth & Scaling", text: "Expand services and retain clients." },
    ];

    const imagePositions = [
        { align: 'items-start', translate: 'translate-y-8' },
        { align: 'items-end', translate: '-translate-y-8' },
        { align: 'items-start', translate: 'translate-y-8' },
        { align: 'items-end', translate: '-translate-y-8' },
        { align: 'items-start', translate: 'translate-y-8' },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative w-full min-h-screen bg-transparent text-white"
        >
            {/* Profile Images - Desktop Zig-Zag */}
            <div className="hidden lg:flex justify-center gap-6 xl:gap-10 pt-20 xl:pt-24 px-4">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className={`w-[140px] h-[140px] xl:w-[180px] xl:h-[180px] rounded-xl shadow-lg bg-cover bg-center flex ${imagePositions[i].align} ${imagePositions[i].translate}`}
                        style={{
                            backgroundImage: `url("/au${i+1}-${imageIndices[i] + 1}.webp")`,
                        }}
                    />
                ))}
            </div>

            {/* Profile Images - Tablet Zig-Zag */}
            <div className="hidden md:flex lg:hidden justify-center gap-4 pt-16 px-4">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className={`w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-xl shadow-lg bg-cover bg-center flex ${imagePositions[i].align} ${imagePositions[i].translate}`}
                        style={{
                            backgroundImage: `url("/au${i+1}-${imageIndices[i] + 1}.webp")`,
                        }}
                    />
                ))}
            </div>

            {/* Profile Images - Mobile */}
            <div className="flex md:hidden justify-center gap-3 sm:gap-4 pt-16 px-4">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-xl shadow-lg bg-cover bg-center"
                        style={{
                            backgroundImage: `url("/au${i+1}-${imageIndices[i] + 1}.webp")`,
                        }}
                    />
                ))}
            </div>

            {/* About Us Title */}
            <h1 className="font-['Dela_Gothic_One'] text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 select-none">
                <span className="text-[40px] xs:text-[50px] sm:text-[70px] md:text-[100px] lg:text-[180px] xl:text-[250px] leading-[0.8]">
                    About Us
                </span>
            </h1>

            {/* Subtext */}
            <p className="text-center mt-4 sm:mt-6 px-4 max-w-[90%] sm:max-w-[80%] md:max-w-[700px] mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                we are a creative collective of event producers, marketing specialists,
                art directors, designers, and strategic analysts.
            </p>

            {/* Timeline */}
            <div className="relative w-full max-w-[1200px] mx-auto mt-16 sm:mt-24 md:mt-32 px-4 sm:px-6">
                {/* SVG Line - Full width on desktop, smaller on mobile */}
                <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[3px] sm:w-[4px]">
                    <div className="h-full w-full bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-400 opacity-30"></div>
                </div>

                {/* Timeline Items */}
                <div className="relative space-y-8 sm:space-y-12 md:space-y-16 pb-20">
                    {timelineItems.map((item, i) => (
                        <div
                            key={i}
                            className={`relative flex items-start gap-3 sm:gap-6 ${
                                i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                            }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[6px] sm:left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full z-10 shadow-lg"></div>

                            {/* Content */}
                            <div className={`pl-8 sm:pl-0 w-full sm:w-[45%] ${
                                i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'
                            }`}>
                                <h3 className="text-yellow-400 font-semibold text-sm sm:text-lg md:text-xl font-['Architects_Daughter']">
                                    {item.num}. {item.title}
                                </h3>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-1 leading-relaxed font-['Architects_Daughter']">
                                    {item.text}
                                </p>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden sm:block w-[45%]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
