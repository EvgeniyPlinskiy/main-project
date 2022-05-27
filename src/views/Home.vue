<template>
  <div class="main text-white">
    <div class="continer">
      <div class="row d-flex d-flex justify-content-center">
        <div class="col-10 mx-auto">
          <!-- Stories -->
          <Stories />
          <!-- /Stories -->
          <!-- Serch -->
          <form class="row serch mt-5 bg-dark py-3 d-none d-md-block d-flex justify-content-between">
            <div class="col">
              <input
                type="text"
                class="
                  serch-input
                  form-control
                  me-0
                  border-radius-none
                  rounded-0
                  bg-dark
                  border-0
                  text-white
                  shadow-none
                "
                placeholder="Напишите что-нибудь"
              />
            </div>
            <div class="col ">
              <div class="d-flex flex-row-reverse">
              <button type="button" class="btn btn-secondary rounded-circle">
                <img
                  class="mb-1"
                  src="@/assets/images/Photo.svg"
                  alt=""
                /></button
              >&nbsp
              <button type="button" class="btn btn-primary rounded-circle">
                <img src="@/assets/images/Serch.svg" class="mb-1 ml-1" alt="" />
              </button>
              </div>
            </div>
          </form>
          <!-- /Serch -->
          <SimplePost />
          <ImgPost />
          <VideoPost />
          <!-- Serch -->
           <form class="row serch mt-5 bg-dark py-3 d-block d-md-none">
            <div class="col-xs-7 col-md-10">
              <input
                type="text"
                class="
                  serch-input
                  form-control
                  me-0
                  border-radius-none
                  rounded-0
                  bg-dark
                  border-0
                  text-white
                  shadow-none
                "
                placeholder="Напишите что-нибудь"
              />
            </div>
            <div class="col-xs-5 col-md-2 d-flex flex-row-reverse">
              <button type="button" class="btn btn-secondary rounded-circle">
                <img
                  class="mb-1"
                  src="@/assets/images/Photo.svg"
                  alt=""
                /></button
              >&nbsp
              <button type="button" class="btn btn-primary rounded-circle">
                <img src="@/assets/images/Serch.svg" class="mb-1 ml-1" alt="" />
              </button>
            </div>
          </form>
          <!-- /Serch -->
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
import SimplePost from './posts/SimplePost.vue'
import ImgPost from './posts/ImgPost.vue'
import VideoPost from './posts/VideoPost.vue'
import Stories from './posts/Stories.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Home',
  components: { SimplePost, ImgPost, VideoPost, Stories, Pagination }
}
</script>


<style scpped>
.main {
  background-color: #202020;
  height: 100%;
}

/* Serch */
.serch {
  background-color: #121212;
}
.serch-input {
  width: 100%;
  height: 30px;
  background-color: transparent;
}
/* /Serch */
/* card */
.card {
  background-color: #202020;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.card-title {
  font-size: 18px;
  line-height: 21px;
}
.card-text {
  font-size: 14px;
  line-height: 21px;
  color: #d2d2d2;
}
.card-footer {
  font-size: 12px;
  line-height: 14px;
  color: #828282;
}
.punkt {
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #828282;
}
/* card */
</style>