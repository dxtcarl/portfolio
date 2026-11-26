// Builds a URL for anything in /public that works on both hosts:
//   Vercel / custom domain  -> '/'          => /shots/rockygo-home.webp
//   GitHub Pages subpath    -> '/portfolio/' => /portfolio/shots/rockygo-home.webp
// Always pass the path as written in content.js ('/shots/x.webp').
export const asset = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`
