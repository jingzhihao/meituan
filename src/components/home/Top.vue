<template>
  <div class="cont">
    <div class="font">
      <div>
        <Icon type="md-pin" />
        {{arr.city}}
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
      <div class="mymt" :class="{bg : num===1}" @mouseenter="addClass(1)" @mouseleave="delClass">
        <span>我的美团</span>
        <div class="hidden" v-show="num===1">
          <div>我的订单</div>
          <div>我的收藏</div>
          <div>抵用券</div>
          <div>账户设置</div>
        </div>
      </div>
      <div>
        <span>我的美团</span>
      </div>
      <div class="mymt" :class="{bg : num===2}" @mouseenter="addClass(2)" @mouseleave="delClass">
        <span>商家中心</span>
        <div class="hidden" v-show="num===2">
          <div>美团餐饮商户中心</div>
          <div>登录商家中心</div>
          <div>美团智能收银</div>
          <div>我想合作</div>
          <div>手机免费开店</div>
          <div>餐饮代理商招募</div>
          <div>商家申请开票</div>
          <div>免费合作美团排队</div>
        </div>
      </div>
      <div class="mymt" :class="{bg : num===3}" @mouseenter="addClass(3)" @mouseleave="delClass">
        <span>美团规则</span>
        <div class="hidden" v-show="num===3">
          <div>规则中心</div>
          <div>规则目录</div>
          <div>规则评议院</div>
        </div>
      </div>
      <div class="mymt" :class="{bg : num===4}" @mouseenter="addClass(4)" @mouseleave="delClass">
        <span>美团网址</span>
        <div class="hotel" v-show="num===4">
          <div class="name">
            <span>酒店旅游</span>
            <div class="font_hontel">
              <div v-for="(item,index) in hotel" :key="index">
                <span>{{item}}</span>
              </div>
            </div>
          </div>
          <div class="name">
            <span>吃美食</span>
            <div class="font_cate">
              <div v-for="(item,index) in cate" :key="index">
                <span>{{item}}</span>
              </div>
            </div>
          </div>
          <div class="name">
            <span>看电影</span>
            <div class="font_movie">
              <div v-for="(item,index) in movie" :key="index">
                <span>{{item}}</span>
              </div>
            </div>
          </div>
          <div class="name">
            <span>手机App</span>
            <div class="font_hontel">
              <div v-for="(item,index) in app" :key="index">
                <span>{{item}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: {},
      num: "",
      hotel: [
        "国际机票",
        "火车票",
        "民宿",
        "经济型酒店",
        "主题酒店",
        "商务酒店",
        "公寓",
        "豪华酒店",
        "客栈",
        "青年旅社",
        "度假酒店",
        "别墅",
        "农家院"
      ],
      cate: ["烤鱼", "特色小吃", "烧烤", "自助餐", "火锅"],
      movie: [
        "热映电影",
        "热门影院",
        "热映电影口碑榜",
        "最受期待电影",
        "国内票房榜",
        "北美票房榜",
        "电影排行榜"
      ],
      app: ["美团app", "外卖app", "民宿app", "点评app", "猫眼app"]
    };
  },
  components: {},
  methods: {
    //delClass
    delClass() {
      this.num = 0;
    },
    //addClass
    addClass(c) {
      this.num = c;
    },
    //获取定位
    getLocation() {
      this.$api.getLocation().then(res => {
        this.arr = eval("(" + res.data + ")");
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
  color: rgb(153, 153, 153);
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

.hidden {
  //border: 1px solid red;
  background: rgb(248, 248, 248);
  position: absolute;
  div {
    text-align: center;
    line-height: 30px;
  }
}
.hotel {
  position: absolute;
  left:  0;
  //top: 100px;
  border: 1px solid red;
  width: 1000px;
  display: flex;
  justify-content: space-around;
  background: rgb(248, 248, 248);
}
.name {
  margin: 40px 0;
  span {
    font-size: 12px;
    font-weight: 500;
    color: black;
  }
}
.font_hontel {
  width: 200px;
  //border: 1px solid red;
  margin: 20px -50px;
  div {
    float: left;
    width: 65px;
    height: 30px;
    border: 1px solid red;
  }
}
.font_movie{
  div {
   height: 30px;
   border: 1px solid red;
  }
}
</style>