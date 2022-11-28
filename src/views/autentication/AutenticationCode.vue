<template>
  <section class="data container">
    <article class="data__form form">
      <GoBack class="data__back" />
      <h2 class="subtitle">Código de inicio de sesión</h2>
      <h2 class="data__subtitle subtitle">Ingresa el código</h2>
      <p class="secondaryText">
        Ingresa el código de inicio de sesión de 4 dígitos que enviamos al
        número terminado en 0000 para completar la configuración de la
        autenticación en dos pasos.
      </p>
      <a class="data__link" href="#">Resend code</a>
    </article>
    <ButtonColor
      @click="$router.push({ path: `autenticationConfirmation` })"
      class="data__btn"
      text="Activar"
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
    text-align: center;
    margin-top: 110px;
  }
  &__back {
    margin-top: 24px;
  }
  &__subtitle {
    text-align: center;
  }
}
</style>