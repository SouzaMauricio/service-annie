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
            @keydown.enter="doSearch()"
          >
        </div>

        <button
          class="hidden px-8 py-1 text-white rounded-full bg-annie-primary hover:opacity-80 md:block"
          @click="doSearch()"
        >
          Buscar
        </button>
      </div>
      <div
        class="flex items-center space-x-0 text-gray-700 justify-evenly md:justify-end"
      >
        <div>
          <button
            class="flex items-center justify-between space-x-1 font-medium w-22 whitespace-nowrap"
            @click="showFilters = !showFilters"
          >
            <span>
              Filtrar
            </span>
            <span
              class="text-sm"
            >
              ({{ filterCount }})
            </span>

            <span v-if="showFilters" class="text-lg icon-keyboard_arrow_up"></span>
            <span v-else class="text-lg icon-keyboard_arrow_down"></span>
          </button>
          <div
            v-show="showFilters"
            class="relative"
          >
            <div
              class="absolute top-0 right-auto justify-start p-6 mt-2 space-y-4 overflow-auto bg-white rounded-md shadow-lg -left-10 md:right-0 ring-1 ring-black ring-opacity-5 h-max md:left-auto"
            >
              <label
                for="min-value"
              >
                <p
                  class="text-sm font-medium"
                >
                  Mínimo
                </p>
                <input
                  class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-annie-primary"
                  type="text"
                  v-model="search.minValue"
                  name="min-value"
                  id="min-value"
                  v-money="money"
                >
              </label>
              <label
                for="max-value"
              >
                <p
                  class="text-sm font-medium"
                >
                  Máximo
                </p>
                <input
                  class="w-full border border-gray-300 rounded-md focus:ring-0 focus:border-annie-primary"
                  type="text"
                  v-model="search.maxValue"
                  name="max-value"
                  id="max-value"
                  v-money="money"
                >
              </label>
              <div
                class="flex items-center space-x-2 0"
              >
                <p>
                  Dormitórios
                </p>
                <div>
                  <input
                    class="hidden peer"
                    type="radio"
                    name="bedroom_1"
                    value="1"
                    id="bedroom_1"
                    v-model="search.bedrooms"
                    @click="checkBedrooms('1')"
                  />
                  <label
                    class="flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors border border-gray-100 rounded-full shadow-sm cursor-pointer peer-checked:border-annie-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-annie-primary"
                    for="bedroom_1"
                  >
                    <span>1</span>
                  </label>
                </div>
                <div>
                  <input
                    class="hidden peer"
                    type="radio"
                    name="bedroom_2"
                    value="2"
                    id="bedroom_2"
                    v-model="search.bedrooms"
                    @click="checkBedrooms('2')"
                  />
                  <label
                    class="flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors border border-gray-100 rounded-full shadow-sm cursor-pointer peer-checked:border-annie-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-annie-primary"
                    for="bedroom_2"
                  >
                    <span>2</span>
                  </label>
                </div>
                <div>
                  <input
                    class="hidden peer"
                    type="radio"
                    name="bedroom_3"
                    value="3"
                    id="bedroom_3"
                    v-model="search.bedrooms"
                    @click="checkBedrooms('3')"
                  />
                  <label
                    class="flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors border border-gray-100 rounded-full shadow-sm cursor-pointer peer-checked:border-annie-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-annie-primary"
                    for="bedroom_3"
                  >
                    <span>3</span>
                  </label>
                </div>
                <div>
                  <input
                    class="hidden peer"
                    type="radio"
                    name="bedroom_4"
                    value="4"
                    id="bedroom_4"
                    v-model="search.bedrooms"
                    @click="checkBedrooms('4')"
                  />
                  <label
                    class="flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors border border-gray-100 rounded-full shadow-sm cursor-pointer peer-checked:border-annie-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-annie-primary"
                    for="bedroom_4"
                  >
                    <span>+4</span>
                  </label>
                </div>
              </div>
              <div
                class="flex items-center space-x-2"
              >
                <p>
                  Vagas
                </p>
                <div>
                  <input
                    class="hidden peer"
                    type="radio"
                    name="garages_1"
                    value="1"
                    id="garages_1"
                    v-model="search.garages"
                    @click="checkGarages('1')"
                  />
                  <label
                    class="flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors border border-gray-100 rounded-full shadow-sm cursor-pointer peer-checked:border-annie-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-annie-primary"
                    for="garages_1"
                  >
                    <span>1</span>
                  </label>
                </div>
                <div>
                  <input
                    class="hidden peer"
                    type="radio"
                    name="garages_2"
                    value="2"
                    id="garages_2"
                    v-model="search.garages"
                    @click="checkGarages('2')"
                  />
                  <label
                    class="flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors border border-gray-100 rounded-full shadow-sm cursor-pointer peer-checked:border-annie-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-annie-primary"
                    for="garages_2"
                  >
                    <span>2</span>
                  </label>
                </div>
                <div>
                  <input
                    class="hidden peer"
                    type="radio"
                    name="garages_3"
                    value="3"
                    id="garages_3"
                    v-model="search.garages"
                    @click="checkGarages('3')"
                  />
                  <label
                    class="flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors border border-gray-100 rounded-full shadow-sm cursor-pointer peer-checked:border-annie-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-annie-primary"
                    for="garages_3"
                  >
                    <span>3</span>
                  </label>
                </div>
                <div>
                  <input
                    class="hidden peer"
                    type="radio"
                    name="garages_4"
                    value="4"
                    id="garages_4"
                    v-model="search.garages"
                    @click="checkGarages('4')"
                  />
                  <label
                    class="flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors border border-gray-100 rounded-full shadow-sm cursor-pointer peer-checked:border-annie-primary hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-annie-primary"
                    for="garages_4"
                  >
                    <span>+4</span>
                  </label>
                </div>
              </div>
                <div>
                  <button
                    class="w-full p-2 font-medium text-white rounded-md shadow-md bg-annie-primary"
                    @click="doSearch()"
                  >
                    Aplicar filtros
                  </button>
                </div>
            </div>
          </div>
        </div>

        <button
          class="block px-8 py-1 text-white rounded-full bg-annie-primary hover:opacity-80 md:hidden"
          @click="doSearch()"
        >
          Buscar
        </button>
      </div>
    </div>
    <div
      v-if="!loading && !loadingError && !propertiesList[0]"
      class="grid items-center w-full mt-20 justify-items-center"
    >
      <p
        class="text-lg italic font-medium text-gray-600"
      >
        Nenhum resultado para a sua busca :/
      </p>
      <img
        :src="require('../../assets/no-data-pana.png')"
        class="w-96"
        alt=""
      >
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

  computed: {
    filterCount () {
      let count = 0
      if (this.search.bedrooms > 0) {
        count += 1
      }
      if (this.search.garages > 0) {
        count += 1
      }
      if (this.search.maxValue !== 'R$ 0,00') {
        count += 1
      }
      if (this.search.minValue !== 'R$ 0,00') {
        count += 1
      }
      return count
    }
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
      },
      showFilters: false,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2
      },
    }
  },

  mounted () {
    this.setQueryParams()
    this.doSearch()
  },

  methods: {
    setQueryParams () {
      const { query } = this.$route
      if (query.maxValue) this.search.maxValue = query.maxValue
      if (query.minValue) this.search.minValue = query.minValue
      if (query.bedrooms) this.search.bedrooms = query.bedrooms
      if (query.garages) this.search.garages = query.garages
      if (query.search) this.search.search = query.search
    },

    getParams () {
      let params = ''
      params += this.search.bedrooms ? `bedrooms=${this.search.bedrooms}` : ''
      params += this.search.garages ? `&garages=${this.search.garages}` : ''
      params += this.search.minValue !== 'R$ 0,00' ? `&minValue=${this.search.minValue.replace('R$ ', '').replace('.', '').replace(',', '.')}` : ''
      params += this.search.maxValue !== 'R$ 0,00' ? `&maxValue=${this.search.maxValue.replace('R$ ', '').replace('.', '').replace(',', '.')}` : ''
      params += this.search.search ? `&search=${this.search.search}` : ''
      params += '&show=true'
      if (this.type === 'rent') params += '&toRent=true'
      if (this.type === 'sell') params += '&toSell=true'
      if (this.type === 'release') params += '&type=release'
      const fields = 'fields=docs(title,description,toRent,toSell,price,pictures(fullPath),localization(state,neighborhood),condominium(price,name),release,environments,propertyArea,type,cod'
      return `${fields}&${params}`
    },

    async doSearch () {
      try {
        this.showFilters = false
        this.propertiesList = []
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

    checkGarages (selectedValue) {
      if (!this.search.garages) return
      if (selectedValue !== this.search.garages) return
      this.search.garages = 0
    },

    checkBedrooms (selectedValue) {
      if (!this.search.bedrooms) return
        if (selectedValue !== this.search.bedrooms) return
      this.search.bedrooms = 0
    }
  }
}
</script>
