<template>
  <div
    class="bg-white border border-gray-200 rounded-lg shadow-md text-annie-text min-w-[320px] w-[320px] cursor-pointer"
    @click="redirectToProperty()"
  >
    <div>
      <img
        src="../../assets/main/image.png"
        class="object-cover w-full h-72"
        alt=""
      >
    </div>
    
    <div
      class="p-4 space-y-2 text-sm h-44"
    >
      <div
        class="font-medium"
      >
        <div
          class="flex justify-between"
        >
          <span
            id="type-property"
          >
            Casa
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-annie-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <div
          class="flex justify-start space-x-2"
        >
          <span>
            Locação R$ 3000,00
          </span>
          <span>
            -
          </span>
          <span>
            Venda R$ 3000,00
          </span>
        </div>

        <span>
          Condomínio: R$ 400
        </span>
      </div>

      

      <!-- Endereço -->
      <div
        class=""
      >
        <p>
          Moema, São Paulo
        </p>
      </div>

      <div
        class="line-clamp-2"
      >
        Casa perto do shopping, com um amplo quintal e muitas outras coisas que você pode ver na descrição e verá que é bem toooop
      </div>

    </div>
    <div
      class="flex justify-between px-4 pb-4 text-sm font-medium text-annie-primary"
    >
      <div
        class="flex items-center space-x-2"
      >
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />

          <span>
            80m²
          </span>
        </svg>
      </div>
      <div
        class="flex items-center space-x-2"
      >
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />

          <span>
            5
          </span>
        </svg>
      </div>
      <div
        class="flex items-center space-x-2"
      >
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />

          <span>
            3
          </span>
        </svg>
      </div>
      <div
        class="flex items-center space-x-2"
      >
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />

          <span>
            4
          </span>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyItem',

  methods: {
    redirectToProperty () {
      this.$router.push('/property')      
    }
  }
}
</script>
