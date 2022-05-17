<template>
  <div
    class="top-0 z-50 flex justify-between w-full h-16 px-2 py-2 shadow-md bg-annie-primary sm:px-6"
  >
    <div
      class="flex items-center w-20 h-full md:hidden text-annie-second"
    >
      <button
        class="focus:outline-none "
        @click="showMenu = !showMenu"
      >
        <svg
          v-if="!showMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <router-link
      to="main"
      class="flex md:hidden"
    >
      <img
        src="../../assets/logo/logo_branco.png"
        class="h-12"
        alt=""
      >
    </router-link>
    <div
      id="left-menu"
      class="items-center hidden space-x-4 font-medium text-annie-second md:flex"
    >
      <img
        src="../../assets/logo/logo_branco.png"
        class="h-12"
        alt=""
      >
      <router-link
        to="main"
      >
        Imóveis para alugar
      </router-link>
      <router-link
        to="main"
      >
        Imóveis para compar
      </router-link>
      <router-link
        to="main"
      >
        Lançamentos
      </router-link>
    </div>

    <div
      id="right-menu"
      class="flex items-center w-20 space-x-4 font-medium text-annie-second lg:w-max"
    >
      <router-link
        to="main"
        class="flex space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
        class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <p
          class="hidden lg:block"
        >
          Fale conosco
        </p>
      </router-link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-7 h-7"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <!-- MENU SIDE -->
    <div
      v-if="showMenu"
      class="absolute left-0 z-40 flex w-full p-4 text-lg font-medium bg-white shadow-md top-16 text-annie-primary md:hidden"
    >
      <ul
        class="content-center w-full divide-y"
      >
        <li
          class="py-4"
        >
          <router-link
            to="main"
          >
            Imóveis para alugar
          </router-link>
        </li>
        <li
          class="py-4"
        >
          <router-link
            to="main"
          >
            Imóveis para compar
          </router-link>
        </li>
        <li
          class="py-4"
        >
          <router-link
            to="main"
          >
            Lançamentos
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TopBar',

  data () {
    return {
      showMenu: false
    }
  }
}
</script>
