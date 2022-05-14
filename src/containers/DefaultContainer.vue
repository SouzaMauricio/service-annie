<template>
  <div>
    <TopBar />
    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from '../components/container/TopBar'

export default {
  name: 'DefaultContainer',
  components: {
    TopBar
  }
}
</script>