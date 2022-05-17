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
          class="relative space-y-4"
        >
          <div>
            <img
              src="../../assets/main/9.jpeg"
              class="object-cover w-full h-96"
              alt=""
            >
          </div>

          <ul
            class="flex justify-between"
          >
            <li>
              <img
                src="../../assets/main/9.jpeg"
                class="object-cover h-20 w-36"
                alt=""
              >
            </li>
            <li>
              <img
                src="../../assets/main/9.jpeg"
                class="object-cover h-20 w-36"
                alt=""
              >
            </li>
            <li>
              <img
                src="../../assets/main/9.jpeg"
                class="object-cover h-20 w-36"
                alt=""
              >
            </li>
            <li>
              <img
                src="../../assets/main/9.jpeg"
                class="object-cover h-20 w-36"
                alt=""
              >
            </li>
            <li>
              <img
                src="../../assets/main/9.jpeg"
                class="object-cover h-20 w-36"
                alt=""
              >
            </li>
          </ul>
        </div>

        <div
          class="flex justify-between text-annie-primary"
        >
          <div
            class="flex items-center space-x-2"
          >
            <span class="text-3xl icon-ruler"></span>
            <span
              class="font-medium"
            >
              Área: 80m²
            </span>
          </div>
          <div
            class="flex items-center space-x-2"
          >
            <span class="text-2xl icon-bed"></span>
            <span
              class="font-medium"
            >
              Dormitórios: 5
            </span>
          </div>
          <div
            class="flex items-center space-x-2"
          >
            <span class="text-2xl icon-bath"></span>
            <span
              class="font-medium"
            >
              Suítes: 3
            </span>
          </div>
          <div
            class="flex items-center space-x-2"
          >
            <span class="text-2xl icon-shower"></span>
            <span
              class="font-medium"
            >
              Banheiros: 6
            </span>
          </div>
          <div
            class="flex items-center space-x-2"
          >
            <span class="text-2xl icon-automobile"></span>
            <span
              class="font-medium"
            >
              Vagas: 5
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

        <div>
          <p
            class="py-2 text-xl font-medium border-b-2"
          >
            Ambientes
          </p>

          <ul
            class="mt-6"
          >
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
          </ul>
        </div>

        <div>
          <p
            class="py-2 text-xl font-medium border-b-2"
          >
            Condominio
          </p>

          <ul
            class="mt-6"
          >
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
          </ul>
        </div>

        <div>
          <p
            class="py-2 text-xl font-medium border-b-2"
          >
            O que há nas proximidades
          </p>

          <ul
            class="mt-6"
          >
            <li
              class="flex space-x-2"
            >
              <font-awesome-icon :icon="['fas', 'fa-warehouse']" />
              <p>
                Dormitórios: 5
              </p>
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
            <li>
              Dormitórios: 5
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PropertyContent'
}
</script>
