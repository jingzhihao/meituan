<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
.body{
  background-color: #F8F8F8;
}
.flex{
  display: flex;
}
.between{
  justify-content: space-between;
}
.around{
  justify-content: space-around;
}
.textover{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.textalign{
  text-align: center;
}
// 顶部搜索框padding
.searchbottom{
  padding-bottom: 35px;
}
// 居中显示
.center{
  margin: 0 auto;
}
</style>
