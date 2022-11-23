<template>
  <section class="credit">
    <div class="credit__user">
      <GoBack class="credit__back color" />
      <img class="credit__user-img" src="@/assets/img/userPic.png" alt="" />
    </div>

    <div class="credit__container">
      <h2 class="title credit__title">Solicita su crédito</h2>
      <p class="secondaryText credit__text">
        Aún no tiene créditos disponibles, solicite su cupo ahora con nosotros
      </p>
      <ButtonColor
        class="credit__btn white"
        @click="$router.push({ path: `creditApply` })"
        text="Solicitar ahora"
      />
    </div>
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import GoBack from "@/components/base/GoBack.vue";
</script>

<style lang="scss" scoped>
.credit {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $color-btn-p;

  min-height: 100vh;
  height: 100%;
  &__title {
    color: #fff;
  }
  &__user {

    &-img {
      display: flex;
      justify-content: center;
      width: 100%;

    }
  }
  &__text {
    margin-bottom: 24px;
    color: #fff;
  }
  &__btn {
    margin-bottom: 20px;
  }
  &__back {
    position: absolute;
    margin: 13px 16px;
  }
  &__container {
    padding: 24px 16px 0px;
    
  }
}
</style>