<template>
  <section class="reports">
    <article class="reports__cards">
      <div class="reports__cards-box reports__cards-box-active">
        <i
          class="
            reports__cards-box-icon reports__cards-box-icon-active
            icon-payments
          "
        ></i>
        <div class="reports__cards-box-text">
          <p class="reports__cards-title">$0,00.00</p>
          <p class="reports__cards-text">Total desembolso</p>
        </div>
      </div>

      <div class="reports__cards-box">
        <i class="reports__cards-box-icon icon-money"></i>
        <div class="reports__cards-box-text">
          <p class="reports__cards-title">0</p>
          <p class="reports__cards-text">Total créditos</p>
        </div>
      </div>

      <div class="reports__cards-box">
        <i class="reports__cards-box-icon icon-users"></i>
        <div class="reports__cards-box-text">
          <p class="reports__cards-title">0</p>
          <p class="reports__cards-text">Total de usuarios</p>
        </div>
      </div>

      <div class="reports__cards-box">
        <i class="reports__cards-box-icon icon-bank"></i>
        <div class="reports__cards-box-text">
          <p class="reports__cards-title">0</p>
          <p class="reports__cards-text">Créditos Activos</p>
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

    <article class="reports__chart">
      <ColumnChartAdmin />
    </article>
  </section>
</template>

<script setup>
import AreaChartReports from "@/components/charts/AreaChartReports.vue";
import ColumnChartAdmin from "@/components/charts/ColumnChartAdmin.vue";
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
      &-active {
        background: $color-green;
        color: #fff;
      }
      &-icon {
        padding: 10px;
        background: $color-green;
        width: 40px;
        height: 40px;
        border-radius: 12px;
        color: #fff;
        font-size: 20px;
        &-active {
          background: #fff;
          color: $color-green;
        }
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
  &__chart {
    background: #fff;
    padding: 24px;
    border-radius: 16px;
    color: black;
    @media (max-width: 500px) {
      padding: 12px;
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
</style>