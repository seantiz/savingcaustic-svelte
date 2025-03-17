# Build Questions Moving Forward (March 2025)
This is to try and save more time. Just some items to decide on ahead of building the middle and frontend, but don't let these questions rob us of any of the fun of just throwing things together.

## Svelte 4 or 5?
Right now we're using Svelte 4 and you did mention you like the compiler-centric approach - Svelte 4 exemplifies that approach. I love it but it raises concerns about long-term support if code stops working. The Svelte ecosystem has already moved onto Svelte 5, including some third-party libraries we may want to make use of in the future.

There are also serious hidden concerns about Svelte 4 sometimes working off stale data (which Svelte 5 signals is meant to address). In a DAW that's heavy on event-management - that's a real concern where Svelte 5 may be the better answer.

## What Should Manage the Web View + Touch Layers?
I didn't include it in the diagram but I'd consider adding either Capacitor.js or Tauri to handle UI scaling for all devices (desktop and mobile). Capacitor would be more lightweight than Tauri.

Alternatively, in a pure web app setup (just Svelte + Kit) there's [Svelte Gestures library](https://github.com/Rezi/svelte-gestures).

### Should Sveltekit Handle the Routing?
I have a lot of love for Sveltekit and use it all the time but it's a file-base router for evaluating different `+page.svelte` routes at the end of the day. On the plus side, it also comes with a great number of preprocessing tasks like bundling and serving static files. So maybe Sveltekit IS what we're looking for.

On the flipside, in `adapter-static` mode we're only using one `+page.svelte` in the browser client. SK could be overkill.

There are alternative mini routers like [Svelte Tiny Router](https://github.com/notnotsamuel/svelte-tiny-router) where we'd just build the web app frontend with:

1. Single `App.svelte` parent component as the entry-point
2. All modules + child `.svelte` component configuration is handled by the tiny router
