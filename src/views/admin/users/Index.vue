<template>
  <section id="clients">
    <div class="tab">
      <div class="tab__flex">
        <InputSearch placeholder="Buscar" :require="false" />
        <ButtonColor class="tab__flex-btn" text="Descargar" />
      </div>
      <div class="tab-content">
        <div class="tab-info">
          <section class="wallet">
            <article class="wallet__table__container">
              <article class="wallet__table__table">
                <article class="wallet__table__table-header">
                  <p>ID</p>
                  <p>Nombre</p>
                  <p>Email</p>
                  <p>Créditos</p>
                  <p>Estado</p>
                  <p>Acciones</p>
                </article>
                <article
                  class="wallet__table__table-row"
                  v-for="element in 2"
                  :key="element"
                >
                  <p>1</p>
                  <p>Nombre completo</p>
                  <p>Nombre@email.com</p>
                  <p>2</p>
                  <div>
                    <span></span>
                    <p>Active</p>
                  </div>
                  <p>...</p>
                </article>
              </article>
            </article>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
            ></b-pagination>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import InputSearch from "@/components/form/InputSearch.vue";
import ButtonColor from "@/components/form/ButtonColor.vue";
import { ref } from "@vue/reactivity";

const currentPage = ref(1);
const rows = ref(50);
const perPage = ref(5);
</script>

<style lang="scss">
#clients {
  padding: 24px;
  background: #ffffff;
  border-radius: 4px;
  .tab {
    display: flex;
  flex-direction: column;
  gap: 24px;
    &__flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-btn {
        width: fit-content;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
  .wallet {
    display: flex;
  flex-direction: column;
  gap: 24px;
    border-radius: 8px;
    &__table {
      &__container {
        overflow: hidden;
      }
      &__title {
        display: flex;
        justify-content: space-between;
        input {
          max-width: 300px;
        }
      }
      @include Table(5);
    }
    .pagination {
      justify-content: center !important;

      .page-item {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        .page-link {
          display: inline-block;
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 100%;
          color: $font-primary;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0px;
          text-align: center;
          background-color: transparent !important;
          &:focus {
            box-shadow: none;
          }
        }
        &.active > .page-link {
          color: white;
          background: $font-primary !important;
        }
      }
    }
    &__img {
      display: inline-block;
      margin: 0 auto;
      cursor: pointer;
    }
  }
}
</style>
