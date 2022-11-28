<template>
  <section class="profile">
    <section>
      <article class="profile__box">
        <GoBack class="profile__back" />
        <h2 class="subtitle">Doble factor de autenticación</h2>

        <article
          v-for="info in data"
          class="profile__box--cont"
          @click="$router.push({ path: info.route })"
        >
          <article class="profile__box--cont-text">
            <img :src="info.img" alt="" />
            <p>{{ info.name }}</p>
          </article>
          <img src="@/assets/img/arrow.png" alt="" />
        </article>
      </article>
    </section>
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";

const data = [
  {
    name: "Cambiar número",
    route: "/autenticationNumber",
  },
  {
    name: "Desactivar Doble factor de autenticación",
    route: "/deactivate",
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
        font-family: Nunito;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }
    }
  }
}
</style>