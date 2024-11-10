const fs = require("fs");
const path = require("path");

// Base URL of your website
const BASE_URL = "https://www.skyautomobiles.in";

// Directory to scan (app directory in src folder)
const PAGES_DIR = path.join(__dirname, "src", "app");

// Helper function to recursively scan folders and generate routes
function getRoutes(dir, baseUrl = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      const routePath = `${baseUrl}/${entry.name}`;
      routes.push(routePath); // Add the folder as a route

      // Recursively go deeper if needed
      routes = routes.concat(getRoutes(path.join(dir, entry.name), routePath));
    }
  });

  return routes;
}

// Get all routes
const routes = getRoutes(PAGES_DIR).map((route) => {
  return `${BASE_URL}${route.replace(/\\/g, "/")}`;
});

// Generate sitemap XML content
const sitemapContent = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map((route) => {
        return `
          <url>
            <loc>${route}</loc>
          </url>
        `;
      })
      .join("")}
  </urlset>
`;

// Write sitemap to public directory
fs.writeFileSync(
  path.join(__dirname, "public", "sitemap.xml"),
  sitemapContent.trim()
);

console.log("Sitemap generated at /public/sitemap.xml");
