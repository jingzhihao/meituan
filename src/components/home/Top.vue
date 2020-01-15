<template>
  <div class="cont">
    <div class="font">
      <div>
        <Icon type="md-pin" />
        {{arr.city}}
      </div>
      <div>
        <span class="address">切换地址</span>
      </div>
      <div>
        <span>
          [
          <a class="city_guss">新津县</a>
          <a class="city_guss">崇州</a>
          <a class="city_guss">彭州</a> ]
        </span>
      </div>
      <div>
        <span class="login">立即登录</span>
      </div>
      <div>
        <span>注册</span>
      </div>
    </div>

    <div class="fwt">
      <div class="mymt" @mouseenter="addClass(1)" @mouseleave="delClass">
        <span class="fwt_name">我的美团</span>
        <div class="hidden" v-show="num===1">
          <div>我的订单</div>
          <div>我的收藏</div>
          <div>抵用券</div>
          <div>账户设置</div>
        </div>
      </div>
      <div>
        <span>手机App</span>
      </div>
      <div class="mymt" @mouseenter="addClass(2)" @mouseleave="delClass">
        <span class="fwt_name">商家中心</span>
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
      <div class="mymt" @mouseenter="addClass(3)" @mouseleave="delClass">
        <span class="fwt_name">美团规则</span>
        <div class="hidden" v-show="num===3">
          <div>规则中心</div>
          <div>规则目录</div>
          <div>规则评议院</div>
        </div>
      </div>
      <div class="mymt" @mouseenter="addClass(4)" @mouseleave="delClass">
        <span class="fwt_name">美团网址</span>
        <div class="hotel">
          <div style="width:270px">
            <span>酒店旅游</span>
            <div class="font_hontel">
              <div v-for="(item,index) in hotel" :key="index">{{item}}</div>
            </div>
          </div>
          <div style="width:180px">
            <span>吃美食</span>
            <div class="font_cate">
              <div v-for="(item,index) in cate" :key="index">{{item}}</div>
            </div>
          </div>
          <div style="width:100px">
            <span>看电影</span>
            <div class="font_movie">
              <div v-for="(item,index) in movie" :key="index">{{item}}</div>
            </div>
          </div>
          <div>
            <span>手机App</span>
            <div class="ig">
              <img
                src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                alt
              />
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                alt
              />
              <img
                src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                alt
              />
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                alt
              />
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                alt
              />
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
  width: 1115px;
  margin: 0 auto;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  color: rgb(102, 102, 102);
  a:hover {
    color: rgb(253, 140, 0);
  }
  span:hover {
    color: rgb(253, 140, 0);
  }
}
.font {
  display: flex;
  cursor: pointer;
  .login {
    color: rgb(253, 140, 0);
    margin: 0 20px;
  }
  .city_guss {
    color: rgb(178, 165, 193);
    margin: 0 5px;
  }
  .address {
    margin: 0 5px;
  }
}
.fwt {
  display: flex;
  text-align: center;
  cursor: pointer;
  span {
    padding: 12px 15px;
  }
  .fwt_name:hover {
    box-shadow: 0px 0px 5px rgb(178, 165, 193);
  }
  .hidden {
    background: rgb(248, 248, 248);
    position: absolute;
    text-align: center;
    box-shadow: 0px 3px 5px 0px rgb(178, 165, 193);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-sizing: border-box;
    > div {
      padding: 8px 15px;
    }
  }
}
.hotel {
    position: absolute;
    left: 30px;
    top: 35px;
    box-shadow: 0px 3px 5px 0px rgb(178, 165, 193);
    width: 1148px;
    display: flex;
    //justify-content: space-around;
    background: rgb(248, 248, 248);
    img{
      height: 60px;
    }
    span{
      font-size: 16px;
      font-weight: 700;
      color: black;
    }
  }
</style>