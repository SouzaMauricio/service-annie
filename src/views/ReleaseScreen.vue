<template>
  <div
    class="flex justify-center w-full h-full"
  >
    <SearchContent
      type="release"
      class="max-w-max-content"
    />
  </div>
</template>

<script>
import SearchContent from '../components/search/SearchContent'

export default {
  name: 'ReleaseScreen',

  components: {
    SearchContent
  }
}
</script>
