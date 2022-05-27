<template>
  <div class="main-sidebar sticky-top fixed-top">
    <img
      src="@/assets/images/Sidebar_img.jpg"
      class="img-fluid"
      style="width: 100%"
      alt=""
    />

    <div class="container">
      <div class="row">
        <div class="offset-3 col-6 mt-5">
          <img
            src="@/assets/images/avatar_sidebar.jpg"
            class="rounded-circle img-fluid"
            alt=""
          />
        </div>
        <div class="offset-2 col-8 mt-5">
          <h1 class="sidebar-title text-center">Евгений Плинский</h1>
          <h4 class="sidebar-subtitle">блог front-end разработчика</h4>
          <p class="sidebar-text mt-5">
            Front-end разработчик. Практик верстки сайтов. Созданием сайтов
            занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал
            более 10 000 часов в создании сайтов различной сложности.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-6 text-center">
          <button type="button" class="btn btn-primary">Мои работы</button>
        </div>
        <div class="col-6 text-center">
          <button type="button" class="btn btn-secondary">Написать мне</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.main-sidebar {
  height: 100%;
  background-color: #202020;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.25);
  z-index: 1000;
}
.sidebar-title {
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
}
.sidebar-subtitle {
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #dedede;
}
.sidebar-text {
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
}
</style>