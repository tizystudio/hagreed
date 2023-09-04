const hagreed = new window.Hagreed.default("insert-your-token-here", {
    lang: 'fr', // Affiche la langue par défaut en français
    forceLang: false // On ne force pas la langue française si l'utilisateur à sa langue de navigateur en anglais
});

hagreed.cookiesList = [
    {
        id: "ga", // Renseignez ici un identifiant unique de cookie, peu importe ce que c’est tant que ça ne contient que des caractères alphanumériques et que c’est unique
        name: "Google Analytics", // Renseignez ici le nom du cookie ou du service en question, c’est un label qui sera affiché au client et qui doit être clair et explicite
        description: "Nous utilisons ce genre de cookie pour blablabla et c’est utile", // Ce champ est facultatif et permet d’expliquer en quoi sert ce cookie.
        link: "https://marketingplatform.google.com/about/analytics/terms/fr/", // Ce champ est facultatif et permet de rediriger l’utilisateur vers la politique du service en question
        category: window.Hagreed.CategoryEnum.NECESSARY // Déterminez de quelle nature est ce cookie : NECESSARY ? STATISTIQUES ? MARKETING ? DIVERS ? PREFERENCES ?
    },
];

hagreed.consentsFormList = [{
    id: 'contact', // L'id du formulaire
    title: 'Finalité des traitements 😊', // Le titre
    description: 'Les informations recueillies sont enregistrées ...', // La description
    purposes: [
        {
            slug: 'mailjet', // Le slug d'une finalité
            name: 'Les informations recueillies sont enregistrées dans un fichier informatisé par Tizy pour la gestion des demandes de contact.', // Le nom de la finalité
            mandatory: true, // Si elle est facultative ou obligatoire
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="#">Test de lien</a>', // La description
        }, {
            slug: 'facebook',
            name: 'Les informations recueillies sont enregistrées dans un fichier informatisé par Tizy pour la gestion des demandes de contact.',
            mandatory: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        }
    ]
}];

hagreed.timeout = 5000;
hagreed.init();