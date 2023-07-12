import { text } from '@fortawesome/fontawesome-svg-core'
import {reactive} from 'vue'

export const store = reactive({
services:[
    {
        id: 1,
        img : 'avadabarbers-trimcut-icon-before.png',
        title: 'Trim & Cut',
        text: 'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.'
},
{
    id:2,
    img:'avadabarbers-washndry-icon.png',
    title:'Wash & Dry',
    text:'Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.'
},
{
    id:3,
    img:'avadabarbers-beardtrim-icon.png', 
    title:'Beard Tidy',
    text:'Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.'
}
],
products:[
    {
        img:'brush_dark.png',
        name:'Brush',
        price:'$15.00'
    },
    {
        img:'scissors.png',
        name:'Scissors',
        price:'$85.00'
    },
    {
        img:'hot_oil_dark.png',
        name:'Hot Oil',
        price:'$15.00'
    },
    {
        img:'straight_razor_dark.png',
        name:'Straight Razor',
        price:'$30.00'
    },
]
})