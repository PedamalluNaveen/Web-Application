export default {
    dev: {  //mock
      '/api/': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
      '/be/': { //backend
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { '^/be': '' },
      },
    },
    test: {
      '/api/': {
        target: 'https://preview.pro.ant.design',
        changeOrigin: true,
        pathRewrite: { '^': '' },
      },
    },
    pre: {
      '/api/': {
        target: 'your pre url',
        changeOrigin: true,
        pathRewrite: { '^': '' },
      },
    },
  };

  
  
  
  