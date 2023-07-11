import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fontsource/abril-fatface'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
 import { faYoutube } from '@fortawesome/free-brands-svg-icons' 
 import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
 import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
 import { faInstagram } from '@fortawesome/free-brands-svg-icons' 
 import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons' 



/* add icons to the library */
library.add(faCartShopping, faBars, faYoutube, faFacebookF, faTwitter, faInstagram, faRectangleXmark )

createApp(App).component('FontAwesomeIcon',FontAwesomeIcon).mount('#app')