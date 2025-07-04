/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://creativehomes.ae', // Replace with your actual domain
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*'], // Optional: exclude paths
  sitemapSize: 7000,
};
