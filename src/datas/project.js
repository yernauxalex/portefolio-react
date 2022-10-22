/* eslint-disable no-unused-vars */
import soapAgencyBanner from '../assets/projectBanner/soapagencyBanner.JPG';
import astroSpotifyBanner from '../assets/projectBanner/astrospotifyBanner.JPG';
import groupomaniaBanner from '../assets/projectBanner/groupomaniaBanner.png';
import kanapBanner from '../assets/projectBanner/kanapBanner.png';
import reviewsBanner from '../assets/projectBanner/reviewsBanner.png';
import chouetteagenceBanner from '../assets/projectBanner/chouetteagenceBanner.png';
import ohmyfoodBanner from '../assets/projectBanner/ohmyfoodBanner.png';
import weatherappBanner from '../assets/projectBanner/weatherappBanner.png';
import bootstrapIcon from '../assets/icons/bootstrapIcon.png';
import reactIcon from '../assets/icons/reactIcon.png';
import nodejsIcon from '../assets/icons/nodejsIcon.png';
import javascriptIcon from '../assets/icons/javascriptIcon.png';
import postgreIcon from '../assets/icons/postgreIcon.png';
import html5Icon from '../assets/icons/html5Icon.png';

// last ID: 8
export const project = [
    {
        id: 1,
        nameFR: 'Soap Agency',
        nameEN: 'Soap Agency',
        descFR: "Page d'accueil d'une agence de marketing",
        descEN: 'Landing page of a marketing agency',
        richDescFR:
            "Exemple possible d'une page d'accueil d'une agence de marketing responsive et accessible",
        richDescEN: 'Possible example of a responsive and accessible marketing agency landing page',
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
        nameFR: 'Astro Spotify',
        nameEN: 'Astro Spotify',
        descFR:
            "Trouvez le signe astrologique compatible avec le votre d'après vos artistes favoris sur Spotify 🎶",
        descEN: 'Find your matching sign based on your favorite artists on Spotify 🎶',
        richDescFR:
            "Trouvez le signe astrologique compatible avec le votre d'après vos artistes favoris sur Spotify. La liste des fonctionnalités prévues est disponible sur le Github",
        richDescEN:
            'Find your compatible astrological sign based on your favourite artists on Spotify. The list of planned features is available on Github',
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
        type: 'perso',
        wip: true
    },
    {
        id: 8,
        nameFR: 'Appplication météo',
        nameEN: 'Simple weather app',
        descFR: "Simple application météo utilisant l'api d'OpenWeather",
        descEN: 'Simple weather application using the OpenWeather api',
        richDescFR:
            "Simple application météo utilisant l'api d'OpenWeather. La liste des fonctionnalités prévues est disponible sur le Github",
        richDescEN:
            'Simple weather application using the OpenWeather api. The list of planned features is available on Github',
        pathBanner: weatherappBanner,
        urlGithub: 'https://github.com/yernauxalex/weather-app-react',
        urlHost: 'https://glowing-truffle-62816a.netlify.app/',
        hostBy: 'Netlify',
        frontend: true,
        backend: false,
        tech: [
            { name: 'Javascript', icon: javascriptIcon },
            { name: 'React', icon: reactIcon },
            { name: 'Bootstrap', icon: bootstrapIcon }
        ],
        type: 'perso',
        wip: true
    },
    {
        id: 3,
        nameFR: 'Projet OC 7 - Réseau social d’entreprise',
        nameEN: 'Project OC 7 - Corporate social network',
        descFR: "Création d'un réseau social d'entreprise fictif",
        descEN: 'Creation of a fictitious company social network',
        richDescFR:
            "Création d'un réseau social d'entreprise fictif, ayant pour fonctionnalités la création de post texte ou image, possiblité de commenter nos postes et ceux de nos collègues, possibilité de like les posts",
        richDescEN:
            'Creation of a fictitious company social network, with the possibility to create text or image posts, to comment on our posts and those of our colleagues, to like posts',
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
        nameFR: 'Projet OC 6 - API sécurisée pour une application',
        nameEN: 'Project OC 6 - Secure API for an application',
        descFR: "Création d'une API sécurisée pour une application d'avis gastronomiques",
        descEN: 'Creation of a secure API for a food review application',
        richDescFR:
            "Création d'une API sécurisée pour une application d'avis gastronomiques, avec un système de login. Les utilisateurs peuvent y ajouter leur produit favori grâce à un formulaire, ce dernier est modifiable par la suite, il est aussi de liker / disliker les autres produits ",
        richDescEN:
            'Creation of a secure API for a food review application, with a login system. Users can add their favourite product thanks to a form, which can be modified afterwards, and they can also like / dislike other products',
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
        nameFR: 'Projet OC 5 - Kanap',
        nameEN: 'Project OC 5 - Kanap',
        descFR: "Création de la partie dynamique du site d'e-commerce de Kanap",
        descEN: "Creation of the dynamic part of Kanap's e-commerce website",
        richDescFR:
            "Création de la partie dynamique du site d'e-commerce de Kanap, implémentation du choix du coloris et de la quantité sur la fiche et création du panier, avec possibilité de supprimer un produit, modifier son coloris ou la quantité désirée, et calcul du coût total",
        richDescEN:
            "Creation of the dynamic part of Kanap's e-commerce site, implementation of the choice of colour and quantity on the form and creation of the shopping cart, with the possibility of deleting a product, modifying its colour or the desired quantity, and calculation of the total cost",
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
        nameFR: 'Projet OC 4 - La Chouette Agence',
        nameEN: 'Project OC 4 - La Chouette Agence',
        descFR: "Optimisation de l'accessibilité et du SEO",
        descEN: 'Accessibility and SEO optimisation',
        richDescFR: null,
        richDescEN: null,
        pathBanner: chouetteagenceBanner,
        urlGithub: 'https://github.com/yernauxalex/YERNAUXAlexis_4_16112021',
        urlHost: 'https://yernauxalex.github.io/YERNAUXAlexis_4_16112021/',
        hostBy: 'GithubPages',
        frontend: true,
        backend: false,
        tech: [{ name: 'Lighthouse' }],
        type: 'OC'
    },
    {
        id: 7,
        nameFR: 'Projet OC 3 - OhMyFood',
        nameEN: 'Project OC 3 - OhMyFood',
        descFR: "Intégration et création d'animations CSS pour un restaurant",
        descEN: 'Integration and creation of CSS animations for a restaurant',
        richDescFR: null,
        richDescEN: null,
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
