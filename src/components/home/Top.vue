<template>
  <div class="cont">
    <div class="font">
      <div>
        <Icon type="md-pin" />{{arr.city}}
      </div>
      <div>
        <a class="a">切换地址</a>
      </div>
      <div>
        <a>[ 新津县 崇州 彭州 ]</a>
      </div>
      <div>
        <a>立即登录</a>
      </div>
      <div>
        <a>注册</a>
      </div>
    </div>
    <div class="bont"></div>
    <div class="fwt">
      <div>
        <a>我的美团</a>
      </div>
      <div>
        
      </div>
      <div>
        <a>手机App</a>
      </div>
      <div>
        <a>商家中心</a>
      </div>
      <div>
        <a>美团规则</a>
      </div>
      <div>
        <a>美团网址</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        arr:{}
    };
  },
  components: {},
  methods: {
    //获取定位
    getLocation() {
      this.$api.getLocation().then(res => {
          this.arr = eval("(" + res.data + ")")
        console.log(this.arr);
      });
    }
  },
  mounted() {
    this.getLocation();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.cont {
  height: 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 10px;
  color: rgb(68, 68, 68);
  a {
    color: rgb(68, 68, 68);
  }
}
.font {
  width: 23%;
  display: flex;
  justify-content: space-around;
  //border: 1px solid red;
}
.fwt {
  //border: 1px solid red;
  width: 30%;
  display: flex;
  justify-content: space-around;
}
.bont {
  width: 13%;
}
</style>