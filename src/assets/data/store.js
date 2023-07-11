import {reactive} from 'vue'

const store = reactive({
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
]
})