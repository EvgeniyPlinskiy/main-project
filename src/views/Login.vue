<template>
  <div class="main text-white">
    <div class="continer">
      <div class="row d-flex d-flex justify-content-center">
        <div class="col-10 mx-auto">
          <div class="row">
            <div class="offset-3 col-6 mt-5 text-center">
              <h1>Вход</h1>
            </div>
          </div>

          <div class="row serch mt-5 g-3 py-3">
            <form class="offset-md-2 col-md-8">
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
             <div class="text-center">
              <button class="btn btn-primary mt-5 mx-auto">Войти</button>
              </div>
              <div class="offset-md-3 col-md-6 d-flex mt-3 justify-content-between">
                <a href="#" class="btn btn-link text-decoration-none"
                    >Восстановить</a>
                <router-link to="/registr" class="btn btn-link text-decoration-none"
                    >Регистрация</router-link>
              </div>
            </form>
            
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