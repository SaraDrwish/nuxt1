<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="12">
    <div class="orange pa-4">
      <v-card class="logo orange pa-4 d-flex justify-center">
        <!-- <Cv />
        <Expe /> -->
      </v-card>
      <v-card class="  pa-4 ">
        <v-card-title class="headline">Portfolio
        </v-card-title>
        <v-card-text>
          <p>Thank you </p>
          <div class="text-xs-right">
            <em><small>&mdash; Sara Darwish </small></em>
          </div>
          <hr class="my-3">
          <br>
          <a
            href="https://github.com/SaraDrwish/nuxt1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <br>
          <a
            href="https://www.linkedin.com/in/sara-darwish-d?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/about"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    </v-col>
  </v-row>
</template>

<script>
import Expe from '~/components/expe.vue'
import Cv from '~/components/Cv.vue'
import SomeProjects from '~/components/SomeProjects.vue'

export default {
  components: { Expe ,Cv , SomeProjects },
  name: 'IndexPage'
}
</script>
