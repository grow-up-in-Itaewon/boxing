<template>
   <v-footer
      dark
      padless
      app
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <strong class="subheading">Social networks</strong>
          <v-spacer></v-spacer>
          
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>{{ footer }}</strong>
        </v-card-text>
      </v-card>
    </v-footer> 
</template>
<script>
export default {
    props: ['footer']
}
</script>