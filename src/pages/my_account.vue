<template>
<q-layout view="hHh lpR fFf" :style="ShowDarkMode_bg_Grey">
  <div class="q-pa-xs flex flex-center" >
    <q-list bordered :style="ShowDarkMode_border_Orange" >
      <q-item tag="label" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="white" :text-color="ShowDarkMode_Orange">
            <q-icon name="settings" />
          </q-avatar>
        </q-item-section>
        <q-item-section>Activate Dark Mode</q-item-section>
        <q-item-section side top>
          <q-toggle :color="ShowDarkMode_Orange" v-model="IsDarkMode"/>
        </q-item-section>
      </q-item>
      <q-separator/>
      <!-------------Login/Create Account ------------>
      <q-item to="/login" exact clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="white" :text-color="ShowDarkMode_Orange">
            <q-icon name="assignment_ind" />
          </q-avatar>
        </q-item-section>

        <q-item-section>Login | Create Account</q-item-section>
      </q-item>

      <q-separator />
      <!-------- USER's NAME ------>
      <q-expansion-item
        expand-separator
        :header-class="ShowDarkMode_text_Orange"
        icon="perm_identity"
        label="Username" >
        <q-card>
          <q-card-section>
            {{ user.name }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator/>
      <!-------- E-MAIL -------->
      <q-expansion-item
        expand-separator
        :header-class="ShowDarkMode_text_Orange"
        icon="all_inbox"
        label="Email" >
        <q-card>
          <q-card-section>
            {{ user.email }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator/>
      <!------------- PASSWORD ------------>
      <q-item to="/password" exact clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="white" :text-color="ShowDarkMode_Orange">
            <q-icon name= password />
          </q-avatar>
        </q-item-section>

        <q-item-section>Password</q-item-section>
      </q-item>

      <q-separator />
      <!--------------- LOGOUT ---------------->
      <q-item clickable v-ripple @click="logoutBoxDialog = true">
        <q-item-section avatar>
          <q-avatar color="white"  v-bind:text-color="ShowDarkMode_Orange">
            <q-icon name = logout />
          </q-avatar>
        </q-item-section>

        <q-item-section>Logout</q-item-section>
      </q-item>

      <q-dialog v-model="logoutBoxDialog">
        <q-card>
          <q-card-section>
            <div class="text-h6 flex flex-center">Logout of Account</div>
          </q-card-section>
          <q-card-section class="row flex flex-center q-gutter-sm">
            <q-btn v-close-popup label="NO!" :color="ShowDarkMode_Orange"/>
            <q-btn label="YES" :color="ShowDarkMode_Orange" @click="ExitProgram"/>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-separator/>
      <!----------------- DETELE ---------------->
      <q-item clickable v-ripple @click="deleteBoxDialog = true">
        <q-item-section avatar>
          <q-avatar color="white" :text-color="ShowDarkMode_Orange">
            <q-icon name = delete />
          </q-avatar>
        </q-item-section>

        <q-item-section>Delete Account</q-item-section>
      </q-item>

    <q-dialog v-model="deleteBoxDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6 flex flex-center">Delete Account</div>
        </q-card-section>
        <q-card-section class="row items-center q-gutter-sm">
          <q-btn v-close-popup label="Cancel" v-bind:color="ShowDarkMode_Orange"/>
          <q-btn label="Delete" v-bind:color="ShowDarkMode_Orange" @click="ExitProgram"/>
        </q-card-section>
      </q-card>
    </q-dialog>

    </q-list>
  </div>
</q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
      return {
        user: {
          name : "fonzie8507",
          email : "TylerAdamMartinez@outlook.com"
      },
      deleteBoxDialog: false,
      logoutBoxDialog: false
    }
  },
  methods: {
    ExitProgram() {
      window.close();
    },
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
  }
}

</script>


<style>

.q-list {
  border: 2px solid #31CCEC;
  border-radius: 15px;
  width: 400px;
  margin-top: 45px;
}

.q-expansion-item .q-icon{
  margin-left: 7.5px;
}

</style>