/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'http://localhost:7000', // Replace with your actual domain
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*'], // Optional: exclude paths
  sitemapSize: 7000,
};
