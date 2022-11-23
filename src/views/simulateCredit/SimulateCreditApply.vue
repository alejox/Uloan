<template>
  <section class="credit container">
    <div class="credit__form">
      <GoBack class="credit__back" />
      <h2 class="subtitle">Solicitud de crédito</h2>
      <article class="credit__content">
        <div class="credit__box">
          <div class="credit__box__content">
            <p class="credit__box__content-title">Tasa</p>
            <p class="credit__box__content-text">0.0%</p>
          </div>
          <div class="credit__box__content">
            <p class="credit__box__content-title">Cuotas</p>
            <p class="credit__box__content-text">0</p>
          </div>
          <div class="credit__box__content">
            <p class="credit__box__content-title">Monto</p>
            <p class="credit__box__content-text">0.0%</p>
          </div>
        </div>
      </article>

      <h3 class="credit__subtitle">Historial de pagos</h3>

      <article v-for="dato in datos" class="credit__pay">
        <div class="credit__pay-content">
          <div class="credit__pay-content-a">
            <div>
              <p class="credit__pay-title">Cuota</p>
              <p class="credit__pay-text">1</p>
            </div>
            <div>
              <p class="credit__pay-title">Fecha de vencimiento</p>
              <p class="credit__pay-text">00/00/0000</p>
            </div>
          </div>
          <div class="credit__pay-content-b">
            <div>
              <p class="credit__pay-title">Total a pagar</p>
              <p class="credit__pay-text"><b>$0.00</b></p>
            </div>
          </div>
        </div>
      </article>
    </div>
    <ButtonColor
      @click="$router.push({ path: `simulateSuccess` })"
      class="credit__btn"
      text="Solicitar"
    />
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";

const datos = [
  
]
</script>

<style lang="scss" scoped>
.credit {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  &__subtitle {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__content {
    padding: 24px;
    background: $color-btn-p;
    border-radius: 4px;
  }
  &__box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    &__content {
      &-title {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #fff;
      }
      &-text {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: left;
        color: #fff;
      }
    }
  }
  &__img {
    display: block;
    margin: 10% auto;
  }
  &__btn {
    margin-bottom: 20px;
  }
  &__link {
    color: $color-btn-p;
  }
  &__back {
    margin-top: 24px;
  }
  &__pay {
    &-title {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      text-align: left;
      color: $text-secondary;
    }
    &-text {
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
      color: $color-btn-p;
    }
    &-content {
      display: flex;
      justify-content: space-between;
      border: 1px solid #ececee;
      border-radius: 4px;
      padding: 16px;
      gap: 16px;
      &-a {
        display: flex;
        gap: 16px;
      }
      &-b {
        text-align: right;
      }
    }
  }
}
</style>