<template>
  <q-layout :style="ShowDarkMode_bg_Grey">
  <!-- DROP DOWN MENU FOR LOGIN -->
<div id="top_space"></div>
<div id="container">
<span></span>
<div id="login_menu" class="q-pa-md row justify-center" :style="ShowDarkMode_border_Orange">
  <div >
    <Auth />
  </div>
  <!-- DROPDOWN MENU FOR NEW MEMBER -->
  <div class="q-pa-md row justify-center">
    <Register />
  </div>
</div>
<span></span>
</div>

  
</q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      AuthFromData: {
        email: 'email@email.com',
        password: '*********'
      }  
    }
  },
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
    ShowDarkMode_Orange() {
      if (!this.settings.IsDarkMode) {
        return "primary"
      }
      else {
        return "orange"
      }
    },
    ShowDarkMode_text_Orange() {
      if (!this.settings.IsDarkMode) {
        return "text-primary"
      }
      else {
        return "text-orange"
      }
      
    },
    ShowDarkMode_border_Orange() {
      if (!this.settings.IsDarkMode) {
        return "border-color: #31CCEC"
      }
      else {
        return "border-color: orange"
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
  },
  components: {
    'Auth' : require('components/Auth.vue').default,
    'Register' : require('components/Register.vue').default
  }
}

</script>

<style>
.q-btn-dropdown {
  margin: 15px;
  width: 350px;
}

#login_list {
  border: 2px solid #31CCEC;
  border-radius: 5px;
  align-items: center;
}

#login_menu {
  border: 2px solid #31CCEC;
  border-radius: 15px;
  width: 400px;
  
}

#container {
  display: grid;
  grid-template-columns: auto 400px auto;
}

#top_space {
  padding-top: 45px;
}



</style>