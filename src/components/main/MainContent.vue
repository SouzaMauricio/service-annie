<template>
  <div
    class="w-full h-full space-y-10 bg-white"
  >
    <div
      id="image-top-main"
      class="grid w-full justify-items-center"
    >
      <img
        src="../../assets/main/9.jpeg"
        class="object-cover w-full h-40 md:h-72 lg:h-96"
        alt=""
      >
      <SearchGeneral
        class="z-0 w-3/4 h-48 my-0 -mt-24 lg:w-1/2"
      />
    </div>

    <div
      class="flex justify-center w-full h-full px-4 py-5 md:px-10"
    >
      <FeedProperties
        class="w-full max-w-max-content"
      />
    </div>
  </div>
</template>

<script>
import SearchGeneral from './SearchGeneral'
import FeedProperties from './FeedProperties'

export default {
  name: 'MainContent',

  components: {
    SearchGeneral,
    FeedProperties
  }
}

</script>
