<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    getLocation() {
      let onj = {
        keyword:'储缘蛋糕',
        name:'成都'
      }
      this.$api.shopParticulars(onj).then(res => {
        console.log(res);
      })
    }
  },
  mounted() {
    this.getLocation()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>