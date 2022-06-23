<template>
  <div
    class="flex justify-center w-full h-full"
  >
    <SearchContent
      type="sell"
      class="max-w-max-content"
    />
  </div>
</template>

<script>
import SearchContent from '../components/search/SearchContent'

export default {
  name: 'SellScreen',

  components: {
    SearchContent
  }
}
</script>
