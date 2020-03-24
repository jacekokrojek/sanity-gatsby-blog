export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e79a51d0035170675918b2b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-b78rpsh2',
                  apiId: 'a1207b75-ca78-48d8-ad25-f0c39da97d95'
                },
                {
                  buildHookId: '5e79a51d00351774a29187f3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-i6qwx98d',
                  apiId: '23d5c9b0-b897-4e68-9db4-dc81b4874f2d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jacekokrojek/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-i6qwx98d.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
