import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: t('projects.eccforum.title'),
            description: t('projects.eccforum.description'),
            image: "/project-eccforum.jpg",
            technologies: ["PHP", "MySQL", "HTML", "CSS"],
            github: "",
            demo: "https://forum.centrale-casablanca.net/"
        },
        {
            title: t('projects.ticketmanager.title'),
            description: t('projects.ticketmanager.description'),
            image: "/project-ticketmanager.jpg",
            technologies: ["Django", "Bootstrap", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/IlyasBBB/Gestion-de-projets.git",
            demo: ""
        },
        {
            title: t('projects.django.title'),
            description: t('projects.django.description'),
            image: "/project-django.jpg",
            technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/IlyasBBB/CodeCheck.git",
            demo: ""
        },
        {
            title: t('projects.media.title'),
            description: t('projects.media.description'),
            image: "/project-media.jpg",
            technologies: ["JavaScript", "HTML", "CSS", "YouTube API", "Spotify API"],
            github: "https://github.com/IlyasBBB/Lecteur-Multim-dia.git",
            demo: ""
        },
        {
            title: t('projects.game2048.title'),
            description: t('projects.game2048.description'),
            image: "/project-2048.jpg",
            technologies: ["C++", "QML", "Qt"],
            github: "https://gitlab.ec-lyon.fr/benallai/2048_ilyas-ben-alla.git",
            demo: ""
        },
        {
            title: t('projects.portfolio.title'),
            description: t('projects.portfolio.description'),
            image: "/project-portfolio.jpg",
            technologies: ["React", "TypeScript", "Material-UI", "Framer Motion", "TailwindCSS"],
            github: "",
            demo: ""
        },
    ];

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 8 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" component="h2" gutterBottom>
                        {t('projects.title')}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            href="https://ilyasbbb.github.io/portfolio-ilyas/"
                            target="_blank"
                            sx={{ fontWeight: 600 }}
                        >
                            Voir le site en ligne
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            href="https://github.com/IlyasBBB/portfolio-ilyas.git"
                            target="_blank"
                            sx={{ fontWeight: 600 }}
                        >
                            Voir le code sur GitHub
                        </Button>
                    </Box>

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <Card elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: 430 }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={project.image}
                                            alt={project.title}
                                        />
                                        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant="h5" gutterBottom>
                                                {project.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                paragraph
                                                sx={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 4,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    minHeight: 88,
                                                    mb: 2
                                                }}
                                            >
                                                {project.description}
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                                {project.technologies.map((tech, i) => (
                                                    <Typography
                                                        key={i}
                                                        variant="body2"
                                                        sx={{
                                                            bgcolor: 'primary.main',
                                                            color: 'white',
                                                            px: 1,
                                                            py: 0.5,
                                                            borderRadius: 1,
                                                        }}
                                                    >
                                                        {tech}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        </CardContent>
                                        <CardActions>
                                            {project.github && (
                                                <Button
                                                    size="small"
                                                    startIcon={<GitHub />}
                                                    href={project.github}
                                                    target="_blank"
                                                    sx={{
                                                        background: 'linear-gradient(135deg, #EC4899, #6366F1)',
                                                        color: 'white',
                                                        fontWeight: 600,
                                                        px: 2,
                                                        borderRadius: 2,
                                                        boxShadow: '0 2px 8px rgba(99,102,241,0.15)',
                                                        transition: 'background 0.3s, box-shadow 0.3s',
                                                        '&:hover': {
                                                            background: 'linear-gradient(135deg, #6366F1, #EC4899)',
                                                            boxShadow: '0 4px 16px rgba(99,102,241,0.25)',
                                                        },
                                                    }}
                                                >
                                                    {t('projects.buttons.code')}
                                                </Button>
                                            )}
                                            {project.demo && (
                                                <Button
                                                    size="small"
                                                    startIcon={<Launch />}
                                                    href={project.demo}
                                                    target="_blank"
                                                    sx={{
                                                        background: 'linear-gradient(135deg, #EC4899, #6366F1)',
                                                        color: 'white',
                                                        fontWeight: 600,
                                                        px: 2,
                                                        borderRadius: 2,
                                                        boxShadow: '0 2px 8px rgba(99,102,241,0.15)',
                                                        transition: 'background 0.3s, box-shadow 0.3s',
                                                        '&:hover': {
                                                            background: 'linear-gradient(135deg, #6366F1, #EC4899)',
                                                            boxShadow: '0 4px 16px rgba(99,102,241,0.25)',
                                                        },
                                                    }}
                                                >
                                                    {t('projects.buttons.demo')}
                                                </Button>
                                            )}
                                        </CardActions>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Box>
        </Container>
    );
};

export default Projects; 