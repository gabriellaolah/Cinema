import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemaTypes' //  Import the schemaTypes array

export default defineConfig({
  name: 'default',
  title: 'Cinema Sanity',

  projectId: '4ggeo8s8',  // Replace with actual project ID
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes, //  Use schemaTypes array
  },
});
