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
      class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
    >
      <PropertyItem
        v-for="(property, index) in propertiesList"
        :key="index"
        :property="property"
      />
    </div>

  </div>
</template>

<script>
import PropertyItem from '../../cards/PropertyItem.vue'
import * as PropertiesGateway from '../../../gateway/armin/services/properties'

export default {
  name: 'LastProperties',

  components: {
    PropertyItem
  },

  data () {
    return {
      propertiesList: [],
      loading: false,
      loadingError: false
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      try {
        this.loadingError = false
        this.loading = true
        const params = 'fields=docs(title,description,toRent,toSell,price,pictures(fullPath),localization(state,neighborhood),condominium(price,name),release,environments,propertyArea,type,cod'
        const properties = await PropertiesGateway.find(params)
        this.propertiesList = properties.docs
      } catch (error) {
        this.loadingError = true
        console.error('Error: ', error)
      } finally {
        this.loading = false
      } 
    }
  }
}
</script>
