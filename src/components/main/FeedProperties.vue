<template>
  <div>
    <span
      class="text-xl font-medium text-annie-primary"
    >
      Aproveite nossas oportunidades
    </span>

    <div
      class="flex flex-wrap justify-between mt-4"
    >
      <PropertyItem
        class="w-96"
      />
    </div>
  </div>
</template>

<script>
import PropertyItem from '../cards/PropertyItem.vue'

export default {
  name: 'FeedProperties',

  components: {
    PropertyItem
  }
}
</script>
