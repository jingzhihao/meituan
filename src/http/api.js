import service from "./index"

export default {
    //获取定位
    getLocation() {
        return service.req(`/position`)
    },
    //获取省份
    getProvince() {
        return service.req(`/province`)
    },
    //获取城市
    /***
     * 传入省份的 id 获取相应省的城市
     */
    getCity(id) {
        return service.req(`/citys/${id}`)
    },
    //获取城市具体信息
    /***
     * 传入城市的名称
     */
    getDetail(name) {
        return service.req(`/crumbs?${name}`)
    },
    //省市关联
    getProvince() {
        return service.req(`/city`)
    },
    //热门城市
    getHotCity() {
        return service.req(`/hotCity`)
    },
    //全部分类
    /**
     * 首页的所有数据详情
     */
    getMenu() {
        return service.req(`/menu`)
    },
    //热门搜索
    /***
     * 传入城市的名字获取城市相关的景点
     */
    getScenic(name) {
        return service.req(`/hotPlace?city=${name}`)
    },
    //搜索建议
    Recommendation({ name, input }) {
        return service.req(`/searchTop?city=${name}input=${input}`)

    },
    //根据关键词搜索
    Keyword({ name, keyword }) {
        return service.req(`/results?city=${name}&keyword=${keyword}`)
    },
    //商铺详情
    shopParticulars({ keyword, name }) {
        return service.req(`/products?keyword=${keyword}&city=${name}`)
    },
    //登录
    postLogin({ username, password }) {
        return service.req(`/users/login`, {
            username,
            password
        })
    }
    //注册
    postRegister({ username, password, email }) {
        return service.req(`/users/register`, {
            username,
            password,
            email
        })
    }
}