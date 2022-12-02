
<template>
  <div class="card-profile">
    <div
      @dragenter.prevent="toogleActive"
      @dragleave.prevent="toogleActive"
      @dragover.prevent
      @drop.prevent="toogleActive"
      :class="{ 'active-dropzone': active }"
      class="dropzone card-profile__border"
    >
      <div
        class="card-profile__drag"
        @drop.prevent="drop"
        @change="selectedFile"
      >
        <input
          type="file"
          class="dropzoneFile card-profile__input"
          :class="id"
          :id="id"
        />
        <label :for="id" class="card-profile__title">
          <img class="card-profile__upload" src="@/assets/img/username.svg" alt="">
        </label>
        <span class="file-info">{{ dropzoneFile.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

name: "DropZoneUserName";
const props = defineProps({
  title: String,
  text: String,
  id:String,
  modelValue: {
    type: [Object],
  },
});
const emits = defineEmits(["setImage"]);

const active = ref(false);

const toogleActive = () => {
  active.value = !active.value;
};

let dropzoneFile = ref("");

const drop = (e) => {
  dropzoneFile.value = e.dataTransfer.files[0];
  emits("setImage", dropzoneFile.value, props.id);
};

const selectedFile = () => {
  console.log(props.id)
  console.log(document.querySelector(`.${props.id}`))
  dropzoneFile.value = document.querySelector(`.${props.id}`).files[0];
  emits("setImage", dropzoneFile.value, props.id);
};
</script>

<style lang="scss" scoped>
.card-profile {
  background-color: $color-white;
  border-radius: 8px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  &__border {
    margin-top: 24px;
    width: 100%;
    border-radius: 4px;
  }
  &__drag {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    @media (max-width: 460px) {
      width: 90%;
    }
  }
  &__input {
    display: none;
  }
  &__title {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: center;
  }
  &__upload {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color: $color-secondary;
  }
}

.active-dropzone {
  color: $color-secondary;
  border-color: $color-primary;
  background-color: $color-primary;
}

.file-info {
  display: block;
  text-align: center;
  margin-top: 6px;
}
</style>
