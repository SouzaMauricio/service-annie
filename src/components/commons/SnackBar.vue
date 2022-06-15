<template>
  <div
    class="z-50 px-3 py-3 text-sm transition-all duration-300 transform border border-gray-300 rounded shadow-md bg-opacity-90 text-gray-50 w-96 font-small bg-annie-text"
    :class="(show ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-y-10 ') + elementPosition"
  >
    <div class="flex items-center justify-between">
      <p class="w-5/6 text-base font-medium">
        {{ message }}
      </p>

      <div class="flex flex-row">
        <button
          class="focus:outline-none"
          @click="close()"
        >
          <span class="text-xl icon-clear"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnackBar',

  props: {
    show: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      elementPosition: 'fixed bottom-5 left-5',
      time: 5000
    }
  },

  watch: {
    show: function (val) {
      if (!val) return

      setTimeout(() => {
        this.close()
      }, this.time)
    }
  },

  methods: {
    close () {
      this.$emit('closed', true)
    }
  }
}
</script>
