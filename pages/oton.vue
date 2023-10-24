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
    Cookies.set('otonUser', 527);
    Cookies.set('accountEmail', this.$route.query.email);
    window.location.assign('/');
  },
};
</script>
