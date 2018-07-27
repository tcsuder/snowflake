module.exports = {
  exportPathMap: function() {
    return {
      assetPrefix: process.env.NODE_ENV === 'production' ? '/snowflake' : '',
      '/': { page: '/' }
    }
  }
}
