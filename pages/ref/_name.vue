<template>
  <div class="box">
    <CommonLoader />
  </div>
</template>

<script>
import CommonLoader from '~/components/CommonLoader.vue'
import referral from '~/lib/LS/referral'

export default {
  name: 'FromReferral',
  components: { CommonLoader },
  layout: 'base',
  mounted() {
    referral.set(this.$route.params.name)
    this.$router.push('/')
  }
}
</script>

<style lang="stylus" scoped>
.box {
  display flex
  width 100vw
  height 100vh
  justify-content center
  align-items center
}
</style>
