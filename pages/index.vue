<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <Cv />
        <Expe />
      </v-card>
      <v-card>
        <v-card-title class="headline">my portofolio
        </v-card-title>
        <v-card-text>



          <p>Thank you  </p>
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
    </v-col>
  </v-row>
</template>

<script>
import Expe from '~/components/expe.vue'
import Cv from '~/components/Cv.vue'
export default {
  components: { Expe ,Cv },

  name: 'IndexPage'
}
</script>
