<template>
  <div class="classfys">
    <!-- 分类导航栏 -->
    <div class="navbar">
      <div class="allclassfy">
        <span>全部分类</span>
      </div>
      <!-- 导航栏具体内容 -->
      <div class="classfycont">
        <div
          class="classfymodel flex between"
          v-for="(item,index) in menu"
          :key="index"
          @mouseenter="changeFlag(item)"
          @mouseleave="changeFlags(1,item)"
        >
          <div class="modelleft flex">
            <i class="iconfont" :class="item.type" :style="{color:item.color}"></i>
            <div class="iname">{{item.name}}</div>
          </div>
          <div class="iicon">
            <Icon type="ios-arrow-forward" />
          </div>
        </div>
      </div>
      <!-- 隐藏的盒子 -->
      <div class="hiddencont" v-if="flag" @mouseenter="changeFlag('')" @mouseleave="changeFlags(0)">
        <div class="hcontent">
          <div class="hcontentmodel" v-for="item in menuchilds.child" :key="item.id">
            <!-- 标题 -->
            <div class="htitle flex between">
              <h4>{{item.title}}</h4>
              <div class="rightcont">
                <span>更多</span>
                <Icon type="ios-arrow-forward" />
              </div>
            </div>
            <!-- 内容 -->
            <div class="hmain flex">
              <div class="hmainmodel" v-for="item0 in item.child" :key="item0.id">
                <span>{{item0}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边轮播图盒子 -->
    <div class="rightbar">
      <!-- 右边顶上的导航栏 -->
      <div class="rightupbar">
        <div
          class="barmodel"
          v-for="(item,index) in bavcontent"
          :key="item.id"
          @mouseenter="changeS(index)"
          @mouseleave="changeF"
        >
          <span :style="{color:flags && num === index?item.color:'#222222'}">{{item.msg}}</span>
        </div>
      </div>
      <!-- 上半部分 -->
      <div class="upbar flex">
        <!-- 上半部轮播图 -->
        <Carousel v-model="value" loop class="upcarousel flex" :autoplay="true" trigger="hover">
          <CarouselItem v-for="item in images" :key="item.id">
            <div class="demo-carousel">
              <img :src="item" alt />
            </div>
          </CarouselItem>
        </Carousel>
        <!-- 休闲生活 -->
        <div class="lifes" v-if="showImg">
          <img src="//p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt />
        </div>
        <div class="lregister">
          <!-- 登录注册(未登录状态) -->
          <div class="defalut" v-if="users === ''">
            <!-- 默认头像 -->
            <div class="defaultimg">
              <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
            </div>
            <p class="pmsg">Hi！你好</p>
            <!-- 登录注册 -->
            <div class="btnlogin" @click="$goto('/register')">
              <span>注册</span>
            </div>
            <div class="btnlogin" @click="$goto('/login')">
              <span>立即登录</span>
            </div>
          </div>
          <!-- 登录状态下显示的用户信息(已登录状态) -->
          <div class="defalut login-after-info" v-else>
            <!-- 设置按钮 -->
            <div class="info-settings">
              <Icon type="md-settings" size="24" />
            </div>
            <!-- 登录后的默认头像 -->
            <div class="defaultimg">
              <img src=" //s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png" alt />
            </div>
            <!-- 昵称 -->
            <div class="login-nickname textalign">
              <span class="textover">{{users.username}}</span>
              <img src="../../assets/VIP.svg" alt />
            </div>
            <!-- 我的订单/我的收藏/抵用券 -->
            <div class="login-row-up flex">
              <div class="fn-item textalign" v-for="item in userinfo" :key="item.id">
                <div class="fn-item-image">
                  <i class="iconfont" :class="item.srcs" :style="{color:item.color}"></i>
                </div>
                <span>{{item.infos}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 下半部分 -->
      <div class="downbar flex">
        <!-- 住酒店 -->
        <div class="hotels imgcommon">
          <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt />
        </div>
        <!-- 涨姿势 -->
        <div class="posture imgcommon">
          <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt />
        </div>
        <!-- 我是商家 -->
        <div class="business" v-if="showImg">
          <img src="//p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt />
        </div>
        <!-- APP版 -->
        <div class="app">
          <!-- 二维码 -->
          <div class="ewm">
            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt />
          </div>
          <p class="papp">美团APP手机版</p>
          <p class="ptxt">
            <span class="spone">1元起</span>
            <span>吃喝玩乐</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图图片
      images: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "http://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
      ],
      // 分类导航栏数据
      bavcontent: [
        {
          msg: "美团外卖",
          color: "#fbc700"
        },
        {
          msg: "猫眼电影",
          color: "#ed1e24"
        },
        {
          msg: "美团酒店",
          color: "#f04d4e"
        },
        {
          msg: "民宿/公寓",
          color: "#fdc411"
        },
        {
          msg: "商家入驻",
          color: "#fe8c00"
        },
        {
          msg: "美团公益",
          color: "#f04d4e"
        }
      ],
      // 隐藏盒子的显示与隐藏
      flag: false,
      // 隐藏盒子数据
      count: 0,
      // 接收menus下面的child数组的对象
      menuchilds: {},
      // 轮播图
      value: 0,
      // 休闲生活图片的显示
      showImg: true,
      // 轮播图上方导航栏文字变色参数
      flags: false,
      // 控制轮播图上方导航栏文字的颜色显示参数
      num: 0,

      // 接收从localStorage中获取到的用户信息
      users: "",
      // 我的订单/我的收藏等信息数组
      userinfo: [
        {
          srcs: "order",
          infos: "我的订单",
          color: "#FFC300"
        },
        {
          srcs: "collect",
          infos: "我的收藏",
          color: "#FFC300"
        },
        {
          srcs: "coupon",
          infos: "抵用券",
          color: "#FFC300"
        },
        {
          srcs: "balance",
          infos: "余额",
          color: "#FFC300"
        },
        {
          srcs: "more",
          infos: "更多",
          color: "#FFC300"
        }
      ]
    };
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  methods: {
    // 弹出框显示
    changeFlag(items) {
      setTimeout(() => {
        this.flag = true;
        if (items !== "") {
          this.menuchilds = items;
        }
      }, 10);
    },
    // 弹出框隐藏
    changeFlags(ids, items) {
      setTimeout(() => {
        this.flag = false;
        this.count = ids;
        if (this.count === 0) {
          this.menuchilds = [];
        } else {
          this.menuchilds = items;
        }
      }, 10);
    },
    // 给定义的参数num赋值index（下标）使颜色的显示一一对应
    changeS(idx) {
      this.num = idx;
      this.flags = true;
    },
    changeF() {
      this.flags = false;
    }
  },
  mounted() {
    // 当浏览器宽度小于1190时休闲生活图片隐藏
    window.onresize = () => {
      if (document.body.clientWidth < 1190) {
        this.showImg = false;
      } else {
        this.showImg = true;
      }
    };
    // console.log(this.menus);
    // 获取用户名
    if (localStorage.getItem("userinfo")) {
      this.users = JSON.parse(localStorage.getItem("userinfo"));
      // console.log(this.users);
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.classfys {
  display: flex;
  width: 1190px;
  min-width: 1190px;
  height: 430px;
  margin: 0 auto;

  // 分类导航栏
  .navbar {
    position: relative;
    width: 230px;
    height: 480px;
    margin-top: -50px;
    background-color: white;
    border: 1px solid #e5e5e5;
    color: #646464;
    // 全部分类文字
    .allclassfy {
      width: 100%;
      height: 50px;
      padding-top: 15px;
      span {
        font-size: 16px;
        font-weight: 700;
        color: #222222;
        margin-left: 15px;
      }
    }
    // 分类具体详情
    .classfycont {
      width: 100%;
      height: 425px;
      padding: 10px 0 8px;
      .classfymodel {
        height: 25.5px;
        padding: 2px 12px;
        &:hover {
          background-color: #fff7eb;
          .iname {
            color: black;
            font-weight: 700;
          }
        }
        .modelleft {
          line-height: 21px;
          i {
            font-size: 17px;
          }
          .iname {
            font-size: 13px;
            margin-left: 11px;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    // 隐藏的盒子
    .hiddencont {
      position: absolute;
      left: 230px;
      top: 60px;
      z-index: 98;
      width: 400px;
      height: 416px;
      background-color: #fff;
      .hcontent {
        padding: 0 30px;
        .hcontentmodel {
          // 标题
          .htitle {
            margin-top: 16px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e5e5e5;
            line-height: 22px;
            h4 {
              font-size: 18px;
              color: black;
            }
            .rightcont {
              color: #666;
            }
          }
          // 内容
          .hmain {
            width: 100%;
            flex-wrap: wrap;
            .hmainmodel {
              margin: 10px 16px 0 0;
              span {
                font-size: 12px;
                color: #999;
                &:hover {
                  cursor: pointer;
                  color: #fe8c00;
                }
              }
            }
          }
        }
      }
    }
  }
  // 右边轮播图盒子
  .rightbar {
    position: relative;
    width: 950px;
    margin-left: 10px;
    margin-top: 10px;
    // 右边顶上导航栏
    .rightupbar {
      position: absolute;
      top: -45px;
      left: 20px;
      display: flex;
      .barmodel {
        margin: 0 20px;
        &:hover {
          cursor: pointer;
        }
        span {
          font-weight: 700;
          font-size: 16px;
          color: #222222;
        }
      }
    }
    // 上半部分
    .upbar {
      width: 100%;
      height: 240px;
      margin-bottom: 10px;
      // 上半部分轮播图
      .upcarousel {
        width: 550px;
        height: 100%;
        margin-right: 10px;
        overflow: hidden;
        flex-wrap: nowrap;
        .demo-carousel {
          width: 550px;
          height: 240px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      // 休闲生活
      .lifes {
        width: 150px;
        height: 240px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 下半部分
    .downbar {
      width: 100%;
      // 涨姿势和住酒店图片
      .imgcommon {
        width: 270px;
        height: 165px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      // 我是商家图片
      .business {
        width: 150px;
        height: 165px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      // APP版
      .app {
        width: 230px;
        height: 165px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        text-align: center;
        color: #222222;
        // 二维码
        .ewm {
          margin: 10px auto 0;
          text-align: center;
          img {
            width: 95px;
            height: 95px;
          }
        }
        .papp {
          font-size: 16px;
        }
        .ptxt {
          span {
            font-size: 12px;
          }
          .spone {
            margin-right: 5px;
            color: #ec5330;
          }
        }
      }
    }
  }
}
// 登录注册页(未登录)
.lregister {
  width: 230px;
  height: 240px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  .defalut {
    width: 100%;
    padding-top: 30px;
    // 头像
    .defaultimg {
      margin: 0 auto 4px;
      text-align: center;
      img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        border: 4px solid #e5e5e5;
      }
    }
    .pmsg {
      text-align: center;
      font-size: 16px;
      color: #222;
    }
    .btnlogin {
      width: 118px;
      margin: 10px auto 15px;
      line-height: 38px;
      color: #333;
      text-align: center;
      border: 1px solid #e5e5e5;
      border-radius: 40px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .login-after-info {
    position: relative;
    .info-settings {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 29px;
      height: 26px;
      &:hover {
        cursor: pointer;
      }
    }
    // 用户名
    .login-nickname {
      height: 30px;
      font-size: 16px;
      color: #222;
      font-weight: 500;
      span {
        margin-right: 5px;
        &:hover {
          cursor: pointer;
        }
      }
      img {
        width: 14px;
        height: 14px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    // 我的订单/我的收藏/抵用券
    .login-row-up {
      //   height: 53px;
      padding: 0 15px;
      flex-wrap: wrap;
      .fn-item {
        width: 33.3%;
        &:hover {
          cursor: pointer;
        }
        .fn-item-image {
          width: 24px;
          height: 26.4px;
          margin: 0 auto;
        }
        span {
          margin: 5px 0;
          font-size: 12px;
          color: #222;
        }
      }
    }
  }
}
</style>