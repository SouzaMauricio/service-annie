<template>
  <footer
    class="flex justify-center w-full px-10 py-6 bg-annie-primary"
  >
    <div
      class="grid flex-wrap w-full space-x-4 space-y-6 justify-items-stretch sm:justify-between sm:flex sm:space-y-0 max-w-max-content"
    >
      <div
        class="justify-self-center"
      >
        <img
          src="../../assets/logo/logo_branco.png"
          class="h-20"
          alt=""
        >

        <div
          class="flex justify-between px-4 pt-2 text-2xl text-annie-second"
        >
          <span class="icon-facebook2"></span>
          <span class="icon-instagram"></span>
          <span class="icon-whatsapp"></span>
          <span class="icon-linkedin"></span>
        </div>
      </div>

      <!-- IMÓVEIS -->
      <div
        class="space-y-3 text-white"
      >
        <p
          class="text-2xl font-medium"
        >
          Imóveis
        </p>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-local_offer"></span>
          <router-link
            class="text-lg text-medium"
            to="main"
          >
            Para Comprar
          </router-link>
        </div>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-attach_money"></span>
          <router-link
            class="text-lg text-medium"
            to="main"
          >
            Para Alugar
          </router-link>
        </div>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-star_rate"></span>
          <router-link
            class="text-lg text-medium"
            to="main"
          >
            Lançamentos
          </router-link>
        </div>
      </div>

      <!-- SERVIÇOS -->
      <div
        class="space-y-3 text-white"
      >
        <p
          class="text-2xl font-medium"
        >
          Serviços
        </p>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-house"></span>
          <router-link
            class="text-lg text-medium"
            to="main"
          >
            Venda seu imóvel
          </router-link>
        </div>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-apartment"></span>
          <router-link
            class="text-lg text-medium"
            to="main"
          >
            Alugue seu imóvel
          </router-link>
        </div>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-business_center"></span>
          <router-link
            class="text-lg text-medium"
            to="main"
          >
            Parcerias
          </router-link>
        </div>
      </div>

      <!-- ATENDIMENTO -->
      <div
        class="space-y-3 text-white"
      >
        <p
          class="text-2xl font-medium"
        >
          Atendimento
        </p>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-phone_in_talk"></span>
          <p
            class="text-lg text-medium"
          >
            (11) 97070-7070
          </p>
        </div>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-phone_in_talk"></span>
          <p
            class="text-lg text-medium"
          >
            (11) 4181-7070
          </p>
        </div>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-outgoing_mail"></span>
          <p
            class="text-lg text-medium"
          >
            andreia_imóveis@email.com
          </p>
        </div>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-support_agent"></span>
          <router-link
            class="text-lg text-medium"
            to="main"
          >
            Fale conosco
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>