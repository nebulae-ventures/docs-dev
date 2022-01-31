module.exports = {
  mySidebar: [
    'home',
    'glossaire',
    {
      type: 'category',
      label: 'Dev',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Ressources',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'dev/ressources/contracts',
            },
          ]
        },
        {
          type: 'category',
          label: 'Débutant',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Les outils de base',
              id: 'dev/beginners/installation-des-outils',
            },
            {
              type: 'doc',
              label: 'Première interaction avec un smart contract',
              id: 'dev/beginners/premiere-interaction-smart-contract',
            },
          ]
        },
        {
          type: 'category',
          label: 'Expert',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'dev/advanced/tuto',
            },
          ]
        },
        {
          type: 'category',
          label: 'Smart contracts',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'dev/smart-contracts/outils-de-base',
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'concepts/subnet',
        },
        {
          type: 'doc',
          id: 'concepts/evm',
        },
      ],
    },
  ],
};