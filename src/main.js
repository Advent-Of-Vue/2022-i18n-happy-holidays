import { createApp } from 'vue'
import App from './App.vue'
import './base.css'
import 'uno.css'

import { createI18n } from 'vue-i18n'
/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  // This could be ingested from the user's current locale.
  locale: 'en',

  // The messages imported by Vite's virtual module.
  messages,

  // This is a spot that could be cleaned up and possibly derived!
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      },
    },
    'ja-JP': {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      },
    },
    de: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      },
    },
  },
})

const app = createApp(App)

// i18n is a plugin that leverages provide/inject under the hood.
app.use(i18n)

app.mount('#app')
