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
      v-if="loading"
      class="flex items-center justify-center w-full"
    >
      <LoadingSpin
        text="Carregando propriedades"
      />
    </div>

    <div
      v-if="!loading && propertiesList[0]"
      class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
    >
      <PropertyItem
        v-for="(property, index) in propertiesList"
        :key="index"
        :property="property"
      />
    </div>

    <SnackBar
      :show="snackBar.show"
      :message="snackBar.message"
      @closed="snackBar.show = false"
    />
  </div>
</template>

<script>
import PropertyItem from '../../cards/PropertyItem.vue'
import * as PropertiesGateway from '../../../gateway/armin/services/properties'
import SnackBar from '../../commons/SnackBar'
import LoadingSpin from '../../commons/LoadingSpin'

export default {
  name: 'LastProperties',

  components: {
    PropertyItem,
    SnackBar,
    LoadingSpin
  },

  data () {
    return {
      propertiesList: [],
      loading: false,
      loadingError: false,
      snackBar: {
        show: false,
        message: ''
      }
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
        const params = 'fields=docs(title,description,toRent,toSell,price,pictures(fullPath),localization(state,neighborhood),condominium(price,name),release,environments,propertyArea,type,cod&show=true'
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
