# Free wallpaper images to enrich your desktop screens

This is a little project using Nuxt 3 with TypeScript, Pinia, Tailwindcss, Cloudinary and Tailwind CSS. We use GitHub GraphQL API to fetch the images from this public repositiry [link](https://github.com/Suv4o/wallpaper-images).

Feel free to clone the repository and start exploring the source code.

## Tech stack used in this project:

#### Frontend:

-   Nuxt 3
-   Pinia
-   Tailwind CSS

#### Backend:

-   Cloudinary
-   Nuxt Server/API

### Language used:

-   TypeScript

## Getting Started is Simple

Before you start you will need to create an .env file in the root of the project with the folowing variables:

```
GITHUB_TOKEN=<your-github-token>
GITHUB_USERNAME=<your-github-username>
GITHUB_REPOSITORY=<your-github-repository>
GITHUB_GRAPHQL_URL=<your-github-graphgl-url>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
CLOUDINARY_FOLDER_NAME=<your-cloudinary-folder-name>
```

## Setup

### Install dependencies

```bash
yarn install
```

### Serve at localhost:3000

Start the development server on http://localhost:3000

```bash
yarn dev
```

### Building for Production

Build the application for production:

```bash
yarn build
```
