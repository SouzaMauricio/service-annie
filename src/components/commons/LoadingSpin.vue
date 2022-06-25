<template>
  <div
    class="flex items-center justify-center w-full space-x-4"
    :class="py"
  >
    <span class="w-6 h-6 mr-1 -ml-1 text-2xl animate-spin icon-spinner10 text-annie-text"></span>
    <span
      v-if="text"
      class="text-annie-text"
    >
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpin',

  props: {
    text: {
      type: String,
      default: ''
    },
    py: {
      type: String,
      default: 'py-10'
    }
  }
}
</script>
