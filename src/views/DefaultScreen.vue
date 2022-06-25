<template>
  <div
    class="flex items-center justify-center w-full pt-40"
  >
    <div>
      <div
        class="flex justify-center"
      >
        <p
          class="text-3xl opacity-75 text-bertolt-primary"
        >
          Página não encontrada :/
        </p>
      </div>
      <img
        :src="require('../assets/no-data-cuate.png')"
        class="h-96"
        alt=""
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'DefaultScreen'
}
</script>
