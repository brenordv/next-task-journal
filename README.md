# Why NextJs
- **Automatic Image Optimization** with ```Image``` component.
- **Static File Serving**: If you add a picture to public/me.png, the following code will get to the picture:
```typescript jsx
Import Image from 'next/image'
function Avatar() {  return <Image src="me.png" alt="me" width="64" height="64" />
export default Avatar
```
- **Automatic Code Splitting**: Pages are basic features of NextJS and they are rendered with simply the libraries and JavaScript that they need no more. Rather than creating one single JavaScript record containing all the application code, the application is separated naturally by Next.js in a few distinct assets.
- **Meta Tags**: The Head component is made to add them and it's accessible directly as a feature of Next.js. You need to import Head from 'next/head' and glue the accompanying code in the render component. Everything inside this tag is being moved to the <head> of the site. There is a key trait characterized on each component that forestalls adding the same metatags on numerous occasions and rather overwrites them.
- **Routing**: Quite possibly the most fundamental feature of NextJs of the two sites and SPA is exploring from one subpage then onto the next. If you code in React, you need to utilize React switch or other comparative arrangements.
- **Lazy loading**

## Data Fetching/pre-rendering
> References: 
> - https://nextjs.org/docs/basic-features/pages#static-generation-recommended
> - https://nextjs.org/docs/basic-features/data-fetching/get-static-props
> - https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
> - https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

- getStaticProps: When your **page** depends on external **data**.
- getStaticPaths: When your **routes** depends on external **data**.
- getServerSideProps: Like getStaticProps, but on the serverside. Here you can use stuff that works on NodeJs.



## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
