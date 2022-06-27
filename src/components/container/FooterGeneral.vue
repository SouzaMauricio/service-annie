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
          <a
            href="https://www.facebook.com/andreianegociosimobiliarioss"
            target="_blank"
          >
            <span class="icon-facebook2"></span>
          </a>
          <a
            href="https://www.instagram.com/andreianegociosimobiliarios/"
            target="_blank"
          >
            <span class="icon-instagram"></span>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511943394782&text=Ol%C3%A1,%20gostaria%20de%20ajuda%20para%20encontar%20um%20im%C3%B3vel!"
            target="_blank"
          >
            <span class="icon-whatsapp"></span>
          </a>
          <!-- <a
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <span class="icon-linkedin"></span>
          </a> -->
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
            to="/sell"
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
            to="/rent"
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
            to="release"
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
            to="contactUs?type=SELL_MY_PROPERTY"
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
            to="contactUs?type=RENT_MY_PROPERTY"
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
            to="contactUs?type=PARTNERSHIPS"
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
            (11) 94339-4782
          </p>
        </div>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-phone_in_talk"></span>
          <p
            class="text-lg text-medium"
          >
            (11) 99831-8750
          </p>
        </div>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-outgoing_mail"></span>
          <p
            class="text-lg text-medium"
          >
            andreia.santos10@creci.org.br
          </p>
        </div>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-support_agent"></span>
          <router-link
            class="text-lg text-medium"
            to="/contactUs"
          >
            Fale conosco
          </router-link>
        </div>

        <div
          class="flex items-center space-x-2"
        >
          <span class="text-xl text-white icon-security"></span>
          <router-link
            class="text-lg text-medium"
            to="/privacyPolicy"
          >
            Política de Privacidade e Cookies
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>