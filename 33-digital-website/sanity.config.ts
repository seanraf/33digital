import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input' // Import the code input plugin
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: '33 Digital Website',

  projectId: 'kmyx8122',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput()], // Add codeInput() to the plugins array

  schema: {
    types: schemaTypes,
  },
})
