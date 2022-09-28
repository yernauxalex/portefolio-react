import soapAgencyBanner from '../assets/projectBanner/soapagencyBanner.JPG';
import astroSpotifyBanner from '../assets/projectBanner/astrospotifyBanner.JPG';
export const project = [
    {
        id: 1,
        name: 'Soap Agency',
        desc: 'Landing page of a marketing agency',
        pathBanner: soapAgencyBanner,
        urlGithub: 'https://github.com/yernauxalex/marketing-agency',
        urlHost: 'https://yernauxalex.github.io/marketing-agency/',
        frontend: true,
        backend: false,
        tech: ['react', 'bootstrap'],
        type: 'perso'
    },
    {
        id: 2,
        name: 'Astro Spotify',
        desc: 'Find your matching sign based on your favorite artists on Spotify 🎶',
        pathBanner: astroSpotifyBanner,
        urlGithub: 'https://github.com/yernauxalex/astralspotify',
        urlHost: 'https://resonant-medovik-c1c915.netlify.app/',
        frontend: true,
        backend: false,
        type: 'perso'
    },
    {
        id: 3,
        name: 'Projet OC 7 - Réseau social d’entreprise',
        desc:
            "Création d'un réseau social d'entreprise fictif, ayant pour fonctionnalités la création de post texte ou image, possiblité de commenter nos postes et ceux de nos collègues, possibilité de like les posts",
        pathBanner: astroSpotifyBanner,
        urlGithub: 'https://github.com/yernauxalex/YERNAUXAlexis_7_31012022',
        urlHost: '',
        frontend: true,
        backend: true,
        type: 'OC'
    },
    {
        id: 4,
        name: 'Projet OC 6 - API sécurisée pour une application',
        desc: "Création d'une API sécurisée pour une application d'avis gastronomiques",
        pathBanner: astroSpotifyBanner,
        urlGithub: 'https://github.com/yernauxalex/YERNAUXAlexis_6_08012022',
        urlHost: '',
        frontend: false,
        backend: true,
        type: 'OC'
    },
    {
        id: 5,
        name: 'Projet OC 5 - Kanap',
        desc: "Création de la partie dynamique du site d'e-commerce de Kanap",
        pathBanner: astroSpotifyBanner,
        urlGithub: 'https://github.com/yernauxalex/YERNAUXAlexis_5_26112021',
        urlHost: '',
        frontend: true,
        backend: false,
        type: 'OC'
    }
];
