import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6366F1',
            light: '#818CF8',
            dark: '#4F46E5',
        },
        secondary: {
            main: '#EC4899',
            light: '#F472B6',
            dark: '#DB2777',
        },
        background: {
            default: '#1A1A1A',
            paper: '#2C2C2C',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B3B3B3',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
    },
    typography: {
        fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            background: 'linear-gradient(135deg, #EC4899, #6366F1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 600,
            lineHeight: 1.3,
            background: 'linear-gradient(135deg, #EC4899, #6366F1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h4: {
            fontSize: '1.75rem',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 500,
                    background: 'linear-gradient(135deg, #EC4899, #6366F1)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #F472B6, #818CF8)',
                    },
                },
                outlined: {
                    borderWidth: '2px',
                    borderColor: '#6366F1',
                    color: '#6366F1',
                    background: 'transparent',
                    '&:hover': {
                        borderColor: '#EC4899',
                        color: '#EC4899',
                        backgroundColor: 'rgba(236, 72, 153, 0.1)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(44, 44, 44, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(28, 28, 28, 0.95)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2C2C2C',
                    backgroundImage: 'none',
                },
            },
        },
    },
    shape: {
        borderRadius: 8,
    },
    transitions: {
        easing: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        },
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
        },
    },
});

export default theme; 