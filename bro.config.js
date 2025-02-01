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
    "edateam": {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "new-edateam.api": "http://5.35.81.22/api/",
    "new-edateam.images": "http://5.35.81.22/",
    "new-edateam.auth": "http://5.35.81.22/auth/api",
  },
};
