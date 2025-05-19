import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    Grid,
    Paper,
    IconButton,
} from '@mui/material';
import {
    Email,
    LinkedIn,
    GitHub,
    Send,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent('Contact depuis le portfolio');
        const body = encodeURIComponent(
            `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:ilyas.ben-alla@etu.ec-lyon.fr?subject=${subject}&body=${body}`;
    };

    const socialLinks = [
        {
            name: 'Email',
            icon: <Email />,
            link: 'ilyas.ben-alla@etu.ec-lyon.fr',
        },
        {
            name: 'LinkedIn',
            icon: <LinkedIn />,
            link: 'https://www.linkedin.com/in/ilyas-ben-alla-b795911a5',
        },
        {
            name: 'GitHub',
            icon: <GitHub />,
            link: 'https://github.com/IlyasBBB',
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
                        {t('contact.title')}
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <Typography variant="h5" gutterBottom>
                                    {t('contact.sendMessage')}
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        fullWidth
                                        label={t('contact.name')}
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        margin="normal"
                                        required
                                    />
                                    <TextField
                                        fullWidth
                                        label={t('contact.email')}
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        margin="normal"
                                        required
                                    />
                                    <TextField
                                        fullWidth
                                        label={t('contact.message')}
                                        name="message"
                                        multiline
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        margin="normal"
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        endIcon={<Send />}
                                        sx={{ mt: 2 }}
                                    >
                                        {t('contact.send')}
                                    </Button>
                                </form>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} sx={{ p: 4 }}>
                                <Typography variant="h5" gutterBottom>
                                    {t('contact.findMe')}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                                    {socialLinks.map((social, index) => (
                                        <IconButton
                                            key={index}
                                            color="primary"
                                            href={social.link}
                                            target="_blank"
                                            size="large"
                                            sx={{
                                                '&:hover': {
                                                    transform: 'scale(1.1)',
                                                    transition: 'transform 0.2s',
                                                },
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                    ))}
                                </Box>
                                <Typography variant="body1" sx={{ mt: 4 }}>
                                    {t('contact.message.collaboration')}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </motion.div>
            </Box>
        </Container>
    );
};

export default Contact; 