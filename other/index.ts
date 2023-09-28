// import { Elysia } from "elysia";
// const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

const server = Bun.serve({
  // alternative...
  // process.env.PORT
  port: Bun.env.PORT || 5000,
  fetch(req) {
    // return new Response("Hellooooo Nurse!");

    // Simple routes
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home 🏡");
    if (url.pathname === "/blog") return new Response("Blog 📰");
    return new Response("404! ❌");
  },
});

console.log(`🦊 Elysia @ ${server.port}`);
