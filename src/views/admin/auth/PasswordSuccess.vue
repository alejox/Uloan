<template>
    <GoBack class="pass__back" />
  <section class="pass container">
    <div class="pass__img">
      <img class="pass__img-check" src="@/assets/img/check.svg" alt="" />
      <h2 class="pass__img-title title">Password reset</h2>
      <p class="secondaryText">Sign in with your new password</p>
    <ButtonColor
      @click="$router.push({ path: `signIn` })"
      class="pass__btn"
      text="Login"
    />
    </div>
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
  justify-content: center;
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
    margin-top: 24px;
  }
  &__form {
    margin-bottom: 100px;
  }
  &__link {
    color: $color-btn-p;
  }
  &__back {
    margin-left: 24px;
    margin-top: 24px;
  }
  &__subtitle {
    margin-bottom: 36px;
  }
}
</style>