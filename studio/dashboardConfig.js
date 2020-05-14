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
                  buildHookId: '5ebd9f06ed34be410ae2fff5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-900-studio',
                  apiId: '5f5b7acc-d459-4f56-a9fb-9906b4207392'
                },
                {
                  buildHookId: '5ebd9f06482f2b1be91bb983',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-900',
                  apiId: '7299a90c-c238-41a4-ac4a-19475d0895c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evenwestvang/sanity-gatsby-portfolio-900',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-900.netlify.app',
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
