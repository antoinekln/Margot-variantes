// Réglages du site : le seul fichier à modifier pour les contacts, les formulaires et le rétroplanning.
window.SITE = {
  // Adresse e-mail de l'atelier (affichée sur le site et utilisée si aucun service de formulaire n'est configuré).
  email: "contact@exemple.fr",

  // Lien Instagram.
  instagram: "https://www.instagram.com/atelierbaujard/",

  // URL du service qui reçoit les formulaires (Formspree, Web3Forms, Getform...).
  // Exemple Formspree : "https://formspree.io/f/xxxxxxxx"
  // Laisser vide pour que le formulaire ouvre le logiciel de messagerie du visiteur (mailto).
  formEndpoint: "",

  // Même chose pour la newsletter. Si vide, la même adresse que ci-dessus est utilisée.
  newsletterEndpoint: "",

  // Rétroplanning : "months" = nombre de mois AVANT la date du mariage.
  // Ces valeurs sont des repères de départ. À remplacer par les vrais délais de l'atelier.
  planning: [
    { label: "Premier rendez-vous", months: 10, text: "Rencontre à l’atelier ou en visio, premières idées et inspirations." },
    { label: "Dessin, matières et devis", months: 9, text: "Croquis, choix des tissus et des dentelles, devis détaillé." },
    { label: "La toile", months: 7, text: "Premier prototype dans un tissu test, ajusté sur vous." },
    { label: "Premier essayage", months: 5, text: "Contrôle de la coupe sur la pièce en cours de confection." },
    { label: "Essayage d’ajustement", months: 3, text: "Affinage des proportions, placement des broderies." },
    { label: "Dernier essayage et livraison", months: 1, text: "Retouches éventuelles puis remise de la robe." }
  ],

  // En dessous de ce nombre de mois avant le mariage, le rétroplanning invite à contacter l'atelier.
  shortDelayMonths: 6
};
