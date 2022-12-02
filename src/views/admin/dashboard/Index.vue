<template>
  <section class="reports">
    <article class="reports__cards">
      <div
        v-for="(info, index) in data"
        class="reports__cards-box"
        @click="active(index)"
        :class="activeClass === index ? `active` : ''"
      >
        <i class="reports__cards-box-icon" :class="`icon-${info.icon}`"></i>
        <div class="reports__cards-box-text">
          <p class="reports__cards-title">{{ info.value }}</p>
          <p class="reports__cards-text">{{ info.text }}</p>
        </div>
      </div>
    </article>

    <article class="reports__chart">
      <div class="reports__chart-btns">
        <div class="">
          <h2 class="subtitle">Solicitudes</h2>
          <p>Aprobadas y rechazadas</p>
        </div>
        <div class="reports__chart-box">
          <div class="reports__chart-box-a">
            <div class="icon"></div>
            <p>Aprobadas</p>
          </div>
          <div class="reports__chart-box-a reports__chart-box-a-red">
            <div class="iconRed"></div>
            <p>Rechazadas</p>
          </div>
        </div>
      </div>

      <div class="reports__coins">
        <div class="reports__coins-left">
          <div>
            <p class="reports__coins-left-title"></p>
            <p class="reports__coins-left-text"></p>
          </div>
        </div>

        <div class="reports__coins-flex">
          <div class="reports__coins-right">
            <img src="" alt="" />
            <div>
              <p class="reports__coins-right-title"></p>
              <p class="reports__coins-right-text"></p>
            </div>
          </div>
        </div>
      </div>
      <area-chart-reports />
    </article>

    <section class="reports__chartBox">
      <article class="reports__chart">
        <div class="reports__chart-header">
          <div>
            <h3 class="subtitle">Ultimos 7 dias</h3>
            <p>Solicitudes de créditos</p>
          </div>
          <select class="reports__chart-header-select" name="" id="">
            <option value="">Semanal</option>
          </select>
        </div>
        <ColumnChartAdmin />
      </article>

      <article class="reports__chart">
        <h3 class="subtitle">Categoría de créditos activos</h3>
        <pie-chart-admin />
      </article>
    </section>

    <section class="reports__chart">
      <div class="reports__chart-header">
        <div>
          <h3 class="subtitle">Pagos créditos recientes</h3>
          <p>Últios 7días</p>
        </div>
        <select class="reports__chart-header-select" name="" id="">
          <option value="">Semanal</option>
        </select>
      </div>

      <article class="table">
        <section class="programs" v-for="x in 4" :key="x">
          <article class="programs__box">
            <p class="programs__box-title">Nombre</p>
            <p class="programs__box-text">Nombre completo</p>
          </article>
          <article>
            <p class="programs__box-title">Crédito</p>
            <p class="programs__box-text">00000001</p>
          </article>
          <article>
            <p class="programs__box-title">Fecha</p>
            <p class="programs__box-text">Octubre 00 de 0000</p>
          </article>
          <article>
            <p class="programs__box-title">Monto</p>
            <p class="programs__box-text">Aprobado</p>
          </article>
          <article>
            <p class="programs__box-title">Estado</p>
            <p class="programs__box-text">Aprobado</p>
          </article>
        </section>
      </article>
      <b-pagination
      class="footer"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </section>
  </section>
</template>

<script setup>
import AreaChartReports from "@/components/charts/AreaChartReports.vue";
import ColumnChartAdmin from "@/components/charts/ColumnChartAdmin.vue";
import PieChartAdmin from "@/components/charts/PieChartAdmin.vue";
import { ref } from "vue";

const data = [
  { value: "$0,00.00", text: "Total desembolso", icon: "payments" },
  { value: "0", text: "Total créditos", icon: "money" },
  { value: "0", text: "Total de usuarios", icon: "users" },
  { value: "0", text: "Créditos Activos", icon: "bank" },
];
const activeClass = ref(0);

const active = (index) => {
  activeClass.value = index;
};
</script>

<style lang="scss" scoped>
.reports {
  display: flex;
  flex-direction: column;
  gap: 32px;
  &__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    @media (max-width: 1290px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
    &-box {
      display: flex;
      align-items: center;
      padding: 16px;
      gap: 16px;
      border-radius: 16px;
      background: #fff;
      cursor: pointer;

      &-icon {
        padding: 10px;
        background: $color-green;
        width: 40px;
        height: 40px;
        border-radius: 12px;
        color: #fff;
        font-size: 20px;
      }
    }
    &-title {
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;
    }
    &-text {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      text-align: left;
    }
  }

  .active {
    background: $color-green;
    color: #fff;
    .reports__cards-box-icon {
      background: #fff;
      color: $color-green;
    }
  }

  &__chartBox {
    display: grid;
    grid-template-columns: 60% 1fr;
    justify-content: space-between;
    gap: 24px;
    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }
  &__chart {
    background: #fff;
    padding: 24px;
    border-radius: 16px;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 500px) {
      padding: 12px;
    }
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-select {
        padding: 12px 16px;
        border: 1px solid #eef0f1;
        border-radius: 16px;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        cursor: pointer;
      }
    }
    &-btns {
      display: flex;
      justify-content: space-between;
      @media (max-width: 950px) {
        flex-direction: column;
      }
    }
    &-box {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      &-a {
        display: flex;
        padding: 16px;
        gap: 16px;
        background: rgba(14, 176, 122, 0.05);
        border-radius: 12px;
        cursor: pointer;
        align-items: center;
        & > p {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          text-align: left;
        }
        &-red {
          background: rgba(176, 14, 14, 0.05);
        }
      }
    }
  }
}
.icon {
  width: 24px;
  height: 24px;
  background: #0eb07a;
  border-radius: 7px;
}
.iconRed {
  width: 24px;
  height: 24px;
  background: #b00e0e;
  border-radius: 7px;
}

.table {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.programs {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  padding: 16px;
  border: 1px solid #ececee;
  border-radius: 8px;
  &__box {
    &-title {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      text-align: left;
    }
    &-text {
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
    }
  }
}

.footer{
  justify-content: center !important;
}
</style>