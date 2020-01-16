<template>
  <div>
    <!--头部-->
    <top></top>
    <div class="font">
      <div class="city-tilte">
        <div>按省份选择：</div>
        <div>
          <Select @on-change="getCity" style="width:140px" placeholder="省份">
            <Option v-for="item in cityList" :value="item.id" :key="item.id">{{ item.name }}</Option>
          </Select>
        </div>
        <div>
          <Select @on-change="addCity" :disabled="disabled" style="width:140px" placeholder="城市">
            <Option v-for="item in list" :value="item.name" :key="item.id">{{ item.name }}</Option>
          </Select>
        </div>
        <div>直接搜索：</div>
        <div>
          <Input v-model="value2" placeholder="请输入城市中文或拼音" />
        </div>
      </div>

      <div class="hotCity">
        <span class="hot">热门城市:</span>
        <span v-for="item in hotCity" :key="item.id">{{item.province}}</span>
      </div>

      <div class="hotCity">
        <span class="hot">最近访问:</span>
        <span v-for="item in hotCity" :key="item.id">{{item.province}}</span>
      </div>

      <div class="hotCity">
        <span class="hot">按照字母分类:</span>
        <span v-for="item in hotCity" :key="item.id">{{item.province}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import top from "../../components/home/Top";
export default {
  data() {
    return {
      list: [],
      cityList: [],
      disabled: true,
      value2: "",
      hotCity: [],
      city:[],
      arr:[]
    };
  },
  components: {
    top
  },
  methods: {
    //获取省级分类
    getProvince() {
      this.$api.Province().then(res => {
        console.log(res);
        this.cityList = res.data.province;
        //console.log(this.cityList);
      });
    },

    //通过选中的省来搜索到相应的城市
    getCity(value) {
      this.disabled = false;
      this.$api.getCity(value).then(res => {
        this.list = res.data.city;
        //console.log(this.list);
      });
    },
    //跳转到选中的城市的
    addCity(va) {
      console.log(va);
    },
    //热门城市
    getHotCity() {
      this.$api.getHotCity().then(res => {
        //console.log(res);
        this.hotCity = res.data.hots;
      });
    },
    //
     getCities() {
      //全部
      
      this.city = this.$city.data.cities;
      //热

      Object.keys(this.city).map(item => {
        this.arr.push(...this.city[item]);
      });
      console.log(this.arr);
    },
  },
  mounted() {
    this.getProvince();
    this.getHotCity();
    this.getCities();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.font {
  width: 1115px;
  margin: 20px 80px;
  box-shadow: 0px 3px 5px 0px rgb(178, 165, 193);
  > div {
    font-size: 16px;
    color: #333;
    font-weight: 500;
    width: 96%;
    margin: 0 auto;
  }
}
.city-tilte {
  display: flex;
  //justify-content: center;
  align-items: center;
  > div {
    padding: 10px 10px;
  }
}
.hotCity {
  padding: 30px 0;
  align-items: center;
  border-bottom: 1px solid rgb(229, 229, 229);
  .hot {
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
  > span {
    font-size: 12px;
    color: rgb(102, 102, 102);
    padding: 10px 10px;
  }
}
</style>