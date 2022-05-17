<template>
  <div
    class=""
  >
    <span
      class="text-xl font-medium text-annie-text"
    >
      Aproveite nossas oportunidades
    </span>
    <div
      class="flex justify-start gap-24 mt-4 overflow-y-auto scrollbar-hide xl:overflow-hidden"
    >
      <PropertyItem
      />
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
  name: 'LastProperties',

  components: {
    PropertyItem
  }
}
</script>
