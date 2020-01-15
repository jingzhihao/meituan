<template>
  <div>
   
    <!--头部-->
    <top></top>
     <!-- <i class="iconfont icon-jiudian">1</i> -->
    <!--搜索-->
    <!-- <search></search> -->
  </div>
</template>

<script>
import top from "../../components/home/Top";
import search from "../../components/home/Search"
export default {
  data() {
    return {};
  },
  components: {
    top,
    search
  },
  methods: {
    getLocation() {
      let onj = {
        input: "火锅",
        name: "成都"
      };
      this.$api.Recommendation(onj).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    //this.getLocation()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>