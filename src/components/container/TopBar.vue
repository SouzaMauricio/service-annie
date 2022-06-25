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
      to="/main"
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
      <router-link
        to="/main"
        class="flex"
      >
        <img
          src="../../assets/logo/logo_branco.png"
          class="h-12"
          alt=""
        >
      </router-link>
      <router-link
        to="/rent"
      >
        Imóveis para alugar
      </router-link>
      <router-link
        to="/sell"
      >
        Imóveis para compar
      </router-link>
      <router-link
        to="/release"
      >
        Lançamentos
      </router-link>
    </div>

    <div
      id="right-menu"
      class="flex items-center w-20 space-x-4 font-medium text-annie-second lg:w-max"
    >
      <router-link
        to="/contactUs"
        class="flex space-x-2"
      >
        <span class="text-xl text-white icon-support_agent"></span>
        <p
          class="hidden lg:block"
        >
          Fale conosco
        </p>
      </router-link>

      <router-link
        to="/favorites"
        class="text-2xl"
      >
        <div
          v-if="$store.getters.favoriteListLength === 0"
        >
          <span class="icon-favorite_outline"></span>
        </div>
        <div
          v-else
          class="relative flex"
        >
          <span class="icon-favorite"></span>
          <div
            class="absolute flex items-center justify-center w-4 h-4 text-xs text-white border border-white rounded-full left-4 bg-annie-primary -top-1"
          >
            <p>
              {{ $store.getters.favoriteListLength }}
            </p>
          </div>
        </div>
      </router-link>
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
            to="/rent"
            @click="showMenu = false"
          >
            Imóveis para alugar
          </router-link>
        </li>
        <li
          class="py-4"
        >
          <router-link
            to="/sell"
            @click="showMenu = false"
          >
            Imóveis para compar
          </router-link>
        </li>
        <li
          class="py-4"
        >
          <router-link
            to="/release"
            @click="showMenu = false"
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
