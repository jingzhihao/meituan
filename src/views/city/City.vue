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
        <a class="sp-hots textalign" v-for="item in arr" :key="item.id" :href="`#${item}`">{{item}}</a>
      </div>
      <div class="city">
        <div class="city-area flex" v-for="item in arr" :key="item.id" :id="item">
          <span class="city-area-item textalign">{{item}}</span>
          <div class="cities flex">
            <span
              class="city-item"
              v-for="(it,index) in city[item]"
              @click="changeCity(it.name)"
              :key="index"
              :class="{hots:it.id ==='1'}"
            >{{it.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <font></font>
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
      city: [],
      arr: []
    };
  },
  components: {
    top
  },
  methods: {
    // 切换城市返回主页
    changeCity(items) {
      this.$store.state.citys = items;
      sessionStorage.setItem("locations", this.$store.state.citys);
      this.$router.push("/");
      if (!localStorage.getItem("recentCitys")) {
        localStorage.setItem(
          "recentCitys",
          JSON.stringify(this.$store.state.recentCity)
        );
      }
      let flags = true;
      this.$store.state.recentCity.map(item => {
        if (item === items) {
          flags = false;
        }
      });
      if (flags) {
        this.$store.state.recentCity.unshift(items);
      }
      localStorage.setItem(
        "recentCitys",
        JSON.stringify(this.$store.state.recentCity)
      );
      // console.log(this.$store.state.recentCity);
    },
    //获取省级分类
    getProvince() {
      this.$api.Province().then(res => {
        //console.log(res);
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
      for (let i in this.city) {
        this.arr.push(i);
      }
      //console.log(this.arr);
    }
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
  width: 1190px;
  margin: 20px auto;
  min-height: 1000px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 20px;
  font-size: 16px;
  color: #333;
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
  .sp-hots {
    display: inline-block;
    width: 25px;
    height: 25px;
    margin: 0 10px;
    color: #666;
    &:hover {
      cursor: pointer;
    }
  }
  > span {
    font-size: 12px;
    color: rgb(102, 102, 102);
    padding: 10px 10px;
  }
}
.city {
  .city-area {
    padding: 13px 30px 13px 10px;
    border-radius: 10px;
    transition: background-color 0.5s;
    &:hover {
      background-color: #f8f8f8;
    }
    .city-area-item {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #ffd000;
      line-height: 40px;
    }
    .cities {
      max-width: 1065px;
      flex-wrap: wrap;
      .city-item {
        margin: 5px 10px;
        font-size: 14px;
        color: #666;
        &:hover {
          cursor: pointer;
          color: #222222 !important;
        }
      }
      .hots {
        color: #ff6600;
      }
    }
  }
}
</style>