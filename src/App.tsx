import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import theme from './theme';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <ThemeProvider theme={theme}>
                <Router>
                    <div className="App relative">
                        <AnimatedBackground />
                        <div className="relative z-10">
                            <Navbar />
                            <main className="container mx-auto px-4 pt-16">
                                <AnimatedRoutes />
                            </main>
                        </div>
                    </div>
                </Router>
            </ThemeProvider>
        </LanguageProvider>
    );
};

export default App; 