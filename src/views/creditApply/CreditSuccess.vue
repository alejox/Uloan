<template>
  <section class="pass container">
    <GoBack class="pass__back" />
    <div class="pass__img">
      <img class="pass__img-check" src="@/assets/img/check.svg" alt="" />
      <h2 class="pass__img-title title">Solicitud enviada</h2>
      <p class="secondaryText">
        La solicitud de crédito fue enviada con éxito, en los siguientes días se brindarán respuesta.
      </p>
    </div>
    <ButtonColor
      @click="$router.push({ path: `credit` })"
      class="pass__btn"
      text="Regresar a inicio"
    />
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";
</script>

<style lang="scss" scoped>
.pass {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  &__img {
    &-check {
      display: block;
      margin: 0px auto 24px;
    }
    &-title {
      margin-bottom: 16px;
    }
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