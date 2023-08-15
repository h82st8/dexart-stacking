<template>
  <div class="home">
    <CommonLoader :size="80" />
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import CommonLoader from '~/components/CommonLoader.vue';

export default {
  name: 'AdminDexfarmPage',

  components: {
    CommonLoader,
  },

  mounted() {
    Cookies.set('atonUser', 527, { expires: new Date(process.env.NUXT_ENV_DEADLINE) });
    window.location.assign('/');
  },
};
</script>
