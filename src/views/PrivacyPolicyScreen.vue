<template>
  <div
    class="flex justify-center w-full h-full"
  >
    <PrivacyPolicy
      class="max-w-max-content"
    />
  </div>
</template>

<script>
import PrivacyPolicy from '../components/policy/PrivacyPolicy'

export default {
  name: 'PrivacyPolicyScreen',

  components: {
    PrivacyPolicy
  }
}
</script>
