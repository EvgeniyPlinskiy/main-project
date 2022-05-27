<template>
  <div class="main text-white">
    <div class="continer">
      <div class="row d-flex d-flex justify-content-center">
        <div class="col-10 mx-auto">
          <div class="row">
            <div class="col-6 mt-5">
              <h1>Регистрация</h1>
            </div>
          </div>

          <div class="row serch mt-5 g-3 py-3">
            <form class="col-md-7">
              <input
                type="text"
                class="
                  serch-input
                  form-control
                  me-0
                  border-radius-none
                  rounded-0
                  text-white
                  shadow-none
                "
                placeholder="Как к Вам обращаться?"
              />
                         <input
                type="mail"
                class="
                  mt-4
                  serch-input
                  form-control
                  me-0
                  border-radius-none
                  rounded-0
                  text-white
                  shadow-none
                "
                placeholder="Электронная почта"
              />
              <input
                type="password"
                class="
                  mt-4
                  serch-input
                  form-control
                  me-0
                  border-radius-none
                  rounded-0
                  text-white
                  shadow-none
                "
                placeholder="пароль"
              />
              <input
                type="password"
                class="
                  mt-4
                  serch-input
                  form-control
                  me-0
                  border-radius-none
                  rounded-0
                  text-white
                  shadow-none
                "
                placeholder="Подтвердите пароль"
              />
              <router-link to="/login" class="btn btn-secondary mt-4 px-4">Назад</router-link>&nbsp
              <button class="btn btn-primary mt-4">Сохранить</button>
            </form>
            <div class="col-5 ">
              <img src="@/assets/images/avatar.jpg" class="img-fluid" alt=""><br>
              <a href="#" class="btn btn-link text-decoration-none"
                    >Выбрать аватар</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scpped>
.main {
  background-color: #202020;
  height: 100vh;
}
/* Serch */
.serch {
  background-color: transparent;
}
.serch-input {
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
}
.serch-input:focus {
  border-bottom: 1px solid blue;
  background-color: transparent;
}
/* /Serch */

/* card */
</style>