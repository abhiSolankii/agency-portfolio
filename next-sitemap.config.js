module.exports = {
  siteUrl: "https://bytenobs.com",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://bytenobs.com/server-sitemap.xml"],
  },
};
