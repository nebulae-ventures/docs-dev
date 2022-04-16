module.exports = {
  mySidebar: [
    "home",
    "glossaire",
    {
      type: "category",
      label: "Dev",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Ressources",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "dev/ressources/contracts",
            },
            {
              type: "doc",
              id: "dev/ressources/contractsOld",
            },
            {
              type: "doc",
              id: "dev/ressources/rpc",
            },
          ],
        },
        {
          type: 'category',
          label: 'Débutant',
          collapsed: false,
          items: [
            {
              type: "doc",
              label: "Les outils de base",
              id: "dev/beginners/installation-des-outils",
            },
            {
              type: "doc",
              label: "Première interaction avec un smart contract",
              id: "dev/beginners/premiere-interaction-smart-contract",
            },
            {
              type: "doc",
              label: "Créez votre premier token ERC20",
              id: "dev/beginners/creer-token-erc20",
            },
          ],
        },
        {
          type: "category",
          label: "Expert",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "dev/advanced/tuto",
            },
          ],
        },
        {
          type: "category",
          label: "Smart contracts",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "dev/smart-contracts/outils-de-base",
            },
            {
              type: "doc",
              label: "Introduction à Hardhat",
              id: "dev/smart-contracts/introduction-a-hardhat",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "concepts/subnet",
        },
        {
          type: "doc",
          id: "concepts/evm",
        },
        {
          type: 'doc',
          id: 'concepts/sandwich',
        },
      ],
    },
  ],
};
