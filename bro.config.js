const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    "new-edateam.main": "/new-edateam",
    "new-edateam.recipe": "/recipe",
    "new-edateam.user": "/user",
    "new-edateam.add-recipe": "/add-recipe"
  },
  features: {
    "new-edateam": {
      "filters": {
        "on": true,
        "value": "true",
        "key": "filters"
      }
    }
  },
  config: {
    "new-edateam.api": "https://5.35.81.22/api/",
    "new-edateam.images": "https://5.35.81.22/",
    "new-edateam.auth": "https://5.35.81.22/auth/api",
  },
};
