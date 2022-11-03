<template>
  <div class="commonLoader">
    <CircleLoader
      class="loader"
      :loading="true"
      color="#b549c9"
      :size="size"
      sizeUnit="px"
    />
  </div>
</template>

<script>
import { CircleLoader } from '@saeris/vue-spinners';

export default {
  name: 'CommonLoader',
  components: {
    CircleLoader
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 50
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.commonLoader {
  display flex
  justify-content center
}
.loader {

}
</style>
