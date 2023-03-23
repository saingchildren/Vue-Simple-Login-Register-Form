<template>
  <div class="main">
    <img src="../../public/avatar.jpg" />
    <div>
      我叫王亦瀧
      <br />
      目前就讀國立勤益科技大學資訊管理系四年級
      <hr />
      建立此網站的目的是為練習Vue.JS串接
      <br />
      後端API進行註冊及登入
    </div>
  </div>
</template>

<style scope>
img {
  margin-right: 1.3rem;
  width: 200px;
  height: 250px;
}
.main {
  justify-content: center;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
}

.main > div {
  margin-top: 50px;
}

@media (max-width: 800px) {
  .main > div {
    text-align: center;
    margin: 0 auto 0;
  }
  img {
    margin-bottom: 1.2rem;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
