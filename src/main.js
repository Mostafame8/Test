import { createApp } from 'vue';
import App from './App.vue';

import HeaderComponent from './components/HeaderComponent.vue';
import LeftComponent from './components/LeftComponent.vue';
import BoardComponent from './components/BoardComponent.vue';

const app = createApp(App);

// import draggable from 'vuedraggable';
// // app.use(draggable);
// app.component('draggable', draggable);

app.component('header-component', HeaderComponent);
app.component('left-component', LeftComponent);
app.component('board-component', BoardComponent);

app.mount('#app');
