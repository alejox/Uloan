<template>
  <section class="register container">
    <div class="form register__form">
      <GoBack class="register__back" />
      <h2 class="subtitle register__subtitle">Create account</h2>
      <BaseInput text="Full Name" placeholder="Enter your name" />
      <BaseInput text="Birth date" type="date" placeholder="Enter your name" />
      <FlagInput v-model="phone"/>
    <ButtonColor
      @click="$router.push({ path: `registerPassword` })"
      class="register__btn"
      text="Continue"
    />
    </div>
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";
import FlagInput from "@/components/form/FlagInput.vue";
import { ref } from "@vue/reactivity";
const phone = ref('')
</script>

<style lang="scss" scoped>
.register {
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
    text-align: center;
    margin-bottom: 36px;
  }
}
</style>