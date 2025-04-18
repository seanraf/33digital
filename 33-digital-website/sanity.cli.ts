import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'cms-33digital', // Use new valid hostname
  api: {
    projectId: 'kmyx8122',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
