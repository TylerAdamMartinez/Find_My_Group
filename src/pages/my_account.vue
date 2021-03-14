<template>
 <q-layout view="hHh lpR fFf">
  <div class="q-pa-xs flex flex-center" >
    <q-list bordered  >
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <!-- USER'S ICON -->
          <q-avatar color="white" text-color="primary" icon="settings" />
        </q-item-section>
        <q-item-section>User's Icon</q-item-section>
      </q-item>
      <q-separator/>
        <!-------- USER's NAME ------>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="white" text-color="primary" icon="account_circle" />
        </q-item-section>
        <q-item-section>Name/Username</q-item-section>
      </q-item>
      <q-separator/>
      <!-------- E-MAIL -------->
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color = "white" text-color = "primary">
            <q-icon name="all_inbox"/>
          </q-avatar>
        </q-item-section>
        <q-item-section>E-mail</q-item-section>
      </q-item>
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
     <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="white" text-color="primary">
            <q-icon name = logout />
          </q-avatar>
        </q-item-section>

        <q-item-section>Logout</q-item-section>
      </q-item>
      <q-separator/>
      <!----------------- DETELE ---------------->
         <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="white" text-color="primary">
            <q-icon name = delete />
          </q-avatar>
        </q-item-section>

        <q-item-section>Delete Account</q-item-section>
      </q-item>
      <q-separator/>
      <!------------------ PREVIOUS LOCATIONS ---------------->
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="white" text-color="primary">
             <q-icon name = person_pin_circle />
        </q-avatar>
        </q-item-section>
        <q-item-section>Previous Locations</q-item-section>
      </q-item>
    </q-list>
  </div>
 </q-layout>
</template>

<script>

</script>


<style>

.q-list {
  border: 2px solid #31CCEC;
  border-radius: 15px;
  width: 400px;
  margin-top: 45px;
}

</style>