import moment from 'moment'

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    createdAt: 0,
    amount: 192
},
{
   id: '2',
   description: 'Rent',
   note: '',
   createdAt: moment(0).subtract(4, 'days').valueOf(),
   amount: 1222333
},
{
   id: '3',
   description: 'Credit Card',
   note: '',
   createdAt: moment(0).add(4, 'days').valueOf(),
   amount: 1932
}]