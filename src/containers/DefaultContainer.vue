<template>
  <div class="flex flex-col justify-between h-screen">
    <div>
      <TopBar
        class="sticky"
      />
      <div
        class="relative flex justify-center"
      >
        <router-view
        />
      </div>
    </div>
    <PrivacyPolicyAccept
      v-if="!$store.getters.isPrivacyPolicyAccepted"
    />
    <FooterGeneral
      class="bottom-0"
    />
  </div>
</template>

<script>
import PrivacyPolicyAccept from './PrivacyPolicyAccept'
import TopBar from '../components/container/TopBar'
import FooterGeneral from '../components/container/FooterGeneral'

export default {
  name: 'DefaultContainer',

  components: {
    TopBar,
    FooterGeneral,
    PrivacyPolicyAccept
  }
}
</script>