<template>
  <section class="profile">
    <section>
      <article class="profile__info">
        <h2 class="subtitle profile__subtitle">Profile</h2>
        <article class="profile__info--box">
          <div class="profile__info--box-a">
            <img src="@/assets/img/profile.svg" alt="" />
            <div class="profile__info--box-text">
              <h3 class="profile__info--box-title">Fernando Reyes</h3>
              <p class="profile__info--box-subtitle">email@email.com</p>
            </div>
          </div>
          <div>
            <a class="profile__info--box-link" @click="perfilPopup = true">Cambiar foto</a>
          </div>
        </article>
      </article>

      <article class="profile__box">
        <h2 class="subtitle">Mi cuenta</h2>

        <article v-for="info in data" :key="info.name" class="profile__box--cont" @click="$router.push({ path: info.route })">
          <article class="profile__box--cont-text">
            <img :src="info.img" alt="" />
            <p>{{ info.name }}</p>
          </article>
          <img src="@/assets/img/arrow.png" alt="" />
        </article>
      </article>
      <div class="container">
        <ButtonColor text="Cerrar sesión" class="border" />
      </div>
    </section>
    <Menu />
  </section>
  <section class="payInfo" v-if="perfilPopup">
    <section class="payInfo__text">
      <section class="payInfo__text-profile">
        <article class="payInfo__text-profile-info">
          <img src="src\assets\img\Avatarpefil.png" alt="">
          <h3>Fernando Reyes</h3>
          <p>email@email.com</p>
        </article>
        <article class="payInfo__text-profile-badges">
          <div>
            <img src="src\assets\img\Camera,Photo.png" alt="">
            <p>Tomar foto</p>
          </div>
          <div>
            <img src="src\assets\img\image-picture-upload-arrow.png" alt="">
            <p>Elegir de galería</p>
          </div>
        </article>
      </section>
    </section>
    <section class="payInfo__layer"  @click="perfilPopup = false"></section>
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";
import Menu from "@/components/base/Menu.vue";
import { ref } from "@vue/reactivity";
const perfilPopup = ref(false)
const data = [
  {
    name: "Datos personales",
    img: "src/assets/img/security.svg",
    route: "/data",
  },
  {
    name: "Datos de trabajo",
    img: "src/assets/img/workData.svg",
    route: "/dataWork",
  },
  { name: "Seguridad", img: "src/assets/img/security.svg", route: "/dataSecurity" },
  {
    name: "Doble factor de autenticación",
    img: "src/assets/img/protection.svg",
    route: "/autentication",
  },
];
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  &__subtitle {
    color: #fff;
  }
  &__info {
    padding: 24px;
    background: #0e3729;
    display: flex;
    flex-direction: column;
    gap: 32px;
    &--box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      &-a {
        display: flex;
        gap: 16px;
      }
      &-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      &-title {
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
        color: #fff;
      }
      &-subtitle {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #fff;
        opacity: 70%;
      }
      &-link {
        color: #fff;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  &__box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 16px;
    &--cont {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border: 1px solid #ececee;
      background: #fff;
      border-radius: 8px;
      &-text {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
  }
}
</style>