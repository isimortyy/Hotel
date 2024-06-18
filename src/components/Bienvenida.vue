<template>

  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="400px"
      navigation
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"

    >
      <q-carousel-slide name="first" img-src="imagenes/1.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="imagenes/2.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Second stop</div>
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="imagenes/3.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="four" img-src="imagenes/4.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="five" img-src="imagenes/5.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="six" img-src="imagenes/6.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
   
<div style="width: 30px; height: 40px;"></div>

    <!-- cards -->

<div class="cards"> 

  <div class="cardsOne">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
</div>

<div class="cardsOne">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
</div>
<div class="cardsOne">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
</div>

<div class="cardsOne">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
</div>

<div class="cardsOne">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
</div>

<div class="cardsOne">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</div>

<div>
   <q-page class="q-pa-md my-page">
    <q-card class="cta">
      <q-card-section>
        <div class="text-h6 q-mb-md">Bienvenido a nuestro Hotel</div>
        <div class="q-mb-md">Descubre la experiencia única que ofrecemos.</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="Explora Más" @click="explorarMas" />
        <q-btn color="secondary" label="Reserva Ahora" @click="reservarAhora" />
      </q-card-actions>
    </q-card>
  </q-page>
</div>












 </div>

  


</template>

<script> 


import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('first'),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    }
  }
}


</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 10px
  color: white
  background-color: rgba(0, 0, 0, .3)

.cards
 width: 100%
 display: grid
 grid-template-columns: repeat(3, 1fr)
 place-items: center

 
.my-page 
  display: flex
  justify-content: center
  align-items: flex-start
  height: 100vh
  
.cardsOne
 margin:20px

.my-card
  width:100%
  display: grid
  place-items: center
  
  


@media(max-width: 1000px)
    .cards
        grid-template-columns: repeat(2, 1fr)

</style>


