<template>
  <div
    class="flex justify-center w-full h-full"
  >
    <ContactUsForm
      class="max-w-max-content"
    />
  </div>
</template>

<script>
import ContactUsForm from '../components/contact/ContactUsForm'

export default {
  name: 'ContactUsScreen',

  components: {
    ContactUsForm
  }
}
</script>
