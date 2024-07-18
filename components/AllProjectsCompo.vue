<template>
  <div>
    <div class=" "  >
      <!-- ............................................................................................ -->
      <v-card  rounded class="flex orange darken-2 mt-2 pt-1 " >
        <a :href='proj.image' target="_blank">
        <v-img
        class="align-end text-white"
        height="200"
        :src="require(`../assets/img/${proj.src}`)"
        cover>
        <v-card-title class="grey darken-3 orange--text pa-2">{{proj.title}}</v-card-title>
        </v-img></a>
        <v-card-subtitle class="pt-4">
        Number {{proj.id}}
        </v-card-subtitle>
        <v-card-text>
        <div>{{proj.techno}}</div>
        </v-card-text>
        <v-card-actions class="pb-9">
            <a class="mx-2" :href='proj.github' target="_blank">
              <v-btn class="grey darken-3 orange--text" text="Github">Github</v-btn>
            </a>
            <v-dialog
              v-model="dialog4"
              width="900"
              >
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" class="orange lighten-4" color="orange" text="Explore">Explore</v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h5 orange lighten-2">
                  Watch {{proj.id}} Project Video
                </v-card-title>
                <v-card-actions>
                <iframe rounded class="orange pa-2 my-2 mx-auto center "
                :src='proj.explore'
                height="465" width="504" frameborder="0" allowfullscreen="" title="منشور مضمن"></iframe>
                </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
  <!-- ............................................................................................ -->
    </div>

  </div>
</template>

<script>
export default {
  name: "AllProjectsCompo",
  props:["proj"],
  data() {
    return {
  }
}

}
</script>

<style lang="scss" scoped>

</style>
