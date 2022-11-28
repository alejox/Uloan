<template>
  <section class="data container">
    <article class="data__form form">
      <GoBack class="data__back" />
      <h2 class="subtitle">Número de teléfono</h2>
      <h2 class="data__subtitle subtitle">Cambiar número de teléfono</h2>
      <p class="secondaryText">
        Actualizaremos el número en su información personal y en la
        configuración de la autenticación en dos pasos.
      </p>
      <FlagInput/>
    </article>
    <ButtonColor
      @click="$router.push({ path: `autenticationNumberCode` })"
      class="data__btn"
      text="Continuar"
    />
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";
import FlagInput from "@/components/form/FlagInput.vue";
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