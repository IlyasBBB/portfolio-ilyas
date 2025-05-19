import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
    [key: string]: string;
}

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Translations> = {
    fr: {
        'about.title': 'À propos de moi',
        'about.role': 'Élève Ingénieur en Développement Web & Software',
        'about.description': `Je suis actuellement en deuxième année à l'École Centrale de Lyon, passionné par le développement web et logiciel. 
        Dans le cadre de mon année de césure à débuter entre juillet et septembre 2025, je souhaite mettre à profit et acquérir de nouvelles compétences 
        en conception d'applications et développement full-stack tout en m'impliquant dans des projets innovants. Mon expérience avec divers langages de programmation et 
        mon engagement dans des projets innovants me permettent d'apporter une perspective unique et des solutions créatives.`,
        'about.education': 'Formation',
        'about.experience': 'Expérience Professionnelle',
        'about.projects': 'Projets',
        'about.skills': 'Compétences Techniques',
        'about.technicalSkills': 'Compétences Techniques',
        'about.languages': 'Langues',
        'about.certifications': 'Certifications',
        'about.activities': 'Activités Associatives',
        'about.education.exchange': 'Semestre d\'échange en Développement Web et Interfaces Graphiques',
        'about.education.engineering': 'Diplôme d\'ingénieur généraliste',
        'about.education.prepSchool': 'Classes préparatoires aux grandes écoles (MP)',
        'about.education.specialization': 'Domaines de spécialisation : Gestion de projets, Méthode agile, Planification, Développement Web',
        'about.experience.waste': 'Développement d\'une application web de gestion des déchets au Maroc',
        'about.experience.waste.details': 'Optimisation de la chaîne d\'approvisionnement des déchets et planification logistique via une plateforme connectée pour la traçabilité en temps réel',
        'about.experience.operator': 'Stage opérateur',
        'about.experience.operator.details': 'Développement d\'une application web (Django) pour l\'équipe Digital Factory gérant la planification des projets et la répartition des tâches',
        'about.projects.eccforum': 'Site web Forum ECC (PHP)',
        'about.projects.eccforum.details': 'Site web pour le Forum des Entreprises de l\'École Centrale Casablanca: présentation, CVthèque, dépôt de candidatures pour les entreprises visiteuses.',
        'about.projects.django': 'Application d\'apprentissage Python (Django)',
        'about.projects.django.details': 'Application web éducative proposant un test initial puis des problèmes adaptés au niveau de l\'utilisateur, qui évolue selon ses réponses.',
        'about.projects.media': 'Lecteur multimédia web (JavaScript)',
        'about.projects.media.details': 'Lecteur multimédia local en JavaScript vanilla, intégrant aussi les API YouTube et Spotify.',
        'about.projects.game': 'Jeu 2048 (C++/QML)',
        'about.projects.game.details': 'Développement d\'un jeu 2048 interactif en C++ et QML.',
        'about.activities.forum': 'Responsable IT- Club Forum ECC Entreprises',
        'about.activities.forum.details1': 'Développement du site web du club',
        'about.activities.forum.details2': 'Organisation du forum',
        'about.activities.forum.details3': 'Coordination des interventions des entreprises',
        'about.activities.coding': 'Chef d\'équipe Coding & Développement- Centrale Tech',
        'about.activities.coding.details': 'Organisation de séances de formation et de compétitions de développement',
        'about.lang.en': 'Anglais',
        'about.lang.fr': 'Français',
        'about.lang.ar': 'Arabe',
        'about.lang.level.toeic': 'TOEIC',
        'about.lang.level.dalf': 'DALF C1',
        'about.lang.level.advanced': 'Niveau avancé',
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',
        'nav.switchToEn': 'Switch to English',
        'nav.switchToFr': 'Passer en Français',
        'home.student': 'Étudiant en 2ème année',
        'home.schools': 'École Centrale Casablanca | École Centrale Lyon',
        'home.passion': 'Passionné par le développement web et les nouvelles technologies. Actuellement en semestre d\'échange à l\'École Centrale de Lyon.',
        'home.contact': 'Me contacter',
        'home.viewProjects': 'Voir mes projets',
        'contact.title': 'Contact',
        'contact.sendMessage': 'Envoyez-moi un message',
        'contact.name': 'Nom',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Envoyer',
        'contact.findMe': 'Retrouvez-moi sur',
        'contact.message.collaboration': 'N\'hésitez pas à me contacter pour toute opportunité de collaboration ou question concernant mes projets.',
        'skills.programming': 'Programmation',
        'skills.cybersecurity': 'Cybersécurité',
        'skills.projectManagement': 'Gestion de projet',
        'skills.agile': 'Méthodologie Agile',
        'education.period.exchange': 'Janvier 2025 – Juin 2025',
        'education.period.engineering': 'Septembre 2023 – Janvier 2025',
        'education.period.prepSchool': 'Septembre 2020 – Juillet 2022',
        'education.institution.ecl': 'École Centrale Lyon',
        'education.institution.ecc': 'École Centrale Casablanca',
        'education.institution.lycee': 'Lycée Mohamed V, Beni Mellal',
        'experience.period.waste': 'Septembre 2024 – Janvier 2025',
        'experience.period.operator': 'Juin 2024 – Août 2024',
        'experience.company.lafarge': 'Lafarge',
        'experience.company.cosumar': 'Cosumar- Casablanca',
        'activity.period.forum': 'Février 2024 – Janvier 2025',
        'activity.period.coding': 'Septembre 2024 – Juin 2025',
        'projects.title': 'Mes Projets',
        'projects.eccforum.title': 'Site web Forum ECC (PHP)',
        'projects.eccforum.description': `Site web développé pour le Forum des Entreprises de l'École Centrale Casablanca, permettant la présentation de l'événement, la gestion d'une CVthèque, et le dépôt de candidatures pour les entreprises visiteuses.\n\nFonctionnalités principales :\n- Présentation dynamique du forum et de ses partenaires\n- Espace entreprise pour consulter les CV et gérer les candidatures\n- Interface d'administration pour la gestion des offres et des utilisateurs\n- Système d'inscription et de dépôt de CV pour les étudiants\n- Intégration d'un calendrier des événements et d'une galerie photo\n- Sécurité des données et gestion des accès\n- Déploiement sur serveur mutualisé avec base de données MySQL`,
        'projects.ticketmanager.title': 'TicketManager – Application de Gestion des Tickets (Django/Bootstrap)',
        'projects.ticketmanager.description': `Bienvenue dans TicketManager, une application web développée avec Django permettant la gestion de projets et de tickets. Elle offre une interface intuitive pour les administrateurs et les membres d\'équipe, favorisant un suivi clair et collaboratif.\n\nFonctionnalités principales :\n- Authentification des utilisateurs (connexion, inscription, réinitialisation du mot de passe)\n- Gestion des projets (ajout, assignation aux membres)\n- Création, mise à jour et suivi des tickets (éditeur de texte enrichi)\n- Filtres et tri (par statut, date, ordre alphabétique)\n- Interface admin complète (gestion des membres, projets, statistiques)\n- Interface membre personnalisée (tickets assignés, historique, remarques)\n- Tableau de bord avec statistiques clés\n- Upload de fichiers (ex: CV, justificatifs)\n- Pagination, commentaires, notifications internes`,
        'projects.django.title': 'Application d\'apprentissage Python (Django)',
        'projects.django.description': `Application web éducative développée avec Django, proposant un test initial pour évaluer le niveau de l'utilisateur, puis générant des exercices de programmation Python adaptés à son profil.\n\nFonctionnalités principales :\n- Authentification et gestion des utilisateurs\n- Génération dynamique de problèmes selon la progression\n- Correction automatique des réponses et feedback personnalisé\n- Tableau de bord de suivi des progrès\n- Interface d'administration pour la gestion des exercices\n- Système de badges et de niveaux pour motiver l'apprentissage\n- Export des résultats et statistiques détaillées`,
        'projects.media.title': 'Lecteur multimédia web (JavaScript)',
        'projects.media.description': `Lecteur multimédia web complet, développé pour l'École Centrale de Lyon, intégrant la lecture de fichiers locaux, YouTube et Spotify.\n\nFonctionnalités principales :\n- Interface utilisateur moderne et responsive\n- Recherche et lecture de musiques via l'API Spotify\n- Intégration de vidéos YouTube\n- Gestion de playlists personnalisées\n- Historique de lecture et bibliothèque locale\n- Système de favoris et de recommandations\n- Authentification et gestion des utilisateurs\n- Déploiement sur serveur interne de l'école`,
        'projects.game2048.title': 'Jeu 2048 (C++/QML)',
        'projects.game2048.description': `Développement d'un jeu 2048 interactif en C++ et QML, avec une interface graphique fluide et des animations modernes.\n\nFonctionnalités principales :\n- Grille de jeu dynamique et responsive\n- Système de score et sauvegarde des meilleures parties\n- Animations lors des déplacements et fusions de tuiles\n- Mode sombre et personnalisation des couleurs\n- Optimisation des performances pour desktop\n- Code structuré en architecture MVC`,
        'projects.portfolio.title': 'Portfolio personnel (React/TypeScript)',
        'projects.portfolio.description': `Portfolio personnel interactif, multilingue et responsive, développé avec React, TypeScript, Material-UI et TailwindCSS.\n\nFonctionnalités principales :\n- Présentation de mon parcours, compétences et projets\n- Système de traduction français/anglais\n- Animations modernes avec Framer Motion\n- Design dark mode et adaptatif\n- Formulaire de contact fonctionnel\n- Déploiement sur GitHub Pages et code open source`,
        'projects.buttons.code': 'Code',
        'projects.buttons.demo': 'Demo'
    },
    en: {
        'about.title': 'About Me',
        'about.role': 'Engineering Student in Web & Software Development',
        'about.description': `I am currently in my second year at École Centrale de Lyon, passionate about web and software development. 
        During my gap year starting between July and September 2025, I aim to leverage and acquire new skills in application design and 
        full-stack development while engaging in innovative projects. My experience with various programming languages and my involvement 
        in innovative projects allow me to bring a unique perspective and creative solutions.`,
        'about.education': 'Education',
        'about.experience': 'Professional Experience',
        'about.projects': 'Projects',
        'about.skills': 'Technical Skills',
        'about.technicalSkills': 'Technical Skills',
        'about.languages': 'Languages',
        'about.certifications': 'Certifications',
        'about.activities': 'Associative Activities',
        'about.education.exchange': 'Exchange Semester in Web Development and Graphical Interfaces',
        'about.education.engineering': 'General Engineering Degree',
        'about.education.prepSchool': 'Preparatory Classes for Engineering Schools (MP)',
        'about.education.specialization': 'Specialization areas: Project Management, Agile Methodology, Planning, Web Development',
        'about.experience.waste': 'Development of a waste management web application in Morocco',
        'about.experience.waste.details': 'Optimization of waste supply chain and logistics planning through a connected platform for real-time traceability',
        'about.experience.operator': 'Operator Internship',
        'about.experience.operator.details': 'Development of a web application (Django) for the Digital Factory team managing project planning and task allocation',
        'about.projects.eccforum': 'ECC Forum Website (PHP)',
        'about.projects.eccforum.details': 'Website for the École Centrale Casablanca Business Forum: presentation, CV database, application submission for visiting companies.',
        'about.projects.django': 'Python Learning Application (Django)',
        'about.projects.django.details': 'Educational web application offering an initial test followed by problems adapted to the user\'s level, evolving based on their responses.',
        'about.projects.media': 'Web Media Player (JavaScript)',
        'about.projects.media.details': 'Local media player in vanilla JavaScript, also integrating YouTube and Spotify APIs.',
        'about.projects.game': '2048 Game (C++/QML)',
        'about.projects.game.details': 'Development of an interactive 2048 game in C++ and QML.',
        'about.activities.forum': 'IT Manager - ECC Business Forum Club',
        'about.activities.forum.details1': 'Club website development',
        'about.activities.forum.details2': 'Forum organization',
        'about.activities.forum.details3': 'Coordination of company interventions',
        'about.activities.coding': 'Team Leader Coding & Development - Centrale Tech',
        'about.activities.coding.details': 'Organization of training sessions and development competitions',
        'about.lang.en': 'English',
        'about.lang.fr': 'French',
        'about.lang.ar': 'Arabic',
        'about.lang.level.toeic': 'TOEIC',
        'about.lang.level.dalf': 'DALF C1',
        'about.lang.level.advanced': 'Advanced Level',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'nav.switchToEn': 'Switch to English',
        'nav.switchToFr': 'Passer en Français',
        'home.student': '2nd Year Student',
        'home.schools': 'École Centrale Casablanca | École Centrale Lyon',
        'home.passion': 'Passionate about web development and new technologies. Currently on an exchange semester at École Centrale de Lyon.',
        'home.contact': 'Contact Me',
        'home.viewProjects': 'View my projects',
        'contact.title': 'Contact',
        'contact.sendMessage': 'Send me a message',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Send',
        'contact.findMe': 'Find me on',
        'contact.message.collaboration': 'Feel free to contact me for any collaboration opportunities or questions about my projects.',
        'skills.programming': 'Programming',
        'skills.cybersecurity': 'Cybersecurity',
        'skills.projectManagement': 'Project Management',
        'skills.agile': 'Agile Methodology',
        'education.period.exchange': 'January 2025 – June 2025',
        'education.period.engineering': 'September 2023 – January 2025',
        'education.period.prepSchool': 'September 2020 – July 2022',
        'education.institution.ecl': 'École Centrale Lyon',
        'education.institution.ecc': 'École Centrale Casablanca',
        'education.institution.lycee': 'Lycée Mohamed V, Beni Mellal',
        'experience.period.waste': 'September 2024 – January 2025',
        'experience.period.operator': 'June 2024 – August 2024',
        'experience.company.lafarge': 'Lafarge',
        'experience.company.cosumar': 'Cosumar- Casablanca',
        'activity.period.forum': 'February 2024 – January 2025',
        'activity.period.coding': 'September 2024 – June 2025',
        'projects.title': 'My Projects',
        'projects.eccforum.title': 'ECC Forum Website (PHP)',
        'projects.eccforum.description': `Website developed for the École Centrale Casablanca Business Forum, allowing event presentation, CV database management, and application submission for visiting companies.\n\nMain features:\n- Dynamic presentation of the forum and its partners\n- Company area to consult CVs and manage applications\n- Admin interface for managing offers and users\n- Registration system and CV submission for students\n- Event calendar and photo gallery integration\n- Data security and access management\n- Deployment on shared server with MySQL database`,
        'projects.ticketmanager.title': 'TicketManager – Ticket Management App (Django/Bootstrap)',
        'projects.ticketmanager.description': `Welcome to TicketManager, a web app developed with Django for managing projects and tickets. It offers an intuitive interface for admins and team members, enabling clear and collaborative tracking.\n\nMain features:\n- User authentication (login, signup, password reset)\n- Project management (add, assign to members)\n- Ticket creation, update, and tracking (rich text editor)\n- Filters and sorting (by status, date, alphabetical order)\n- Full admin interface (manage members, projects, stats)\n- Personalized member interface (assigned tickets, history, notes)\n- Dashboard with key statistics\n- File upload (e.g., CV, supporting docs)\n- Pagination, comments, internal notifications`,
        'projects.django.title': 'Python Learning Application (Django)',
        'projects.django.description': `Educational web application developed with Django, offering an initial test to assess the user's level, then generating Python programming exercises tailored to their profile.\n\nMain features:\n- User authentication and management\n- Dynamic generation of problems according to progress\n- Automatic correction and personalized feedback\n- Progress tracking dashboard\n- Admin interface for managing exercises\n- Badge and level system to motivate learning\n- Export of results and detailed statistics`,
        'projects.media.title': 'Web Media Player (JavaScript)',
        'projects.media.description': `Comprehensive web media player developed for École Centrale de Lyon, integrating playback of local files, YouTube, and Spotify.\n\nMain features:\n- Modern and responsive user interface\n- Search and play music via Spotify API\n- YouTube video integration\n- Custom playlist management\n- Playback history and local library\n- Favorites and recommendations system\n- User authentication and management\n- Deployment on the school's internal server`,
        'projects.game2048.title': '2048 Game (C++/QML)',
        'projects.game2048.description': `Development of an interactive 2048 game in C++ and QML, with a smooth graphical interface and modern animations.\n\nMain features:\n- Dynamic and responsive game grid\n- Score system and best game saving\n- Animations for tile moves and merges\n- Dark mode and color customization\n- Performance optimization for desktop\n- MVC architecture code structure`,
        'projects.portfolio.title': 'Personal Portfolio (React/TypeScript)',
        'projects.portfolio.description': `Interactive, multilingual, and responsive personal portfolio developed with React, TypeScript, Material-UI, and TailwindCSS.\n\nMain features:\n- Presentation of my background, skills, and projects\n- French/English translation system\n- Modern animations with Framer Motion\n- Dark mode and adaptive design\n- Functional contact form\n- Deployment on GitHub Pages and open source code`,
        'projects.buttons.code': 'Code',
        'projects.buttons.demo': 'Demo'
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('fr');

    const t = (key: string) => translations[language][key] || key;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export { useLanguage, LanguageProvider };