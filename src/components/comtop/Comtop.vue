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
        <div>
          <Input
            v-model="value1"
            @on-focus="autofocus"
            @on-blur="lose"
            placeholder="搜索商家或地点"
            style="width:400px"
          />
          <div class="input" v-show="flag">
            <span class="input-hot">热门搜索</span>
            <div class="list" v-for="item in list" :key="item.id">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
        <div>
          <Button type="warning" style="width:70px">
            <i class="iconfont icon-sousuo"></i>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      flag: false,
      value1: ""
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
.header {
  width: 70%;
  margin: 0 22px;
  //border: 1px solid red;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.warning {
  display: flex;
}
.img {
  width: 120px;
  height: 40px;
}

.input {
  position: absolute;
  background: white;
  //height: 60px;
  width: 400px;
  box-shadow: 0 0 2px rgb(178, 165, 193);
  //border: 1px solid red;
  .input-hot {
    margin: 2px 5px;
    font-size: 12px;
    font-weight: 700;
    color: rgb(102, 102, 102);
  }
  .list {
    margin: 0px 5px;
    span {
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>