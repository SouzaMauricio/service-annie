<template>
  <div class="flex flex-col">
    <TopBar />
    <div>
      <router-view
        class="h-auto"
      />
    </div>
    <FooterGeneral
      class="bottom-0"
    />
  </div>
</template>

<script>
import TopBar from '../components/container/TopBar'
import FooterGeneral from '../components/container/FooterGeneral'

export default {
  name: 'DefaultContainer',

  components: {
    TopBar,
    FooterGeneral
  }
}
</script>