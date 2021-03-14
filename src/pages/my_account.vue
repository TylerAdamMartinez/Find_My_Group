<template>
<q-layout view="hHh lpR fFf">
  <div class="q-pa-xs flex flex-center" >
    <q-list bordered  >
      <q-item tag="label" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="white" text-color="primary">
            <q-icon name= settings />
          </q-avatar>
        </q-item-section>
        <q-item-section>Activate Dark Mode</q-item-section>
        <q-item-section side top>
          <q-toggle color="primary" v-model="IsDarkMode"/>
        </q-item-section>
      </q-item>
      <q-separator/>
        <!-------- USER's NAME ------>
      <q-expansion-item
        expand-separator
        header-class="text-primary"
        icon="perm_identity"
        label="Name/Username" >
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
        header-class="text-primary"
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
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="white" text-color="primary">
            <q-icon name= password />
          </q-avatar>
        </q-item-section>

        <q-item-section>Password</q-item-section>
      </q-item>

      <q-separator />
      <!--------------- LOGOUT ---------------->
      <q-item clickable v-ripple @click="logoutBoxDialog = true">
        <q-item-section avatar>
          <q-avatar color="white" text-color="primary">
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
            <q-btn v-close-popup label="NO!" color="primary"/>
            <q-btn label="YES" color="primary" @click="ExitProgram"/>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-separator/>
      <!----------------- DETELE ---------------->
      <q-item clickable v-ripple @click="deleteBoxDialog = true">
        <q-item-section avatar>
          <q-avatar color="white" text-color="primary">
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
          <q-btn v-close-popup label="Cancel" color="primary"/>
          <q-btn label="Delete" color="primary" @click="ExitProgram"/>
        </q-card-section>
      </q-card>
    </q-dialog>

    </q-list>
  </div>
</q-layout>
</template>

<script>
export default {
    data() {
      return {
        user: {
          name : "fonzie8507",
          email : "TylerAdamMartinez@outlook.com"
      },
      deleteBoxDialog: false,
      logoutBoxDialog: false,
      IsDarkMode: false,
    }
  },
  methods: {
    ExitProgram() {
      window.close();
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