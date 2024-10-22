import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    AIM_BASEURL: 'https://aim.aegix.global',
    USERNAME: 'system@aegixglobal.com',
    PASSWORD: 'pWNpm9)~.e$c5#5'
  },
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})