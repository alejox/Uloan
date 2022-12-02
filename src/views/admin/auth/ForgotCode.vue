<template>
  <GoBack class="signIn__back" />
  <section class="signIn container">
    <div class="form signIn__form">
      <h2 class="title">Código Verificación</h2>
      <p class="secondaryText">
        Check your email for a validation code and enter here
      </p>
      <div class="signIn__box">
        <input class="signIn__box-s" type="number" max="9" maxlength="1" />
        <input class="signIn__box-s" type="number" max="9" />
        <input class="signIn__box-s" type="number" max="9" />
        <input class="signIn__box-s" type="number" max="9" />
      </div>

      <a class="link signIn__link">Resend code</a>
      <ButtonColor @click="$router.push({ path: `resetPassword` })" class="signIn__btn"
        text="Send" />
    </div>
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import GoBack from "@/components/base/GoBack.vue";

</script>

<style lang="scss" scoped>
.signIn {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  margin-top: 50px;

  &__img {
    display: block;
    margin: 20% auto;
  }

  &__back {
    margin-top: 24px;
    margin-left: 20px;
  }

  &__btn {
    margin-bottom: 20px;
  }

  &__form {
    margin-bottom: 100px;
    text-align: center;
  }

  &__link {
    text-decoration: underline;
  }

  &__box {
    display: flex;
    justify-content: space-evenly;

    &-s {
      padding: 12px 16px;
      border: 1px solid #eef0f1;
      border-radius: 4px;
      width: 53px;
      text-align: center;
      outline: none;
      height: 48px;
      -moz-appearance: textfield;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

    }
  }
}
</style>