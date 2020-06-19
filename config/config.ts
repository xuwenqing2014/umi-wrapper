import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      wrappers: ['@/wrappers/auth'],
    },
    { path: '/login', component: '@/pages/login' },
  ],
  dva: {},
  antd: {},
  define: {
    'process.env.AA': 'dev',
  },
});
