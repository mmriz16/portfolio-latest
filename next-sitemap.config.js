/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://me.termicons.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/mmriz16'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://me.termicons.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority for important pages
    const customPriorities = {
      '/': 1.0,
      '/mmriz16': 1.0,
      '/pages/abouts': 0.8,
      '/pages/project/list': 0.8,
      '/pages/articles/list': 0.7,
      '/pages/uses': 0.6,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: customPriorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};