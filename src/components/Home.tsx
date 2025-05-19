import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
    const { t } = useLanguage();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const photoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

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

    const floatingAnimation = {
        y: [-5, 5, -5],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const glowAnimation = {
        background: [
            'linear-gradient(45deg, rgba(88, 28, 135, 0.8), rgba(147, 51, 234, 0.8))',
            'linear-gradient(45deg, rgba(147, 51, 234, 0.8), rgba(88, 28, 135, 0.8))',
            'linear-gradient(45deg, rgba(88, 28, 135, 0.8), rgba(147, 51, 234, 0.8))'
        ],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "linear"
        }
    };

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    height: '100vh',
                    maxHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    py: { xs: 1, sm: 2 },
                    overflow: 'hidden'
                }}
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <motion.div
                        variants={photoVariants}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                            marginBottom: '0.5rem'
                        }}
                    >
                        <Box
                            component="div"
                            sx={{
                                width: { xs: 120, sm: 150, md: 180 },
                                height: { xs: 120, sm: 150, md: 180 },
                                borderRadius: '50%',
                                overflow: 'hidden',
                                position: 'relative',
                                margin: '0 auto',
                                boxShadow: `
                                    0 0 10px rgba(236, 72, 153, 0.2),
                                    0 0 20px rgba(99, 102, 241, 0.2),
                                    0 8px 32px rgba(30, 58, 138, 0.3)
                                `,
                                border: '3px solid rgba(236, 72, 153, 0.3)',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(99, 102, 241, 0.2))',
                                    zIndex: 2,
                                    transition: 'all 0.3s ease-in-out'
                                },
                                '&:hover::before': {
                                    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(99, 102, 241, 0.3))'
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-3px',
                                    right: '-3px',
                                    bottom: '-3px',
                                    left: '-3px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #EC4899, #6366F1)',
                                    zIndex: -1,
                                    opacity: 0.4
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={process.env.PUBLIC_URL + '/photo.png'}
                                alt="Ilyas BEN ALLA"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    filter: 'contrast(1.05) brightness(1.05)'
                                }}
                            />
                        </Box>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        animate={floatingAnimation}
                        style={{ marginBottom: '0.25rem' }}
                    >
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                background: 'linear-gradient(135deg, #EC4899, #6366F1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                position: 'relative',
                                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                                lineHeight: 1.2,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '0%',
                                    height: '3px',
                                    background: 'linear-gradient(135deg, #EC4899, #6366F1)',
                                    transition: 'width 0.3s ease-in-out',
                                },
                                '&:hover::after': {
                                    width: '100%',
                                },
                            }}
                        >
                            Ilyas BEN ALLA
                        </Typography>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        animate={{
                            ...floatingAnimation,
                            transition: { ...floatingAnimation.transition, delay: 0.2 }
                        }}
                        style={{ marginBottom: '0.25rem' }}
                    >
                        <Typography
                            variant="h4"
                            color="textSecondary"
                            sx={{
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                                lineHeight: 1.2
                            }}
                        >
                            {t('home.student')}
                        </Typography>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        animate={{
                            ...floatingAnimation,
                            transition: { ...floatingAnimation.transition, delay: 0.4 }
                        }}
                        style={{ marginBottom: '0.5rem' }}
                    >
                        <Typography
                            variant="h5"
                            color="textSecondary"
                            sx={{
                                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                                lineHeight: 1.2
                            }}
                        >
                            {t('home.schools')}
                        </Typography>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        animate={{
                            background: [
                                'linear-gradient(45deg, rgba(88, 28, 135, 0.8), rgba(147, 51, 234, 0.8))',
                                'linear-gradient(45deg, rgba(147, 51, 234, 0.8), rgba(88, 28, 135, 0.8))',
                                'linear-gradient(45deg, rgba(88, 28, 135, 0.8), rgba(147, 51, 234, 0.8))'
                            ],
                            transition: {
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                        style={{
                            padding: '0.75rem',
                            borderRadius: '1rem',
                            marginBottom: '0.5rem'
                        }}
                    >
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            sx={{
                                maxWidth: '600px',
                                mx: 'auto',
                                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                                lineHeight: 1.4,
                                padding: { xs: 0.75, sm: 1, md: 1.5 },
                                borderRadius: 2,
                                backdropFilter: 'blur(4px)',
                                backgroundColor: 'rgba(88, 28, 135, 0.1)',
                            }}
                        >
                            {t('home.passion')}
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Box sx={{
                            display: 'flex',
                            gap: { xs: 1, sm: 1.5 },
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                animate={{
                                    ...floatingAnimation,
                                    transition: { ...floatingAnimation.transition, delay: 0.6 }
                                }}
                            >
                                <Button
                                    component={Link}
                                    to="/projects"
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    sx={{
                                        px: { xs: 2, sm: 3, md: 4 },
                                        py: { xs: 1, sm: 1.25, md: 1.5 },
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                        background: 'linear-gradient(45deg, #581C87, #9333EA)',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #9333EA, #581C87)',
                                        }
                                    }}
                                >
                                    {t('home.viewProjects')}
                                </Button>
                            </motion.div>

                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                animate={{
                                    ...floatingAnimation,
                                    transition: { ...floatingAnimation.transition, delay: 0.8 }
                                }}
                            >
                                <Button
                                    component={Link}
                                    to="/contact"
                                    variant="outlined"
                                    color="primary"
                                    size="medium"
                                    sx={{
                                        px: { xs: 2, sm: 3, md: 4 },
                                        py: { xs: 1, sm: 1.25, md: 1.5 },
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                        borderWidth: 2,
                                        borderColor: '#9333EA',
                                        color: '#9333EA',
                                        '&:hover': {
                                            borderWidth: 2,
                                            borderColor: '#9333EA',
                                            backgroundColor: 'rgba(147, 51, 234, 0.1)',
                                        }
                                    }}
                                >
                                    {t('home.contact')}
                                </Button>
                            </motion.div>
                        </Box>
                    </motion.div>
                </motion.div>
            </Box>
        </Container>
    );
};

export default Home; 