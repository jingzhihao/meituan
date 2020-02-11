<template>
  <div class="body">
    <!--头部-->
    <top></top>
    <!--侧边导航和轮播图-->
    <slideshow :menu="menu"></slideshow>
    <!--有格调-->
    <sty></sty>
    <!--底部-->
    <font></font>
  </div>
</template>

<script>
import top from "../../components/home/Top";
import slideshow from "../../components/home/Slideshow";
import sty from "../../components/home/Style";
export default {
  data() {
    return {
      menu: [],
      colors: [
        "#FF8200",
        "#FFB500",
        "#9B5E3E",
        "#FFB500",
        "#FF3D00",
        "#03A9F4",
        "#00BF96",
        "#00BF96",
        "#FF4081",
        "#FF4081",
        "#FF4081",
        "#03A9F4",
        "#00BF96",
        "#00BF96",
        "#03A9F4",
        "#00BF96"
      ]
    };
  },
  components: {
    top,
    slideshow,
    sty
  },
  methods: {
    //获取首页所有数据
    getMenu() {
      this.$api.getMenu().then(res => {
        //console.log(res);
        this.menu = res.data.menu;
        //console.log(this.arr);
        this.menu.map((item, index) => {
          this.colors.map((it, idx) => {
            if (index === idx) {
              item.color = it;
            }
          });
        });
        //console.log(this.arr);
      });
    },
    getLocation() {
      this.$api.getScenic("火锅").then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    //this.getLocation()
    this.getMenu();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>