const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        additionalData: `
          @import "@/sass/styles.scss";
        `,
      },
    },
  },

  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Catalog | Vue.js test task',
    },
    bin: {
      entry: 'src/main.js',
      title: 'Bin | Vue.js test task',
    },
  },
});
