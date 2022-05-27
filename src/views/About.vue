<template>
  <div class="main text-white">
    <div class="continer">
      <div class="row d-flex d-flex justify-content-center">
        <div class="col-10 mx-auto">
         <!-- Stories -->
         <div class="row">
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
              <img
                src="@/assets/images/Storie1.jpg"
                class="stories-img"
                alt=""
              />
              <h3 class="stories-title">Переехал в новую квартиру</h3>
              <h3 class="stories-footer text-and"></h3>
            </div>
            <div class="col-3 d-none d-lg-block img-wrap">
              <img
                src="@/assets/images/Storie1.jpg"
                class="stories-img"
                alt=""
              />
              <h3 class="stories-title">Переехал в новую квартиру</h3>
              <h3 class="stories-footer text-and"></h3>
            </div>
            <div class="col-3 d-none d-lg-block img-wrap">
              <img
                src="@/assets/images/Storie1.jpg"
                class="stories-img"
                alt=""
              />
              <h3 class="stories-title">Переехал в новую квартиру</h3>
              <h3 class="stories-footer text-and"></h3>
            </div>
          </div>
           <!-- /Stories -->
           <!-- Serch -->
           <form class="row serch mt-5 bg-dark py-3">
             <div class="col-xs-7 col-md-10">
             <input type="text" class="serch-input form-control
              me-0
              border-radius-none
              rounded-0
              bg-dark
              border-0
              text-white
              shadow-none"
              placeholder="Поиск по блогу">
           </div>
           <div class="col-xs-5 col-md-2 d-flex flex-row-reverse">
             <button type="button" class="btn btn-secondary rounded-circle"><img class="mb-1" src="@/assets/images/Photo.svg" alt=""></button>&nbsp
             <button type="button" class="btn btn-primary rounded-circle"><img src="@/assets/images/Serch.svg" class="mb-1 ml-1" alt=""></button>
           </div>
           </form>
           <!-- /Serch -->
          <!-- Card -->
          <div class="card mt-5" style="width: 100%">
            <img
              src="@/assets/images/Post-1.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Как писать код быстро и безболезненно?</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum volutpat orci turpis urna. Et vestibulum, posuere
                tortor lacinia sit. Sagittis porttitor orci auctor in at
                tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor
                nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel
                volutpat.
              </p>
              <div class="row">
                <div class="col-xs-7 col-4 d-flex card-footer align-middle">
                  <p>21.06.22</p>
                  &nbsp <span class="punkt mt-1"></span>&nbsp
                  <p>Создание сайтов</p>
                </div>
                <div class="offset-5 col-3 text-end">
                  <a href="#" class="btn btn-link text-decoration-none"
                    >читать</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- /card -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scpped>
.main {
  background-color: #202020;
}
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