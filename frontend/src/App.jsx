import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Welcome from './components/Welcome';
import './App.css';
import Services from './components/Services';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Career from './components/Career';
import Bottom from './components/Bottom';

const ClientApplication = lazy(() => import('./components/ClientApplication'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

function App() {
    return (
        <div className="min-h-screen bg-black">
            <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
            <Routes>
                <Route path="/client-application" element={
                    <div className="min-h-screen">
                        <ClientApplication />
                    </div>
                } />
                <Route path="/privacy" element={
                    <div className="min-h-screen">
                        <Privacy />
                    </div>
                } />
                <Route path="/terms" element={
                    <div className="min-h-screen">
                        <Terms />
                    </div>
                } />
                <Route path="/portfolio" element={
                    <div className="min-h-screen">
                        <Portfolio />
                    </div>
                } />
                <Route path="/career" element={
                    <div className="min-h-screen">
                        <Career />
                    </div>
                } />
                <Route path="/" element={
                    <>
                        <Hero />
                        <Welcome />
                        <Services />
                        <Projects />
                        <AboutUs />
                        <Bottom />
                    </>
                } />
            </Routes>
            </Suspense>
        </div>
    );
}

export default App;
