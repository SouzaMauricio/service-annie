<template>
  <div
    class="fixed inset-0 z-40 overflow-y-auto"
    :class="show ? 'visible' : 'invisible'"
    role="dialog"
  >
    <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
      <div
        class="fixed inset-0 transition-all duration-300 bg-gray-700 bg-opacity-75"
        :class="show ? 'opacity-100' : 'opacity-0'"
      />

      <div
        class="inline-block w-full text-left align-bottom transition-all duration-300 transform bg-white rounded shadow-xl"
        :class="(show ? 'opacity-100 scale-100 ' : 'opacity-0 scale-75 ') + maxW"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomModal',

  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxW: {
      type: String,
      default: 'max-w-lg'
    }
  }
}
</script>