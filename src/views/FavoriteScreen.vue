<template>
  <div
    class="flex justify-center w-full h-full"
  >
    <FavoritesList
      class="max-w-max-content"
    />
  </div>
</template>

<script>
import FavoritesList from '../components/favorite/FavoritesList'

export default {
  name: 'FavoriteScreen',

  components: {
    FavoritesList
  }
}
</script>
