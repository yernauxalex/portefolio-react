/* eslint-disable no-unused-vars */
import soapAgencyBanner from '../assets/projectBanner/soapagencyBanner.JPG';
import astroSpotifyBanner from '../assets/projectBanner/astrospotifyBanner.JPG';
import groupomaniaBanner from '../assets/projectBanner/groupomaniaBanner.png';
import kanapBanner from '../assets/projectBanner/kanapBanner.png';
import reviewsBanner from '../assets/projectBanner/reviewsBanner.png';
import chouetteagenceBanner from '../assets/projectBanner/chouetteagenceBanner.png';
import ohmyfoodBanner from '../assets/projectBanner/ohmyfoodBanner.png';
import bootstrapIcon from '../assets/icons/bootstrapIcon.png';
import reactIcon from '../assets/icons/reactIcon.png';
import nodejsIcon from '../assets/icons/nodejsIcon.png';
import javascriptIcon from '../assets/icons/javascriptIcon.png';
import postgreIcon from '../assets/icons/postgreIcon.png';
import html5Icon from '../assets/icons/html5Icon.png';
export const project = [
    {
        id: 1,
        name: 'Soap Agency',
        desc: "Page d'accueil d'une agence de marketing",
        descEN: 'Landing page of a marketing agency',
        pathBanner: soapAgencyBanner,
        urlGithub: 'https://github.com/yernauxalex/marketing-agency',
        urlHost: 'https://yernauxalex.github.io/marketing-agency/',
        hostBy: 'GithubPages',
        frontend: true,
        backend: false,
        tech: [
            { name: 'Javascript', icon: javascriptIcon },
            { name: 'React', icon: reactIcon },
            { name: 'Bootstrap', icon: bootstrapIcon }
        ],
        type: 'perso'
    },
    {
        id: 2,
        name: 'Astro Spotify',
        desc:
            "Trouvez le signe astrologique compatible avec le votre d'après vos artistes favoris sur Spotify 🎶",
        descEN: 'Find your matching sign based on your favorite artists on Spotify 🎶',
        pathBanner: astroSpotifyBanner,
        urlGithub: 'https://github.com/yernauxalex/astralspotify',
        urlHost: 'https://resonant-medovik-c1c915.netlify.app/',
        hostBy: 'Netlify',
        frontend: true,
        backend: false,
        tech: [
            { name: 'Javascript', icon: javascriptIcon },
            { name: 'React', icon: reactIcon },
            { name: 'Bootstrap', icon: bootstrapIcon }
        ],
        type: 'perso'
    },
    {
        id: 3,
        name: 'Projet OC 7 - Réseau social d’entreprise',
        desc:
            "Création d'un réseau social d'entreprise fictif, ayant pour fonctionnalités la création de post texte ou image, possiblité de commenter nos postes et ceux de nos collègues, possibilité de like les posts",
        pathBanner: groupomaniaBanner,
        urlGithub: 'https://github.com/yernauxalex/YERNAUXAlexis_7_31012022',
        urlHost: '',
        hostBy: null,
        frontend: true,
        backend: true,
        tech: [
            { name: 'Javascript', icon: javascriptIcon },
            { name: 'React', icon: reactIcon },
            { name: 'NodeJs', icon: nodejsIcon },
            { name: 'PostgreSQL', icon: postgreIcon },
            { name: 'Express', icon: null }
        ],
        type: 'OC'
    },
    {
        id: 4,
        name: 'Projet OC 6 - API sécurisée pour une application',
        desc: "Création d'une API sécurisée pour une application d'avis gastronomiques",
        pathBanner: reviewsBanner,
        urlGithub: 'https://github.com/yernauxalex/YERNAUXAlexis_6_08012022',
        urlHost: '',
        hostBy: null,
        frontend: false,
        backend: true,
        tech: [
            { name: 'Javascript', icon: javascriptIcon },
            { name: 'NodeJs', icon: nodejsIcon },
            { name: 'MongoDB', icon: null },
            { name: 'Express', icon: null }
        ],
        type: 'OC'
    },
    {
        id: 5,
        name: 'Projet OC 5 - Kanap',
        desc: "Création de la partie dynamique du site d'e-commerce de Kanap",
        pathBanner: kanapBanner,
        urlGithub: 'https://github.com/yernauxalex/YERNAUXAlexis_5_26112021',
        urlHost: '',
        hostBy: null,
        frontend: true,
        backend: false,
        tech: [{ name: 'Javascript', icon: javascriptIcon }],
        type: 'OC'
    },
    {
        id: 6,
        name: 'Projet OC 4 - La Chouette Agence',
        desc: "Optimisation de l'accessibilité et du SEO",
        pathBanner: chouetteagenceBanner,
        urlGithub: 'https://github.com/yernauxalex/YERNAUXAlexis_4_16112021',
        urlHost: 'https://yernauxalex.github.io/YERNAUXAlexis_4_16112021/',
        hostBy: 'GithubPages',
        frontend: true,
        backend: false,
        tech: null,
        type: 'OC'
    },
    {
        id: 7,
        name: 'Projet OC 3 - OhMyFood',
        desc: 'Dynamiser une page web avec des animations CSS',
        pathBanner: ohmyfoodBanner,
        urlGithub: 'https://github.com/yernauxalex/YERNAUXAlexis_3_26102021',
        urlHost: 'https://yernauxalex.github.io/YERNAUXAlexis_3_26102021/',
        hostBy: 'GithubPages',
        frontend: true,
        backend: false,
        tech: [{ name: 'HTML', icon: html5Icon }, { name: 'SCSS' }],
        type: 'OC'
    }
];
