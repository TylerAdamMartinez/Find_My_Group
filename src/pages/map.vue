
<template>
  <!---DISPLAYING MAP ---->
  <q-layout view="hHh lpR fFf" :style="ShowDarkMode_bg_Grey">
    <div class="flex flex-center">
      <iframe 
        :style="ShowDarkMode_border"
        width="400"
        height="400" 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        src="https://www.openstreetmap.org/export/embed.html?bbox=-109.6769428253174%2C23.485604846574866%2C-87.46258735656738%2C38.27457524235273&amp;layer=transportmap" 
        >
      </iframe>   
    </div>
  </q-layout>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('settings', ['setIsDarkMode'])
  },
  computed: {
    ...mapGetters('settings', ['settings']),
    IsDarkMode: {
      get(){
        return this.settings.IsDarkMode
      },
      set(value) {
        this.setIsDarkMode(value)
      }
    },
    ShowDarkMode_border() {
      if (!this.settings.IsDarkMode) {
        return "border-color: primary;"
      }
      else {
        return "border-color: orange;"
      }
    },
        ShowDarkMode_bg_Grey() {
      if (!this.settings.IsDarkMode) {
        return "background: white"
      }
      else {
        return "background: grey"
      }
      
    }
  }
}
</script>


<style>

iframe {
  border: 2px solid #31CCEC;
  border-radius: 15px;
  margin-top: 45px;

}

</style>