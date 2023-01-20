<template>
  <div id="app">
    <HeaderComponent />
    <HomeComponent />
    <FooterComponent />
  </div>
</template>

<script>
import './styles/global.css'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import HomeComponent from './pages/HomeComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeComponent,
    FooterComponent
  }
}

</script>
