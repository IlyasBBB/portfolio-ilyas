import React from 'react';
import { Container, Typography, Grid, Paper, Box, List, ListItem, ListItemText, Chip, Divider, LinearProgress, Link } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import LanguageIcon from '@mui/icons-material/Language';
import VerifiedIcon from '@mui/icons-material/Verified';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useLanguage } from '../context/LanguageContext';

interface Language {
    name: string;
    level: string;
}

interface Education {
    period: string;
    title: string;
    institution: string;
    details?: string[];
}

interface Experience {
    period: string;
    title: string;
    company: string;
    details: string[];
}

interface Project {
    period: string;
    title: string;
    details: string[];
}

interface Activity {
    period: string;
    title: string;
    details: string[];
}

interface Skill {
    name: string;
    level: number; // 0-100
}

interface SkillCategory {
    [key: string]: Skill[];
}

const About: React.FC = () => {
    const { t } = useLanguage();

    const introduction = {
        title: t('about.role'),
        description: t('about.description')
    };

    const technicalSkills: SkillCategory = {
        [t('skills.programming')]: [
            { name: 'Python (Django)', level: 90 },
            { name: 'JavaScript (React, Node.js)', level: 85 },
            { name: 'PHP', level: 75 },
            { name: 'SQL', level: 80 },
            { name: 'HTML/CSS', level: 90 },
            { name: 'Git', level: 85 },
        ],
        [t('skills.cybersecurity')]: [
            { name: 'Nmap', level: 75 },
            { name: 'Metasploit', level: 70 },
            { name: 'Wireshark', level: 80 },
            { name: 'Burp Suite', level: 75 },
            { name: 'Linux', level: 85 },
        ],
        [t('skills.projectManagement')]: [
            { name: t('skills.agile'), level: 90 },
            { name: 'Power BI', level: 75 },
            { name: 'Microsoft Office', level: 85 },
            { name: 'Trello', level: 90 },
        ],
    };

    const languages: Language[] = [
        { name: t('about.lang.en'), level: t('about.lang.level.toeic') },
        { name: t('about.lang.fr'), level: t('about.lang.level.dalf') },
        { name: t('about.lang.ar'), level: t('about.lang.level.advanced') },
    ];

    const certifications: string[] = [
        'Django Web Framework (Meta)',
        'Google Project Management: Professional Certificate',
        'Google Cybersecurity',
    ];

    const education: Education[] = [
        {
            period: t('education.period.exchange'),
            title: t('about.education.exchange'),
            institution: t('education.institution.ecl'),
            details: [t('about.education.specialization')],
        },
        {
            period: t('education.period.engineering'),
            title: t('about.education.engineering'),
            institution: t('education.institution.ecc'),
        },
        {
            period: t('education.period.prepSchool'),
            title: t('about.education.prepSchool'),
            institution: t('education.institution.lycee'),
        },
    ];

    const experience: Experience[] = [
        {
            period: t('experience.period.waste'),
            title: t('about.experience.waste'),
            company: t('experience.company.lafarge'),
            details: [t('about.experience.waste.details')],
        },
        {
            period: t('experience.period.operator'),
            title: t('about.experience.operator'),
            company: t('experience.company.cosumar'),
            details: [t('about.experience.operator.details')],
        },
    ];

    const projects: Project[] = [
        {
            period: '2023-2024',
            title: t('about.projects.eccforum'),
            details: [t('about.projects.eccforum.details')],
        },
        {
            period: '2024',
            title: t('about.projects.django'),
            details: [t('about.projects.django.details')],
        },
        {
            period: '2024',
            title: t('about.projects.media'),
            details: [t('about.projects.media.details')],
        },
        {
            period: '2023',
            title: t('about.projects.game'),
            details: [t('about.projects.game.details')],
        },
    ];

    const activities: Activity[] = [
        {
            period: t('activity.period.forum'),
            title: t('about.activities.forum'),
            details: [
                t('about.activities.forum.details1'),
                t('about.activities.forum.details2'),
                t('about.activities.forum.details3'),
            ],
        },
        {
            period: t('activity.period.coding'),
            title: t('about.activities.coding'),
            details: [t('about.activities.coding.details')],
        },
    ];

    const sectionStyle = {
        mb: 4,
        '& .MuiPaper-root': {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            },
        },
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 8, position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
                        {t('about.title')}
                    </Typography>

                    {/* Introduction */}
                    <Grid item xs={12} sx={sectionStyle}>
                        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                            <Typography variant="h4" gutterBottom sx={{
                                background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 600
                            }}>
                                {introduction.title}
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                {introduction.description}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid container spacing={4}>
                        {/* Formation */}
                        <Grid item xs={12} sx={sectionStyle}>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <SchoolIcon sx={{ mr: 2 }} />
                                    <Typography variant="h5">{t('about.education')}</Typography>
                                </Box>
                                <List>
                                    {education.map((edu, index) => (
                                        <React.Fragment key={index}>
                                            <ListItem alignItems="flex-start">
                                                <ListItemText
                                                    primary={
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <Typography variant="h6">{edu.title}</Typography>
                                                            <Typography variant="body2" color="textSecondary">
                                                                {edu.period}
                                                            </Typography>
                                                        </Box>
                                                    }
                                                    secondary={
                                                        <>
                                                            <Typography component="span" variant="body1" color="textPrimary">
                                                                {edu.institution}
                                                            </Typography>
                                                            {edu.details && (
                                                                <List dense>
                                                                    {edu.details.map((detail, idx) => (
                                                                        <ListItem key={idx}>
                                                                            <ListItemText primary={detail} />
                                                                        </ListItem>
                                                                    ))}
                                                                </List>
                                                            )}
                                                        </>
                                                    }
                                                />
                                            </ListItem>
                                            {index < education.length - 1 && <Divider />}
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>

                        {/* Expérience Professionnelle */}
                        <Grid item xs={12} sx={sectionStyle}>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <WorkIcon sx={{ mr: 2 }} />
                                    <Typography variant="h5">{t('about.experience')}</Typography>
                                </Box>
                                <List>
                                    {experience.map((exp, index) => (
                                        <React.Fragment key={index}>
                                            <ListItem alignItems="flex-start">
                                                <ListItemText
                                                    primary={
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <Typography variant="h6">{exp.title}</Typography>
                                                            <Typography variant="body2" color="textSecondary">
                                                                {exp.period}
                                                            </Typography>
                                                        </Box>
                                                    }
                                                    secondary={
                                                        <>
                                                            <Typography component="span" variant="body1" color="textPrimary">
                                                                {exp.company}
                                                            </Typography>
                                                            <List dense>
                                                                {exp.details.map((detail, idx) => (
                                                                    <ListItem key={idx}>
                                                                        <ListItemText primary={detail} />
                                                                    </ListItem>
                                                                ))}
                                                            </List>
                                                        </>
                                                    }
                                                />
                                            </ListItem>
                                            {index < experience.length - 1 && <Divider />}
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>

                        {/* Projets */}
                        <Grid item xs={12} sx={sectionStyle}>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <CodeIcon sx={{ mr: 2 }} />
                                    <Typography variant="h5">{t('about.projects')}</Typography>
                                </Box>
                                <List>
                                    {projects.map((project, index) => (
                                        <React.Fragment key={index}>
                                            <ListItem alignItems="flex-start">
                                                <ListItemText
                                                    primary={
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                                                                {project.title}
                                                                {project.title.includes('GitHub') && (
                                                                    <GitHubIcon sx={{ ml: 1, fontSize: 20 }} />
                                                                )}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary">
                                                                {project.period}
                                                            </Typography>
                                                        </Box>
                                                    }
                                                    secondary={
                                                        <List dense>
                                                            {project.details.map((detail, idx) => (
                                                                <ListItem key={idx}>
                                                                    <ListItemText
                                                                        primary={detail}
                                                                        sx={{
                                                                            '& .MuiTypography-root': {
                                                                                color: 'text.primary',
                                                                                transition: 'color 0.3s ease',
                                                                                '&:hover': {
                                                                                    color: 'primary.main',
                                                                                },
                                                                            },
                                                                        }}
                                                                    />
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    }
                                                />
                                            </ListItem>
                                            {index < projects.length - 1 && <Divider />}
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>

                        {/* Compétences */}
                        <Grid item xs={12} md={6} sx={sectionStyle}>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <Typography variant="h5" gutterBottom>{t('about.technicalSkills')}</Typography>
                                {Object.entries(technicalSkills).map(([category, skills]) => (
                                    <Box key={category} sx={{ mb: 4 }}>
                                        <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                                            {category}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {skills.map((skill, index) => (
                                                <Chip
                                                    key={index}
                                                    label={skill.name}
                                                    sx={{
                                                        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(99, 102, 241, 0.1))',
                                                        border: '1px solid rgba(236, 72, 153, 0.2)',
                                                        mb: 1,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'scale(1.05)',
                                                            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(99, 102, 241, 0.2))',
                                                        },
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>

                        {/* Langues et Certifications */}
                        <Grid item xs={12} md={6} sx={sectionStyle}>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <Box sx={{ mb: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <LanguageIcon sx={{ mr: 2 }} />
                                        <Typography variant="h5">{t('about.languages')}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {languages.map((lang, index) => (
                                            <Chip
                                                key={index}
                                                label={`${lang.name} (${lang.level})`}
                                                sx={{
                                                    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(99, 102, 241, 0.1))',
                                                    border: '1px solid rgba(236, 72, 153, 0.2)',
                                                    mb: 1,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'scale(1.05)',
                                                        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(99, 102, 241, 0.2))',
                                                    },
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                                        <VerifiedIcon sx={{ mr: 2 }} />
                                        {t('about.certifications')}
                                    </Typography>
                                    <List dense>
                                        {certifications.map((cert, index) => (
                                            <ListItem key={index}>
                                                <ListItemText
                                                    primary={cert}
                                                    sx={{
                                                        '& .MuiTypography-root': {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            '&::before': {
                                                                content: '""',
                                                                display: 'inline-block',
                                                                width: '8px',
                                                                height: '8px',
                                                                borderRadius: '50%',
                                                                background: 'linear-gradient(135deg, #EC4899, #6366F1)',
                                                                marginRight: '12px',
                                                            },
                                                        },
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Activités Associatives */}
                        <Grid item xs={12} sx={sectionStyle}>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <GroupIcon sx={{ mr: 2 }} />
                                    <Typography variant="h5">{t('about.activities')}</Typography>
                                </Box>
                                <List>
                                    {activities.map((activity, index) => (
                                        <React.Fragment key={index}>
                                            <ListItem alignItems="flex-start">
                                                <ListItemText
                                                    primary={
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <Typography variant="h6">{activity.title}</Typography>
                                                            <Typography variant="body2" color="textSecondary">
                                                                {activity.period}
                                                            </Typography>
                                                        </Box>
                                                    }
                                                    secondary={
                                                        <List dense>
                                                            {activity.details.map((detail, idx) => (
                                                                <ListItem key={idx}>
                                                                    <ListItemText primary={detail} />
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    }
                                                />
                                            </ListItem>
                                            {index < activities.length - 1 && <Divider />}
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </motion.div>
            </Box>
        </Container>
    );
};

export default About; 