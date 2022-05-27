<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-dark
      bg-dark
      p-0
      d-flex
      justify-content-between
      align-baseline
      sticky-top
    "
  >
    <button
      class="navbar-toggler border-0 shadow-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav me-auto mb-2 mb-lg-0 d-block d-lg-none">
        <img
          src="@/assets/images/Sidebar_img.jpg"
          class="img-fluid nav-avatar"
          alt=""
        />
        <div class="container">
        <div class="row">
        <div class="col-4">
          <img
            src="@/assets/images/avatar_sidebar.jpg"
            class="rounded-circle img-fluid"
            alt=""
          />
        </div>
        <div class="col-8 mt-4">
          <h1 class="sidebar-title text-center">Евгений Плинский</h1>
          <h4 class="sidebar-subtitle">блог front-end разработчика</h4>
        </div>
        <div class="line mt-2"></div>
        </div>
        </div>
      </div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link p-3 ml-2" aria-current="page"
            >Главная</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link p-3 ml-2" aria-current="page"
            >Статьи</router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/profile" class="nav-link p-3" href="#"
            >Профиль</router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" href="#">Реклама</a>
        </li>
        <li class="nav-item d-block d-lg-none">
          <router-link to="/login" class="nav-link p-3">Войти</router-link>
        </li>
      </ul>
    </div>
    !

    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item d-none d-lg-block">
        <router-link to="/login" class="nav-link p-3">Войти</router-link>
      </li>
      <li class="nav-item">
        <form class="d-flex" style="height: 100%">
          <input
            class="
              form-control
              me-0
              border-radius-none
              rounded-0
              bg-dark
              border-0
              text-white
              shadow-none
            "
            type="search"
            placeholder="Поиск по блогу"
            aria-label="Search"
          />
        </form>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.nav-link:hover {
  background-color: blue;
}
.nav-avatar {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.line {
  height: 2px;
  width: 100%;
  background-color: #1C1C1C;
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
</style>