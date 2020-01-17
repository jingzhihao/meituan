<template>
  <div class="banner">
    <div class="banner-tilite">
      <div>全部分类</div>
      <div v-for="item in arr" :key="item.id">
        <div><i class="iconfont" :class="`icon-${item.type}`" :style="`color:${item.color}`"></i>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //轮播图
      images: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
      ],

      footList: [
        {
          title: "用户帮助",
          details: [
            "申请退款",
            "查看美团券密码",
            "常见问题",
            "用户协议",
            "隐私政策",
            "反诈骗公告",
            "消费者权益保障"
          ]
        },
        {
          title: "美团服务",
          details: [
            "美团外卖",
            "美团酒店",
            "猫眼电影",
            "美团配送",
            "美团云",
            "大众点评",
            "美团民宿",
            "无人配送"
          ]
        },
        {
          title: "商家合作",
          details: [
            "美团餐饮商户中心",
            "美食商家入驻(非外卖)",
            "美团外卖开店申请",
            "美团收银官网",
            "外卖配送加盟申请",
            "美团点评餐饮学院",
            "酒店商家入驻",
            "境内度假商家入驻",
            "综合商家入驻",
            "美团民宿房东商家入驻",
            "商家开票申请",
            "美团点评智能收银机",
            "美团点评收单",
            "美团点评餐饮开放平台",
            "免费使用美团排队",
            "快驴进货商家合作",
            "美团闪购商家入驻"
          ]
        },
        {
          title: "代理商加盟",
          details: [
            "美团外卖代理商招募",
            "到店餐饮代理商招募",
            "非餐饮代理商招募",
            "美团联盟",
            "美团收银招募线上分销商",
            "美团点评5S服务商招募",
            "美团收单渠道代理商招募"
          ]
        },
        {
          title: "美团规则",
          details: ["规则中心", "规则目录", "规则评议院"]
        },
        {
          title: "关注美团",
          details: ["美团新浪微博"]
        },
        {
          title: "公司信息",
          details: [
            "关于我们",
            "投资者关系",
            "加入我们",
            "商户诚信公约及管理办法",
            "保险经纪资质"
          ]
        },
        {
          title: "廉正举报",
          details: ["廉政邮箱"]
        },
        {
          title: "知识产权",
          details: ["知识产权维权平台"]
        },
        {
          title: "消费者服务热线",
          details: [
            "外卖消费者：10109777",
            "猫眼消费者：10105335",
            "其他消费者：10107888"
          ]
        },
        {
          title: "商家服务热线",
          details: [
            "外卖&餐饮商家：10105557",
            "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107"
          ]
        },
        {
          title: "投诉举报热线",
          details: [
            "违法和不良信息举报电话：4006018900",
            "举报邮箱：tousujubao@meituan.com"
          ]
        },
        {
          title: "商家自助入驻美团入口",
          details: []
        },
        {
          title: "供应商注册入口",
          details: []
        }
      ],
      arr:[],
      colors:[
        '#FF8200','#FFB500','#9B5E3E','#FFB500','#FF3D00','#03A9F4',
        '#00BF96','#00BF96','#FF4081','#FF4081','#FF4081','#03A9F4',
        '#00BF96','#00BF96','#03A9F4','#00BF96'
      ]
    };
  },
  components: {},
  methods: {
    //获取所有数据
    getMenu() {
      this.$api.getMenu().then(res => {
        this.arr = res.data.menu
        //console.log(this.arr);
        this.arr.map((item,index) => {
          this.colors.map((it,idx) =>{
            if(index === idx){
             this.arr.push(item.color = it)
            }
          })
        })
        //console.log(this.arr);
      });
    }
  },
  mounted() {
    this.getMenu();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.banner {
  width: 1115px;
  margin: 0 auto;
}
.banner-tilite{
  width: 200px;
  box-shadow: 0 0 5px rgb(178, 165, 193);
}
</style>