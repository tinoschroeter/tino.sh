
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/tino/privat/tino.sh/blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/tino/privat/tino.sh/blog/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/tino/privat/tino.sh/blog/src/pages/index.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/tino/privat/tino.sh/blog/src/templates/blog-post.js"))
}

