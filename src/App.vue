<template>
<div class="container-xs">
  <div class="row">
    <div class="col-lg-3 col-md-3 d-none d-lg-block d-xl-block p-0 sticky-top">
      <Sidebar />
    </div>
    <div class="col-lg-9 col-md-12 col-sm-12 p-0">
      <Navbar />
      <div class="col-12 p-0"><router-view /></div>
      <div class="col-12 p-0">
        
      </div>
    </div>
  </div>
    
      
    </div>
  


</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Pagination from "./components/Pagination.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: { Sidebar, Navbar, Pagination },
};
</script>

<style>

.sidebar {
  height: 100vh;
  /* background-color: #202020; */
  z-index: 1000;
}

</style>