<template>
  <div
    class="w-full px-2 py-10"
  >
    <div
      class="flex justify-start"
    >
      <span
        class="text-xl font-medium text-annie-text"
      >
        Imóveis favoritados
      </span>
    </div>

    <div
      v-if="propertiesList[0]"
      class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
    >
      <PropertyItem
        v-for="(property, index) in propertiesList"
        :key="index"
        :property="property"
      />
    </div>
    <div
      v-else
      class="grid items-center w-full mt-20 justify-items-center"
    >
      <p
        class="text-lg italic font-medium text-gray-600"
      >
        Você ainda não favoritou nenhum imóvel.
      </p>
      <p
        class="font-medium text-gray-600"
      >
        Para favoritar, basta clicar no ícone de coração no card do imóvel ou no coração na tela do imóvel.
      </p>
      <img
        :src="require('../../assets/no-data-pana.png')"
        class="w-96"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import PropertyItem from '../cards/PropertyItem'

export default {
  name: 'FavoriteList',

  components: {
    PropertyItem,
  },

  data () {
    return {
      propertiesList: []
    }
  },

  mounted () {
    this.propertiesList = this.$store.getters.getFavoritesList
  }
}
</script>
