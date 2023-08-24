import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/index'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {dashboardTool} from '@sanity/dashboard'

export default defineConfig({
  name: 'default',
  title: 'vipin-portfolio',

  projectId: '42e9awfe',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    visionTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: '711ce701-d9c6-4b59-a463-4472a087839a',
              buildHookId: 'https://api.netlify.com/build_hooks/64e72f4386de4d644e3742da',
              name: 'silly-piroshki-ba97d3',
            },
            {
              title: 'Sanity Studio',
              apiId: '711ce701-d9c6-4b59-a463-4472a087839a',
              buildHookId: 'https://api.netlify.com/build_hooks/64e72f4386de4d644e3742da',
              name: 'silly-piroshki-ba97d3',
              url: 'https://silly-piroshki-ba97d3.netlify.app',
            },
          ],
        }),
      ],
    }),
  ],
})

