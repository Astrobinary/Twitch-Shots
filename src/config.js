require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Twitch Shots',
    description: 'Twitch Shots',
    head: {
      titleTemplate: 'Twitch Shots: %s',
      meta: [
        {name: 'description', content: 'Awesome webapp used to watch your favorite oddshots from Twitch.tv'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Twitch Shots'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Twitch Shots'},
        {property: 'og:description', content: 'Twitch Shots'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@_BrandonPadilla'},
        {property: 'og:creator', content: '@_BrandonPadilla'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
