/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars are explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  blogSidebar: [
    "guides/overview"
  ],

  docsSidebar: [
    "nitro/overview",
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        "nitro/key-concepts",
        "nitro/architecture",
        "nitro/installation",
        "nitro/using-nitro",
      ],
    },
    "guides/troubleshooting",
  ],

  apiSidebar: [
    "api/overview",
    {
      type: "category",
      label: "Endpoints",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "api",
        },
      ],
    },
  ],

  communitySidebar: [
    "community/support",
    "community/contribuiting",
    "community/coc",
    "community/changelog"
  ]
};

module.exports = sidebars;
