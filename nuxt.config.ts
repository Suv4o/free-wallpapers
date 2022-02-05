import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    build: {
        transpile: ['gsap'],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        }
    },

    css: ['~/assets/css/tailwind.css'],

    publicRuntimeConfig: {
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
        GITHUB_USERNAME: process.env.GITHUB_USERNAME,
        GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY,
        GITHUB_GRAPHQL_URL: process.env.GITHUB_GRAPHQL_URL
    },

    typescript: {
        strict: true
    }
})
