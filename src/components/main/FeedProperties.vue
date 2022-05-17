<template>
  <div>
    <div
      id="sections"
      class="mb-10 space-y-6"
    >
      <LastProperties />
      <LastReleases />
    </div>
  </div>
</template>

<script>
import LastProperties from './sections/LastProperties'
import LastReleases from './sections/LastReleases'

export default {
  name: 'FeedProperties',

  components: {
    LastProperties,
    LastReleases
  }
}
</script>
