import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, useScrollTrigger, Slide, Box, IconButton, Tooltip } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import TranslateIcon from '@mui/icons-material/Translate';
import { useLanguage } from '../context/LanguageContext';

interface Props {
    window?: () => Window;
}

const Navbar: React.FC<Props> = (props) => {
    const location = useLocation();
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);
    const { language, setLanguage, t } = useLanguage();

    // Hide navbar on scroll down
    const trigger = useScrollTrigger({
        target: props.window ? props.window() : undefined,
    });

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95
        }
    };

    const isActive = (path: string) => location.pathname === path;

    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    };

    const navigationItems = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/projects', label: t('nav.projects') },
        { path: '/contact', label: t('nav.contact') },
    ];

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar
                position="fixed"
                elevation={0}
                className="glass"
                sx={{
                    background: 'rgba(28, 28, 28, 0.8)',
                    backdropFilter: 'blur(8px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            className="gradient-text"
                            sx={{
                                flexGrow: 1,
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                            }}
                        >
                            Ilyas BEN ALLA
                        </Typography>
                    </motion.div>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {navigationItems.map((item, index) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to={item.path}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button
                                            onMouseEnter={() => setHoveredButton(item.path)}
                                            onMouseLeave={() => setHoveredButton(null)}
                                            sx={{
                                                color: 'text.primary',
                                                position: 'relative',
                                                textTransform: 'none',
                                                minWidth: 'auto',
                                                padding: '6px 8px',
                                                background: 'none !important',
                                                backgroundColor: 'transparent !important',
                                                border: 'none !important',
                                                boxShadow: 'none !important',
                                                borderRadius: '0',
                                                '&:hover': {
                                                    background: 'none !important',
                                                    backgroundColor: 'transparent !important',
                                                    border: 'none !important',
                                                    boxShadow: 'none !important',
                                                },
                                                '&.MuiButton-root': {
                                                    border: 'none',
                                                    boxShadow: 'none',
                                                    background: 'none',
                                                    backgroundColor: 'transparent',
                                                    '&:hover': {
                                                        background: 'none',
                                                        backgroundColor: 'transparent'
                                                    }
                                                },
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    bottom: -2,
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    width: isActive(item.path) || hoveredButton === item.path ? '100%' : '0%',
                                                    height: '2px',
                                                    background: 'linear-gradient(135deg, #EC4899, #6366F1)',
                                                    transition: 'width 0.3s ease-in-out',
                                                }
                                            }}
                                            disableRipple
                                            disableElevation
                                        >
                                            {item.label}
                                        </Button>
                                    </Link>
                                </motion.div>
                            ))}
                        </Box>

                        {/* Language Toggle Button */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Tooltip title={language === 'fr' ? t('nav.switchToEn') : t('nav.switchToFr')}>
                                <IconButton
                                    onClick={toggleLanguage}
                                    sx={{
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))',
                                        border: '1px solid rgba(99, 102, 241, 0.2)',
                                        borderRadius: '50%',
                                        p: 1,
                                        ml: 2,
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.2))',
                                        }
                                    }}
                                >
                                    <TranslateIcon sx={{ color: 'text.primary' }} />
                                </IconButton>
                            </Tooltip>
                        </motion.div>
                    </Box>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};

export default Navbar; 