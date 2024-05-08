import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons' // 예시로 solid 아이콘을 가져옴
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from './store/store'

import App from './App.vue'

import 'quasar/dist/quasar.css' // Import Quasar css

// import '@quasar/extras/material-icons/material-icons.css' // Import icon libraries

library.add(fas); // Font Awesome 아이콘 라이브러리에 아이콘 추가

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon); // FontAwesomeIcon 컴포넌트를 글로벌 컴포넌트로 등록
app.use(Quasar)
app.use(store)
app.mount('#app')
