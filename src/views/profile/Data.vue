<template>
  <section class="data container">
    <article class="data__form form">
      <GoBack class="data__back" />
      <h2 class="subtitle">Personal information</h2>
      <div>
        <BaseInput text="Full Name" placeholder="Enter your name" />
      </div>
      <div>
        <BaseInput text="Email" placeholder="mail@example.com" type="number" />
      </div>
      <!-- <FlagInput/> -->
      <div>
        <BaseInput text="Birth date" type="date" />
      </div>
      <div>
        <BaseInput
          text="SSN"
          placeholder="Type your social security number"
          type="number"
        />
      </div>
      <div>
        <BaseInput
          text="Drivers licence"
          placeholder="Type your social security number"
          type="number"
          :require="false"
        />
      </div>
      <DropZone text="Upload document" />
    </article>
    <ButtonColor
      @click="$router.push({ path: `dataWork` })"
      class="data__btn"
      text="Save"
    />
  </section>
  <section class="payInfo" v-if="perfilPopup">
    <section class="payInfo__text">
      <section class="payInfo__text-profile">
        <h4>Upload document</h4>
        <article class="payInfo__text-profile-badges">
          <div>
            <img src="src\assets\img\Camera,Photo.png" alt="">
            <p>Tomar foto</p>
          </div>
          <div>
            <img src="src\assets\img\image-picture-upload-arrow.png" alt="">
            <p>Elegir de galería</p>
          </div>
        </article>
      </section>
    </section>
    <section class="payInfo__layer"  @click="perfilPopup = false"></section>
  </section>
</template>

<script setup>
import ButtonColor from "@/components/form/ButtonColor.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import GoBack from "@/components/base/GoBack.vue";
import DropZone from "@/components/form/DropZone.vue";
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