
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/margaux/ProjetsTech/SitePerso/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/margaux/ProjetsTech/SitePerso/src/pages/404.js")),
  "component---src-pages-articles-js": preferDefault(require("/Users/margaux/ProjetsTech/SitePerso/src/pages/Articles.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/margaux/ProjetsTech/SitePerso/src/pages/index.js")),
  "component---src-pages-portfolio-js": preferDefault(require("/Users/margaux/ProjetsTech/SitePerso/src/pages/Portfolio.js"))
}

