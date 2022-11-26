
<template>
  <section>
    <p class="textUP"><span class="textUP-span">*</span> Upload document</p>
    <div class="card-profile">
      <label
        :for="id"
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
          <div class="card-profile__title">
            <b>Arrastra</b> tu imagen aquí, o <b> búscala en tu ordenador</b>
            <p class="card-profile__upload">Sube archivos de hasta 8gb</p>
          </div>
          <span class="file-info">{{ dropzoneFile.name }}</span>
        </div>
      </label>
    </div>
    <p class="titleDown">Document DL, ID or Passaport.</p>
  </section>
</template>

<script setup>
import { ref } from "vue";

name: "DropZone";
const props = defineProps({
  title: String,
  text: String,
  id: String,
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
  console.log(props.id);
  console.log(document.querySelector(`.${props.id}`));
  dropzoneFile.value = document.querySelector(`.${props.id}`).files[0];
  emits("setImage", dropzoneFile.value, props.id);
};
</script>

<style lang="scss" scoped>
.card-profile {
  background-color: white;
  border-radius: 8px;
  border: 1px dashed #132d7c;
  padding: 16px 28px;
  &__border {
    width: 100%;
    border-radius: 4px;
  }
  &__drag {
  }
  &__input {
    display: none;
  }
  &__title {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
  &__upload {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color: #686c75;
  }
}

.active-dropzone {
  background-color: rgba(51, 106, 179, 0.05);
}

.file-info {
  display: block;
  text-align: center;
  margin-top: 6px;
}

.textUP {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin-bottom: 8px;
  &-span {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #ff4e78;
  }
}

.titleDown{
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0px;
text-align: left;
color:#686C75 ;
}
</style>
