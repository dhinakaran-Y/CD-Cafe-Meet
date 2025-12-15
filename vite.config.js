import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
   server:{
    host:true
  },
  build: {
    rollupOptions: {
      input: ["index.html", "about.html", "menu.html" , "meeting.html"],
    },
  },
});