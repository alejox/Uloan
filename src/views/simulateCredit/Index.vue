<template>
  <section class="credit container">
    <div class="form credit__form">
      <GoBack class="credit__back" />
      <h2 class="subtitle credit__subtitle">Solicitud de crédito</h2>
      <div>
        <BaseInput text="Monto" placeholder="$0.0" type="number" />
        <p class="tertiaryText">Monto minimo: $0.00 - Monto Maximo: $0.00</p>
      </div>
      <div>
        <BaseInput text="¿A cuántos meses?" placeholder="0" type="number" />
        <p class="tertiaryText">Elije un plazo desde 0 y hasta 0 meses</p>
      </div>
    </div>
    <ButtonColor
      @click="$router.push({ path: `simulateCreditApply` })"
      class="credit__btn"
      text="Solicitar"
    />
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";
</script>

<style lang="scss" scoped>
.credit {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  &__img {
    display: block;
    margin: 10% auto;
  }
  &__btn {
    margin-bottom: 20px;
  }
  &__form {
    margin-bottom: 100px;
  }
  &__link {
    color: $color-btn-p;
  }
  &__back {
    margin-top: 24px;
  }
  &__subtitle {
    margin-bottom: 36px;
  }
}
</style>