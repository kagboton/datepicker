<style>
  .datepicker__container{
    position: relative;

  }
</style>

<template>
  <div class="datepicker__container">
    <input type="text" :value="date_formatted"/>
    <input type="text" :name="name" :value="date_raw"/>
    <datepicker-agenda v-bind:date="date"></datepicker-agenda>
  </div>
</template>

<script>

import moment from 'moment'
import DatePickerAgendaComponent from './DatepickerAgenda.vue'

moment.locale('fr')
export default {
  components: {
    'datepicker-agenda': DatePickerAgendaComponent
  },

  props: {
    value: {type: String, required: true},
    format: {type: String, default: 'YYYY-MM-DD'},
    name: {type: String}

  },

  data: function () {
    return {
      date: moment(this.value, 'YYYY-MM-DD')
    }
  },

  computed: {
    date_formatted: function () {
      return this.date.format(this.format)
    },

    date_raw: function () {
      return this.date.format('YYYY-MM-DD')
    }
  }

}

</script>
