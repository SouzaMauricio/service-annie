<template>
  <div
    class="w-full"
  >
    <PropertyContent
      :property-cod="propertyCod"
    />
  </div>
</template>

<script>
import PropertyContent from '../components/property/PropertyContent'

export default {
  name: 'PropertyScreen',

  components: {
    PropertyContent
  },

  data () {
    return {
      propertyCod: this.$route.params.cod      
    }
  }
}

</script>
