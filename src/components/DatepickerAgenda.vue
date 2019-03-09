<style lang="scss">

  $header-height:100px;
  $day-size:41px;

  .datepicker {
    position: absolute;
    width: 315px;
    top: 100%;
    z-index: 5;
    background-color: #fff;
    box-shadow: 0 14px 45px rgba(0,0,0,0.25), 0 10px 18px rgba(0,0,0,0.22);
  }

  .datepicker__header{
    background-color: #0097a7;
    color: #FFF;
    padding: 20px;
    height: $header-height;
  }

  .datepicker__year{
    opacity: 0.7;
    margin-bottom: 10px;
    line-height: 16px;
  }

  .datepicker__date{
    font-size: 32px;
    line-height: 32px;
  }

  .datepicker__week{
    font-size: 12px;
    line-height: 12px;
    color: rgba(0,0,0,0.8);
    padding: 0 14px;

  }

  .datepicker__weekday{
    float: left;
    width: $day-size;
    text-align: center;

  }

</style>

<template>
  <div class="datepicker">
    <div class="datepicker__header">
      <div class="datepicker__year">
        {{year}}
      </div>
      <div class="datepicker__date">
        {{date_formatted}}
      </div>
      <div class="datepicker__week">
        <div v-for="day in days" :key="day" class="datepicker__weekday">
          {{day}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Month from '../modules/month.js'
export default{
  props: ['date'],
  data: function () {
    return {
      days: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
      month: new Month(this.date.month(), this.date.year())
    }
  },
  computed: {
    year () {
      return this.date.format('YYYY')
    },
    date_formatted () {
      return this.date.format('dddd DD MM')
    }
  }
}
</script>
