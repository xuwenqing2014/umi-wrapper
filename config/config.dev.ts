import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  dva: {},
  antd: {},
  define: {
    'process.env.AA': 'dev'
  },
  chainWebpack(memo, { env }) {
    
    const CopyThenAutoGit = require('copy-then-auto-git');
    memo.plugin('copyThenAutoGit')
      .use(CopyThenAutoGit, [{
        branch: 'master', //分支名称
        version: '', //打包版本
        assetsDir: 'publish/www/', //移动复制打包文件至XXX
        gitDir: 'publish',
        inculdes: [/^.*$/]
      }]);
  }
});
