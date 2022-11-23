<template>
  <section class="login">
    <h2 class="title login__title">Request your credits easily and quickly</h2>
    <img class="login__img" src="@/assets/img/cardsLogin.png" alt="" />
    <div>
      <ButtonColor text="Login" />
      <ButtonColor
        class="login__btn white"
        @click="$router.push({ path: `signIn` })"
        text="Sign in"
      />
    </div>
  </section>
</template>

<script setup>
import ButtonColor from "@/assets/components/form/ButtonColor.vue";
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  &__title {
    margin-top: 80px;
  }
  &__img {
    width: 90%;
    display: block;
    margin: 15% auto 20%;
  }
  &__btn {
    margin-bottom: 20px;
  }
}
</style>