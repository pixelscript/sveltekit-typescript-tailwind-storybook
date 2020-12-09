# svelte/kit + typescript + tailwind + storybook

A baked version of [babichjacob/svelte-add-tailwindcss](https://github.com/babichjacob/svelte-add-tailwindcss) combined with [jerriclynsjohn/svelte-storybook-tailwind](https://github.com/jerriclynsjohn/svelte-storybook-tailwind)

```bash
// Quickstart

npx degit pixelscript/sveltekit-typescript-tailwind-storybook my-svelte-project
cd my-svelte-project

# important to do - npm ic - otherwise you'll get root.js: NOT_FOUND error
npm ic
npm run dev
npm run stories
```

## Building

Svelte apps are built with _adapters_, which optimise your project for deployment to different environments, like [Begin](https://begin.com), [Netlify](https://www.netlify.com), [Vercel](https://vercel.com) and so on. (You can also create your own adapter — instructions TODO.)

By default, `npm run build` will generate a Node app that you can run with `node build`. To use a different adapter, install it and update your `svelte.config.js` accordingly. The following official adapters are available:

- [@sveltejs/adapter-node](https://github.com/sveltejs/kit/tree/master/packages/adapter-node)
- [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
- [@sveltejs/adapter-netlify](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)
- ...more soon
