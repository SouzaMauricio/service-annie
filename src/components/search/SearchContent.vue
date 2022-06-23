<template>
  <div
    class="flex-1 w-full h-full p-10 mb-20"
  >
    <div
      class="items-center justify-between block w-full space-x-0 space-y-4 md:flex md:space-x-4 md:space-y-0"
    >
      <p
        class="text-2xl font-medium text-annie-text"
      >
        {{ pageTitle[type] }}
      </p>
      <div
        class="flex items-center justify-center flex-1 w-full"
      >
        <div
          class="flex items-center w-full space-x-0 border-b border-gray-400 md:w-1/2 md:space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            class="w-full text-sm border-0 outline-0 focus:ring-0 md:text-lg"
            placeholder="Região, empreendimento ou código"
            v-model="search.search"
          >
        </div>

        <button
          class="hidden px-8 py-1 text-white rounded-full bg-annie-primary hover:opacity-80 md:block"
          @click="redirectToSearch()"
        >
          Buscar
        </button>
      </div>
      <div
        class="flex items-center justify-center space-x-4 md:justify-start"
      >
        <button
          class="flex items-center space-x-4 font-medium"
          @click="showFilters = !showFilters"
        >
          <span>
            Filtrar
          </span>

          <span v-if="showFilters" class="text-lg icon-keyboard_arrow_up"></span>
          <span v-else class="text-lg icon-keyboard_arrow_down"></span>
        </button>

        <button
          class="block px-8 py-1 text-white rounded-full bg-annie-primary hover:opacity-80 md:hidden"
        >
          Buscar
        </button>
      </div>
    </div>
    <div
      v-if="!loading && !loadingError && !propertiesList[0]"
      class="flex items-center justify-center w-full mt-20"
    >
      <p
        class="text-lg italic text-gray-600"
      >
        Nenhum resultado para sua busca :/
      </p>
    </div>
    <div
      v-if="loading"
      class="flex items-center justify-center w-full"
    >
      <LoadingSpin
        text="Buscando propriedades..."
      />
    </div>
    <div
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
import PropertyItem from '../cards/PropertyItem'
import * as PropertiesGateway from '../../gateway/armin/services/properties'
import SnackBar from '../commons/SnackBar'
import LoadingSpin from '../commons/LoadingSpin'

export default {
  name: 'SearchContent',

  props: {
    type: {
      type: String,
      required: true
    }
  },

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
      pageTitle: {
        rent: 'Alugar',
        sell: 'Comprar',
        release: 'Lançamento'
      },
      search: {
        bedrooms: 0,
        garages: 0,
        minValue: 0,
        maxValue: 0,
        search: ''
      },
      snackBar: {
        show: false,
        message: ''
      }
    }
  },

  mounted () {
    this.setQueryParams()
    this.init()
  },

  methods: {
    async init () {
      try {
        this.loadingError = false
        this.loading = true
        const params = this.getParams()
        const properties = await PropertiesGateway.find(params)
        this.propertiesList = properties.docs
      } catch (error) {
        this.loadingError = true
        console.error('Error: ', error)
      } finally {
        this.loading = false
      }
    },

    setQueryParams () {
      const { query } = this.$route
      if (query.maxValue) this.search.maxValue = query.maxValue.replace('.', '').replace(',', '.')
      if (query.minValue) this.search.minValue = query.minValue.replace('.', '').replace(',', '.')
      if (query.bedrooms) this.search.bedrooms = query.bedrooms
      if (query.garages) this.search.garages = query.garages
      if (query.search) this.search.search = query.search
    },

    getParams () {
      let params = ''
      params += this.search.bedrooms ? `bedrooms=${this.search.bedrooms}` : ''
      params += this.search.garages ? `&garages=${this.search.garages}` : ''
      params += this.search.minValue ? `&minValue=${this.search.minValue}` : ''
      params += this.search.maxValue ? `&maxValue=${this.search.maxValue}` : ''
      params += this.search.search ? `&search=${this.search.search}` : ''
      if (this.type === 'rent') params += '&toRent=true'
      if (this.type === 'sell') params += '&toSell=true'
      if (this.type === 'release') params += '&type=release'
      const fields = 'fields=docs(title,description,toRent,toSell,price,pictures(fullPath),localization(state,neighborhood),condominium(price,name),release,environments,propertyArea,type,cod'
      return `${fields}&${params}`
    }
  }
}
</script>
