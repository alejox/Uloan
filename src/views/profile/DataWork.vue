<template>
  <section class="data container">
    <article class="data__form form">
      <GoBack class="data__back" />
      <h2 class="subtitle">Data Work</h2>
      <div>
        <BaseInput text="Job" placeholder="Enter your job" />
      </div>
      <div>
        <BaseInput text="Time in the company" type="date" />
      </div>
      <div>
        <BaseInput
          text="Job agency"
          placeholder="Type your job agency"
          :require="false"
        />
      </div>
      <div>
        <BaseInput
          text="Address"
          placeholder="Enter your address"
          :require="false"
        />
      </div>
      <!-- <FlagInput/> -->
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
// import FlagInput from "@/components/form/FlagInput.vue";
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