<template>
  <div>
   
    <!--头部-->
    <top></top>
    
    <!--侧边导航和轮播图-->
    <slideshow></slideshow>
  </div>
</template>

<script>
import top from "../../components/home/Top";
import slideshow from "../../components/home/Slideshow";
export default {
  data() {
    return {};
  },
  components: {
    top,
    slideshow
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