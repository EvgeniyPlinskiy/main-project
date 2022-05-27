<template>
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
</template>

<script>
export default {
  name: 'ImgPost'
}

</script>


<style>
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
