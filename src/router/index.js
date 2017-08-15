import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import guide from '@/components/guide';
import game from '@/components/game';
import tip from '@/components/tip';
import pass from '@/components/pass';
import failure from '@/components/failure';
import success from '@/components/success';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide,
    },
    {
      path: '/game',
      name: 'game',
      component: game,
    },
    {
      path: '/tip',
      name: 'tip',
      component: tip,
    },
    {
      path: '/pass',
      name: 'pass',
      component: pass,
    },
    {
      path: '/failure',
      name: 'failure',
      component: failure,
    },
    {
      path: '/success',
      name: 'success',
      component: success,
    },
  ],
});
