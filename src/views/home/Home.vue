<template>
  <div>
   
    <!--头部-->
    <top></top>
    
    <!--搜索-->
    
  </div>
</template>

<script>
import top from "../../components/home/Top";

export default {
  data() {
    return {};
  },
  components: {
    top,
  },
  methods: {
    getLocation() {
     
      this.$api.getScenic('火锅').then(res => {
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