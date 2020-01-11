<template>
  <div>
    <!--搜索-->
    <div class="header">
      <div class="header-title">
        <a>
          <img class="img" src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
        </a>
      </div>
      <div class="warning">
          <div><Input v-model="value1" size="large" placeholder="搜索商家或地点" style="width:400px"/></div>
          <div><Button size="large" type="warning">搜索</Button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value1:''
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.header{
    width: 70%;
    margin: 0 22px;
    //border: 1px solid red;
    height: 100px;
    display: flex;
    justify-content: space-around ;
    align-items: center;
}
.warning{
    display: flex
}
.img{
    width: 120px;
    height: 40px;
}
</style>