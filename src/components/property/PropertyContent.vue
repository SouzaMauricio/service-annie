<template>
  <section
    class="flex w-full px-4 py-8 mx-auto bg-white max-w-max-content text-annie-text"
  >
    <div
      class="sticky grid w-full gap-8 lg:items-start lg:grid-cols-3"
    >
      <div
        class="lg:space-y-14 lg:col-span-2"
      >
        <div
          class="space-y-4"
        >
          <div
            class="flex justify-between"
          >
            <div
              class="z-10 flex items-center justify-center w-12 h-auto -mr-12 bg-transparent cursor-pointer opacity-70 md:opacity-40 hover:opacity-70"
              @click="getPrevImage()"
            >
              <button
                class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full"
              >
                <span class="text-xl text-gray-800 icon-chevron-left"></span>
              </button>
            </div>
            <img
              :src="images.current.src"
              class="object-cover w-max md:w-full sm:h-96 h-52"
              alt=""
            >
            <div
              class="z-10 flex items-center justify-center w-12 h-auto -ml-12 bg-transparent cursor-pointer opacity-70 md:opacity-40 hover:opacity-70"
                @click="getNextImage()"
            >
              <button
                class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full"
              >
                <span class="text-xl text-gray-800 icon-chevron-right"></span>
              </button>
            </div>
          </div>

          <ul
            class="justify-between hidden md:flex"
          >
            <li
              v-for="(image, index) of images.defaultList"
              :key="index"
              class="cursor-pointer hover:opacity-80"
              @click="index !== 4 ? changeMainImage(image._id) : openModalPictures()"
            >
              <div
                v-if="index === 4"
                class="relative z-10 flex"
              >
                <div
                  class="flex items-center justify-center h-20 text-lg font-medium text-white bg-black w-36 opacity-70 -mr-36"
                >
                  + 30 fotos
                </div>
                <img
                  :src="image.src"
                  class="object-cover h-20 w-36"
                >
              </div>
              <img
                v-else
                :src="image.src"
                class="object-cover h-20 w-36"
              >
            </li>
          </ul>
        </div>

        <div
          class="flex justify-between mt-8 text-sm font-medium text-annie-primary lg:mt-0 md:text-base"
        >
          <div
            class="flex items-center space-x-2"
          >
            <span class="text-3xl icon-ruler"></span>
            <span
              class="hidden md:block"
            >
              Área: 
            </span>
            <span>
              80m²
            </span>
          </div>
          <div
            class="flex items-center space-x-2"
          >
            <span class="text-2xl icon-bed"></span>
            <span
              class="hidden md:block"
            >
              Dormitórios:
            </span>
            <span>
               5
            </span>
          </div>
          <div
            class="flex items-center space-x-2"
          >
            <span class="text-2xl icon-bath"></span>
            <span
              class="hidden md:block"
            >
              Suítes:
            </span>
            <span>
              3
            </span>
          </div>
          <div
            class="flex items-center space-x-2"
          >
            <span class="text-2xl icon-shower"></span>
            <span
              class="hidden md:block"
            >
              Banheiros: 
            </span>
            <span
              class="font-medium"
            >
              6
            </span>
          </div>
          <div
            class="flex items-center space-x-2"
          >
            <span class="text-2xl icon-automobile"></span>
            <span
              class="hidden md:block"
            >
              Vagas: 
            </span>
            <span>
              5
            </span>
          </div>
        </div>
      </div>

      <div
        class="top-0 h-full space-y-5 lg:top-24 lg:sticky"
      >
        <div
          class="flex justify-between w-full"
        >
          <span
            class="px-6 font-medium text-white rounded-full bg-annie-primary"
          >
            Casa
          </span>

          <div
            class="flex space-x-2 text-sm"
          >
            <div
              class="flex items-center space-x-2"
            >
              <span>
                Favoritar
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-annie-primary"
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
            <div
              class="flex items-center space-x-2"
            >
              <span>
                Compartilhar
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-annie-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <p
            class="text-xl font-medium"
          >
            Casa com imenso jardim
          </p>
        </div>

        <div
          class="block"
        >
          <p>
            Rua das Américas, 519
          </p>
          <p>
            Moema, São Paulo - SP
          </p>
        </div>

        <div
          class="text-xl font-semibold"
        >
          <p>
            Venda: R$ 3.000.000,00
          </p>
          <p>
            Locação: R$ 3.000,00
          </p>
        </div>

        <div
          class="p-4 border rounded-md"
        >
          <p
            class="mb-4 text-lg font-medium"
          >
            Fale com o corretor
          </p>
          
          <div
            class="space-y-4"
          >
            <label
              for="name"
              class="block"
            >
              <p
                class="text-sm"
              >
                Nome
              </p>
              <input
                class="w-full border-gray-300 rounded-md focus:ring-0"
                type="text"
                name="name"
                id="name"
              >
            </label>
            <label
              for="email"
              class="block"
            >
              <p
                class="text-sm"
              >
                Email
              </p>
              <input
                class="w-full border-gray-300 rounded-md focus:ring-0"
                type="text"
                name="email"
                id="email"
              >
            </label>
            <label
              for="phone"
              class="block"
            >
              <p
                class="text-sm"
              >
                Contato
              </p>
              <input
                class="w-full border-gray-300 rounded-md focus:ring-0"
                type="text"
                name="phone"
                id="phone"
              >
            </label>
            <label
              for="contact"
              class="block"
            >
              <p
                class="text-sm"
              >
                Preferência de contato
              </p>
              <select
                class="w-full border-gray-300 rounded-md focus:ring-0"
                name="contact"
                id="contact"
              >
                <option value="">Whatsapp</option>
                <option value="">Email</option>
                <option value="">Ligação</option>
              </select>
            </label>
          </div>
          <div
            class="flex items-center justify-between mt-4"
          >
            <button
              class="px-6 py-1 text-white rounded-full bg-annie-primary"
            >
              Enviar
            </button>

            <p
              class="text-xs"
            >
              Código do imóvel: AP220578
            </p>
          </div>
        </div>
      </div>

      <div
        class="lg:col-span-2 lg:-mt-20 text-annie-text lg:space-y-10"
      >
        <div>
          <p
            class="py-2 text-xl font-medium border-b-2"
          >
            Sobre o imóvel
          </p>
          
          <p
            class="mt-6"
          >Lorem ipsum dolor sit amet. Et voluptatem dolor et internos iure sit ipsa corrupti. 33 aliquam dicta aut fuga facere aut obcaecati inventore. Ut placeat saepe ut quia mollitia ut tempora exercitationem aut voluptate quae id error dolorem rem dolor distinctio.
            Ut possimus corporis non ratione dicta nam quasi nostrum et praesentium necessitatibus cum molestias deserunt est ipsam sint! Aut Quis dolores ab corrupti quisquam non inventore tempora aut molestiae animi At quia veniam. In omnis voluptatem vel deleniti unde non optio minus id expedita odio.
          </p>
        </div>

        <div
          class="mt-6"
        >
          <p
            class="py-2 text-xl font-medium border-b-2"
          >
            Ambientes
          </p>

          <ul
            class="grid grid-cols-2 gap-6 mt-6 sm:grid-cols-3"
          >
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-bed"></span>
              <span>
                Dormitórios: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-shower"></span>
              <span>
                Banheiros: 5
              </span>
            </li>
            <li>
              <span class="text-xl icon-bath"></span>
              <span>
                Suítes: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-automobile"></span>
              <span>
                Vagas: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-tv"></span>
              <span>
                Salas: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-cloudy"></span>
              <span>
                Varandas: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-cutlery"></span>
              <span>
                Cozinhas: 5
              </span>
            </li>
          </ul>
        </div>

        <div
          class="mt-6"
        >
          <p
            class="py-2 text-xl font-medium border-b-2"
          >
            Condomínio
          </p>

          <ul
            class="grid grid-cols-2 gap-6 mt-6 sm:grid-cols-3"
          >
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-bed"></span>
              <span>
                Dormitórios: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-shower"></span>
              <span>
                Banheiros: 5
              </span>
            </li>
            <li>
              <span class="text-xl icon-bath"></span>
              <span>
                Suítes: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-automobile"></span>
              <span>
                Vagas: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-tv"></span>
              <span>
                Salas: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-cloudy"></span>
              <span>
                Varandas: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-cutlery"></span>
              <span>
                Cozinhas: 5
              </span>
            </li>
          </ul>
        </div>

        <div
          class="mt-6"
        >
          <p
            class="py-2 text-xl font-medium border-b-2"
          >
            O que há nas proximidades
          </p>

          <ul
            class="grid grid-cols-2 gap-6 mt-6 sm:grid-cols-3"
          >
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-bed"></span>
              <span>
                Dormitórios: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-shower"></span>
              <span>
                Banheiros: 5
              </span>
            </li>
            <li>
              <span class="text-xl icon-bath"></span>
              <span>
                Suítes: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-automobile"></span>
              <span>
                Vagas: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-tv"></span>
              <span>
                Salas: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span class="text-xl icon-cloudy"></span>
              <span>
                Varandas: 5
              </span>
            </li>
            <li
              class="flex space-x-2"
            >
              <span :class="iconTest"></span>
              <span>
                Cozinhas: 5
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PropertyContent',

  data () {
    return {
      iconTest:'text-xl icon-cutlery',
      images: {
        current: {},
        defaultList: [
          {
            src: 'https://source.unsplash.com/random/600x300?sig=1',
            _id: '1'
          },
          {
            src: 'https://source.unsplash.com/random/600x300?sig=2',
            _id: '2'
          },
          {
            src: 'https://source.unsplash.com/random/600x300?sig=3',
            _id: '3'
          },
          {
            src: 'https://source.unsplash.com/random/600x300?sig=4',
            _id: '4'
          },
          {
            src: 'https://source.unsplash.com/random/600x300?sig=5',
            _id: '5'
          }
        ],
        allList: [
          {
            src: 'https://source.unsplash.com/random/600x300?sig=1',
            _id: '1'
          },
          {
            src: 'https://source.unsplash.com/random/600x300?sig=2',
            _id: '2'
          },
          {
            src: 'https://source.unsplash.com/random/600x300?sig=3',
            _id: '3'
          },
          {
            src: 'https://source.unsplash.com/random/600x300?sig=4',
            _id: '4'
          },
          {
            src: 'https://source.unsplash.com/random/600x300?sig=5',
            _id: '5'
          },
          {
            src: 'https://source.unsplash.com/random/600x300?sig=6',
            _id: '6'
          },
          {
            src: 'https://source.unsplash.com/random/600x300?sig=7',
            _id: '7'
          },
          {
            src: 'https://source.unsplash.com/random/600x300?sig=8',
            _id: '8'
          }
        ]
      }
    }
  },
  
  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.images.current = this.images.defaultList[0]
    },
    
    getPrevImage () {
      const index = this.images.allList.findIndex(image => image._id ===
        this.images.current._id)
      const prevImageIndex = index - 1
      console.log(prevImageIndex)
      if (!this.images.allList[prevImageIndex]) {
        this.images.current = this.images.allList[this.images.allList.length - 1]
        return
      }
      this.images.current = this.images.allList[prevImageIndex]
    },

    getNextImage () {
      const index = this.images.allList.findIndex(image => image._id === this.images.current._id)
      const nextImageIndex = index + 1
      if (!this.images.allList[nextImageIndex]) {
        this.images.current = this.images.allList[0]
        return
      }
      this.images.current = this.images.allList[nextImageIndex]
    },

    changeMainImage (imageId) {
      this.images.current = this.images.defaultList.find(image => image._id === imageId)
    }
  }
}
</script>
