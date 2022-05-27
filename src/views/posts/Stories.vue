<template>
  <div class="row mt-5">
    <div class="col-3 d-none d-lg-block img-wrap">
      <img
        src="@/assets/images/Storie1.jpg"
        class="stories-img img-responsive"
        alt=""
      />
      <h3 class="stories-title">Переехал в новую квартиру</h3>
      <h3 class="stories-footer text-and"></h3>
    </div>
    <div class="col-3 d-none d-lg-block img-wrap">
      <img src="@/assets/images/Storie1.jpg" class="stories-img" alt="" />
      <h3 class="stories-title">Переехал в новую квартиру</h3>
      <h3 class="stories-footer text-and"></h3>
    </div>
    <div class="col-3 d-none d-lg-block img-wrap">
      <img src="@/assets/images/Storie1.jpg" class="stories-img" alt="" />
      <h3 class="stories-title">Переехал в новую квартиру</h3>
      <h3 class="stories-footer text-and"></h3>
    </div>
    <div class="col-3 d-none d-lg-block img-wrap">
      <img src="@/assets/images/Storie1.jpg" class="stories-img" alt="" />
      <h3 class="stories-title">Переехал в новую квартиру</h3>
      <h3 class="stories-footer text-and"></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stories",
};
</script>


<style>
/* Stories */
.stories-img {
  height: 100%;
  width: 100%;
}
.img-wrap {
  position: relative;
}
.img-wrap h3 {
  position: absolute;
  left: 15%;
  top: 15%;
  width: 100%;
  font-size: 12px;
  line-height: 14px;
}

/* /Stories */
</style>
