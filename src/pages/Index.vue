
<template>
  <q-layout view="hHh lpR fFf">
    <!---- MESSAGE BOX ----->
    <q-page-container>
      <div class="q-pa-md row justify-center" >
        <div style="width: 100%; max-width: 400px">
          <!--- TOP MESSAGES GET DISPLAYED LAST----->
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['Heyyy you awake?']"
            stamp="15 minutes ago"
            sent
            bg-color="amber-7"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['Yea just watchin netflix']"
            stamp="10 minutes ago"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['Thats whats up. Down to chill lol']"
            stamp="9 minutes ago"
            sent
            bg-color="amber-7"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['Come thru']"
            stamp="2 minutes ago"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['Bettt omw']"
            stamp="Now"
            sent
            bg-color="amber-7"
          />
          <!---- BOTTOM MESSAGES ARE MOST RECENT----->
          <!---- TEXT INPUT BOX ---->
          <div class="q-pa-md row justify-center">
            <q-form @submit="/* FIX_ME (onSubmit) */" class="q-gutter-md"/>
              <form name="message" action=" ">
                <input style="width: 75%" type="text"/>
                <q-btn round color="primary" icon="navigation" />
              </form>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>

</script>
