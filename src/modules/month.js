import moment from 'moment'
export default class Month {
  constructor (month, year) {
    let date = moment([year, month])
    console.log(date.toString())
    this.month = month
    this.year = year
  }
}
