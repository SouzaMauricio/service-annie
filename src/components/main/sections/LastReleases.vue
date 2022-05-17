<template>
  <div>
    <span
      class="text-xl font-medium text-annie-text"
    >
      Lançamentos
    </span>
    <div
      class="flex justify-start gap-16 mt-4 overflow-y-auto scrollbar-hide"
    >
      <PropertyItem
      />
      <PropertyItem
      />
    </div>
  </div>
</template>
<script>
import PropertyItem from '../../cards/PropertyItem.vue'

export default {
  name: 'LastReleases',

  components: {
    PropertyItem
  }
}
</script>
