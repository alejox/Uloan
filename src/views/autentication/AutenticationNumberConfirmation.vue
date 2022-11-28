<template>
  <section class="data container">
    <article class="data__form form">
      <GoBack class="data__back" />
      <h2 class="subtitle">Confirmación</h2>
      <img class="data__img" src="@/assets/svg/lock.png" alt="" />
      <h2 class="data__subtitle subtitle">Numero de teléfono confirmado</h2>
      <p class="secondaryText">
        La auteticación en dos pasos protege tu cuenta con un código de inicio
        de sesión que debes ingresar cuando inicias sesión en un dispositivo que
        no reconocemos.
      </p>
    </article>
    <ButtonColor
      @click="$router.push({ path: `autenticationChangeNumber` })"
      class="data__btn"
      text="Continuar"
    />
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";
</script>

<style lang="scss" scoped>
.data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  &__img {
    display: block;
    margin: 0 auto;
  }
  &__btn {
    margin: 24px 0;
  }
  &__img {
    width: 280px;
  }
  &__link {
    color: $color-btn-p;
  }
  &__back {
    margin-top: 24px;
  }
  &__subtitle {
    text-align: center;
  }
}
</style>