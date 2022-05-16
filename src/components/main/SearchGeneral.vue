<template>
  <div
    class="items-center px-4 py-2 space-y-4 text-sm bg-white rounded-md shadow-md md:px-16 md:text-lg"
  >
    <div
      class="flex items-center justify-center space-x-2 md:space-x-8"
    >
      <button
        class="px-2 py-3 font-medium hover:bg-gray-50 md:px-4 whitespace-nowrap"
        :class="typeOfSearch === 'buy' ? 'border-b-2 border-annie-primary text-annie-primary' : 'text-gray-500'"
        @click="typeOfSearch = 'buy'"
      >
        Quero Comprar
      </button>

      <button
        class="px-2 py-3 font-medium hover:bg-gray-50 md:px-4 whitespace-nowrap"
        :class="typeOfSearch !== 'buy' ? 'border-b-2 border-annie-primary text-annie-primary' : 'text-gray-500'"
        @click="typeOfSearch = 'rent'"
      >
        Quero Alugar
      </button>
    </div>
    <div
      class="flex items-center justify-center flex-1 w-full space-x-4"
    >
      <div
        class="flex items-center w-full space-x-0 border-b border-gray-400 md:space-x-2"
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
        >
      </div>

      <button
        class="hidden px-8 py-1 text-white rounded-full bg-annie-primary hover:opacity-80 md:block"
      >
        Buscar
      </button>
    </div>
    <div
      class="flex items-center justify-center space-x-4 md:justify-start"
    >
      <button
        class="flex space-x-4 font-medium"
      >
        <span>
          Filtrar
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <button
        class="block px-8 py-1 text-white rounded-full bg-annie-primary hover:opacity-80 md:hidden"
      >
        Buscar
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchGeneral',

  data () {
    return {
      typeOfSearch:'buy'
    }
  }
}

</script>
