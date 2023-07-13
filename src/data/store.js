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
        id:1,
        img:'brush_dark.png',
        name:'Brush',
        price:'$15.00'
    },
    {
        id:2,
        img:'scissors.png',
        name:'Scissors',
        price:'$85.00'
    },
    {
        id:3,
        img:'hot_oil_dark.png',
        name:'Hot Oil',
        price:'$15.00'
    },
    {
        id:4,
        img:'straight_razor_dark.png',
        name:'Straight Razor',
        price:'$30.00'
    },
],
reviews:[{
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
    name:'John Doe',
    img:'avadabarbers-trimcut-gallery6.jpg'
},
{
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
    name:'Pete Jones',
    img:'avadabarbers-trimcut-gallery3.jpg'
},
{
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
    name:'Mark Wilson',
    img:'avadabarbers-trimcut-gallery7.jpg'
},
],
posts:[{
    id:1,
    img:'avadabarbers-second-blog-700x441.jpg',
    title:'Avada Barbers Now Open',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,'
},
{
    id:2,
    img:'avadabarbers-ourservice-blog-700x441.jpg',
    title:'Choosing The Right Barber',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,'
},
{
    id:3,
    img:'avadabarbers-choosing-blog-700x441.jpg',
    title:'The Quick Service Guide For You',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,'
}]
})