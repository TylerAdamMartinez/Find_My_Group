
<template>
  <q-layout view="hHh lpR fFf">
    <!-- MESSAGE BOX -->
    <div id="container" >
      <span> </span>
      <div id="chat_box">
        <div style="max-width: 400px">
          <!-- TOP MESSAGES GET DISPLAYED LAST -->
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['Heyyy you awake?']"
            stamp="15 minutes ago"
            sent
            bg-color="secondary"
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
            bg-color="secondary"
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
            bg-color="secondary"
          />
          <!-- BOTTOM MESSAGES ARE MOST RECENT -->
          <!-- TEXT INPUT BOX -->
          <div class="q-pa-md row justify-center">
            <q-form @submit="/* FIX_ME (onSubmit) */" class="q-gutter-md"/>
              <form name="message" action=" ">
                <input id="message_input"  type="text"/>
                <q-btn id="message_btn" round color="primary" icon="navigation" />
              </form>
          </div>
        </div>
      </div>
      <span> </span>
    </div>
  </q-layout>
</template>

<script>

</script>


<style>
#message_input {
  width: 275px;
  border: 2px solid #31CCEC;
  border-radius: 15px;
  height: 40px;
}

#message_btn {
  margin-left: 15px;
}

#chat_box {
  margin-top: 45px;
  border: 2px solid #31CCEC;
  border-radius: 15px;
  width: 400px;
  padding: 15px;
}

#container {
  display: grid;
  grid-template-columns: auto 400px auto;
}

</style>
