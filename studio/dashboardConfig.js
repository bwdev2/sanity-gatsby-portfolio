export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f498c903025497c59748c59',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-m2tohq5j',
                  apiId: '72630b1f-f173-4980-a707-d2df9e515db6'
                },
                {
                  buildHookId: '5f498c90281ab68ef55f5fdc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e2myhapc',
                  apiId: '500bf7b8-3698-408a-8dbd-54728b582fb2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bwdev2/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-e2myhapc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
