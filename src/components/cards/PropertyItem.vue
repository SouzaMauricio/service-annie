<template>
  <div
    class="bg-white border border-gray-200 rounded-lg shadow-md text-annie-text min-w-[340px] w-[340px] cursor-pointer"
    @click="redirectToProperty()"
  >
    <div
    >
      <img
        :src="property.pictures[0]?.fullPath"
        class="object-cover w-full h-72"
        alt=""
      >
    </div>
    
    <div
      class="p-4 space-y-2 text-sm h-44"
    >
      <div
        class="space-y-2 font-medium"
      >
        <div
          class="flex items-center justify-between"
        >
          <span
            id="type-property"
          >
            {{ typeLabels[property.type] }}
          </span>

          <div
            class="text-2xl text-annie-primary"
          >
            <button
              v-if="$store.getters.isFavorited(property.cod)"
              @click.stop="removeFavorite()"
              class="flex items-center justify-center p-1 rounded-full hover:bg-gray-100"
            >
              <span class="icon-favorite">
              </span>
            </button>
            <button
              v-else
              @click.stop="addToFavorite()"
              class="flex items-center justify-center p-1 rounded-full hover:bg-gray-100"
            >
              <span class="icon-favorite_outline"></span>
            </button>
          </div>
        </div>
        <div
          v-if="property.type !== 'RELEASE'"
          class="flex justify-start space-x-2 whitespace-nowrap"
        >
          <span
            v-if="property.toRent"
          >
            Locação {{ formatCurrency(property.price.rent) }}
          </span>
          <span
            v-if="property.toRent && property.toSell"
          >
            -
          </span>
          <span
            v-if="property.toSell"
          >
            Venda {{ formatCurrency(property.price.sale) }}
          </span>
        </div>

        <div
          v-else
        >
          <span>
            {{ property.title }}
          </span>
        </div>

        <span
          v-if="property.type !== 'RELEASE' && property.condominium"
        >
          Condomínio: {{ formatCurrency(property.condominium.price) }}
        </span>
      </div>

      <!-- Endereço -->
      <div
        class=""
      >
        <p>
          {{ property.localization.neighborhood }}, {{ property.localization.state }}
        </p>
      </div>

      <div
        class="line-clamp-2"
      >
        {{ property?.description }}
      </div>

    </div>
    <div
      class="flex justify-between px-4 pb-4 text-sm font-medium text-annie-primary"
    >
      <div
        class="flex items-center space-x-2"
      >
        <span class="text-xl icon-straighten"></span>
        <span>
          {{ localEnvironments.area }}m²
        </span>
      </div>
      <div
        class="flex items-center space-x-2"
      >
        <span class="text-xl icon-hotel"></span>
        <span>
          {{ localEnvironments.bedroom }}
        </span>
      </div>
      <div
        class="flex items-center space-x-2"
      >
        <span class="text-lg icon-shower"></span>
        <span>
          {{ localEnvironments.bathrooms }}
        </span>
      </div>
      <div
        v-if="localEnvironments.garages"
        class="flex items-center space-x-2"
      >
        <span class="text-xl icon-directions_car"></span>
        <span>
          {{ localEnvironments.garages }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPtBrCurrency } from '../../services/formatCurrency'

export default {
  name: 'PropertyItem',

  props: {
    property: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      localEnvironments: {},
      typeLabels: {
        'APARTMENT': 'Apartamento',
        'HOUSE_IN_CONDOMINIUM': 'Casa',
        'PRIVATE_HOUSE': 'Casa',
        'RELEASE': 'Lançamento',
      },
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.setPropertyEnvironments(this.property)
    },

    setPropertyEnvironments (property) {
      if (property.type === 'RELEASE') {
        this.setReleaseEnvironments(property)
        return
      }
      this.setGeneralEnvironments(property)
    },

    setReleaseEnvironments (property) {
      const environments = [
        'bedroom',
        'bathrooms',
        'garages',
        'balcony',
        'livingroom',
        'suites',
        'area'
      ]
      environments.forEach(environment => {
        const unitEnvironmentCount = property.release.units.reduce((acc, currentUnit) => {
          if (!currentUnit[environment]) return acc
          acc.push(currentUnit[environment])
          return acc
        }, [])
        const unitEnvironmentFiltered = [...new Set(unitEnvironmentCount)]
        if (!unitEnvironmentFiltered[0]) {
          this.localEnvironments[environment] = null
          return
        }
        if (!unitEnvironmentFiltered[1]) {
          this.localEnvironments[environment] = unitEnvironmentFiltered[0]
          return
        }
        const max = Math.max(...unitEnvironmentFiltered)
        const min = Math.min(...unitEnvironmentFiltered)
        this.localEnvironments[environment] = `${min} a ${max}`
      })
    },
    
    setGeneralEnvironments (property) {
      for (let environment of Object.keys(property.environments)) {
        this.localEnvironments[environment] = property.environments[environment][0]
      }
      this.localEnvironments.area = property.propertyArea
    },

    redirectToProperty () {
      this.$router.push(`/property/${this.property.cod}`)
    },

    formatCurrency (value) {
      return formatPtBrCurrency(value)
    },

    addToFavorite () {
      this.$store.commit('addInFavoriteList', { ...this.property })
    },

    removeFavorite () {
      this.$store.commit('removeFromFavoriteList', this.property.cod)
    }
  }
}
</script>
