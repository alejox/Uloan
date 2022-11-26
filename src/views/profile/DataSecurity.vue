<template>
  <section class="data container">
    <article class="data__form form">
      <GoBack class="data__back" />
      <h2 class="subtitle">Password</h2>
      <div>
        <BaseInput text="Current password" placeholder="Password" type='password'/>
      </div>
      <div>
        <BaseInput text="New password" placeholder="Password" type='password'/>
      </div>
      <div>
        <BaseInput text="Confirm password" placeholder="Password" type='password'/>
      </div>

    </article>
    <ButtonColor
      @click="$router.push({ path: `dataSecurity` })"
      class="data__btn"
      text="Save"
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
    margin: 10% auto;
  }
  &__btn {
    margin: 24px 0;
  }
  &__form {
  }
  &__link {
    color: $color-btn-p;
  }
  &__back {
    margin-top: 24px;
  }
}
</style>