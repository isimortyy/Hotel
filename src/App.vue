<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header">
      <q-toolbar>
        <q-toolbar-title class="title">
        Coral Island
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs class="routes">
        <q-route-tab to="/" label="Bienvenida" />
        <q-route-tab to="/Habitaciones" label="Habitaciones">
  
        </q-route-tab>
        <q-route-tab to="/Deportes" label="Deportes">
        </q-route-tab>
        <q-route-tab to="/Servicios" label="Servicios" />
        <q-route-tab to="/Contacto" label="Contacto" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer">
      <q-toolbar>
        <q-toolbar-title class="footer-title">
          <div>Coral Island</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'


export default {
  setup() {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen
    }
  }
}
</script>

<style scoped>
.header {
  color: white;
 background-color: rgb(61, 164, 127) ;
 }

.footer {
  background-color: rgb(61, 164, 127);
  color: rgb(255, 255, 255); 
}

.img {
  height: 60px;
  width: 60px;
  margin: 10px;
}

.title {
  background-color: rgb(61, 164, 127);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Playwrite AU QLD", cursive;
  font-size: 3.5rem;
  color: rgb(255, 255, 255);
}

.routes {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
}

.q-route-tab {
  color: white;
}

.footer-title {
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: "Playwrite AU QLD", cursive;
}

@media (max-width: 768px) {
  .img {
    height: 40px;
    width: 40px;
  }

  .title {
    font-size: 1.2rem;
  }

  .footer-title {
    font-size: 1rem;
  }

  .routes {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
  }

  .q-route-tab {
    width: 100%;
  }
}

@media (min-width: 769px) {
  .routes {
    flex-direction: row;
  }

  .q-route-tab {
    margin: 0 10px;
  }
}
</style>
