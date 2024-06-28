<template>
  <div>
    <!-- Sección de Bienvenida con Parallax -->
    <div id="parallax" class="parallax">
      <h1>
        "Reserva ahora y disfruta de una escapada de ensueño en el corazón del
        lujo."
      </h1>
      <div class="reservation-label">
        <q-btn
          label="Reservar Ahora"
          @click="openReservationForm"
          class="parallax-btn"
        />
      </div>
    </div>

    <!-- Párrafo intermedio -->
    <div class="text-introduccion">
      <h2 class="intro-titlle text-center">
        Bienvenidos al hotel LUXURY INSLAND
      </h2>
      <hr />
      <p class="intro">
        Descubre un oasis de elegancia contemporánea y servicio excepcional en
        nuestro exclusivo hotel de lujo. Desde vistas impresionantes hasta
        detalles meticulosamente diseñados, cada momento en nuestro hotel está
        diseñado para cautivar tus sentidos y crear recuerdos inolvidables.
      </p>
    </div>

    <!-- Carrusel de Fotos -->
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="amber"
        navigation
        padding
        arrows
        height="300px"
        class="shadow-2 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="imagenes/Foto1.webp"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="imagenes/foto2.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="imagenes/foto3.webp"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="imagenes/foto4.png"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="imagenes/foto5.webp"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="imagenes/foto6.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="imagenes/foto7.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="imagenes/foto8.jpg"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div>
      <section class="subtitulo">
        <div class="tituloSegundo">
          <h4>DESCUBRE</h4>
          <h6>EL EQUILIBRIO PERFECTO</h6>
        </div>
      </section>
    </div>

    <div class="img-sub">
      <div class="col-6">
        <q-img class="img-sub" src="imagenes/playa.avif" no-native-menu>
          <q-icon
            class="absolute all-pointer-events"
            size="32px"
            name="info"
            color="white"
            style="top: 8px; left: 8px"
          >
            <q-tooltip> Nuestra vista </q-tooltip>
          </q-icon>
        </q-img>
      </div>
    </div>

    <div class="parrafo">
      <div class="parrafo-conte">
        <p>
          Ubicado en una paradisíaca isla, nuestro hotel ofrece una experiencia
          única con una amplia gama de servicios para todos los gustos. Disfrute
          de la exquisita gastronomía en nuestro restaurante de primera clase,
          relájese en nuestro spa con tratamientos revitalizantes, y manténgase
          activo con nuestras variadas actividades deportivas.
        </p>
        <p>
          Para su entretenimiento, contamos con espectáculos en vivo y una sala
          de juegos. Explore las zonas naturales que rodean el hotel y
          maravíllese con la belleza de la isla. Además, refresquese en nuestra
          piscina de lujo, perfecta para un día de descanso y diversión. Ven y
          descubre el paraíso en nuestro hotel en la isla.
        </p>
      </div>
    </div>
    <!-- Sección de Introducción al Hotel -->
    <q-page class="q-pa-md my-page">
      <q-card class="cta">
        <q-card-section>
          <div class="text-h6 q-mb-md">Bienvenido a nuestro Hotel</div>
          <div class="q-mb-md">
            Descubre la experiencia única que ofrecemos.
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn class="boton-explora"  label="Explora Más" @click="explorarMas" />
          <q-btn
          class="boton-reserva"
            label="Reserva Ahora"
            @click="openReservationForm"
          />
        </q-card-actions>
      </q-card>
    </q-page>

    <!-- Formulario de Reserva -->
    <q-dialog v-model="showReservationForm" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Formulario de Reserva</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-form @submit="submitForm" @reset="resetForm" ref="form">
            <q-input
              v-model="form.nombre"
              label="Nombre"
              outlined
              :rules="[(val) => !!val || 'El nombre es obligatorio']"
            />
            <q-input
              v-model="form.apellido"
              label="Apellido"
              outlined
              :rules="[(val) => !!val || 'El apellido es obligatorio']"
            />
            <q-select
              v-model="form.tipoDocumento"
              label="Tipo de Documento"
              :options="['CC', 'Pasaporte', 'CE']"
              outlined
              :rules="[
                (val) => !!val || 'El tipo de documento es obligatorio',
              ]"
            />
            <q-input
              v-model="form.numeroDocumento"
              label="Número de Documento"
              outlined
              :rules="[
                (val) => !!val || 'El número de documento es obligatorio',
                (val) => /^[0-9]+$/.test(val) || 'Solo se permiten números',
              ]"
            />
            <q-input
              v-model="form.telefono"
              label="Teléfono"
              outlined
              :rules="[
                (val) => !!val || 'El teléfono es obligatorio',
                (val) => /^[0-9]+$/.test(val) || 'Solo se permiten números',
              ]"
            />
            <q-input
              v-model="form.numeroPersonas"
              label="Número de Personas"
              type="number"
              outlined
              :rules="[
                (val) => !!val || 'El número de personas es obligatorio',
                (val) => val > 0 || 'Debe ser un número positivo',
              ]"
            />
            <q-input
              v-model="form.fecha"
              label="Fecha"
              type="date"
              outlined
              :rules="[
                (val) => !!val || 'La fecha es obligatoria',
                (val) =>
                  new Date(val) > new Date() || 'La fecha debe ser futura',
              ]"
            />
            <q-input
              v-model="form.hora"
              label="Hora"
              type="time"
              outlined
              :rules="[(val) => !!val || 'La hora es obligatoria']"
            />

            <q-card-actions align="right">
              <q-btn flat label="Cancelar" color="primary" v-close-popup />
              <q-btn type="reset" label="Reset" color="primary" />
              <q-btn type="submit" label="Enviar" color="primary" />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- Notificación de Disponibilidad -->
    <div>
      <!-- Notificación de Disponibilidad -->
      <q-dialog v-model="notify" persistent>
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ notificationMessage }}</div>
          </q-card-section>
          <q-card-actions >
            <q-btn label="Explorar Más" @click="goToServicios" />
            <q-btn flat label="OK" v-close-popup @click="notify = false" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      showReservationForm: false,
      notify: false,
      notificationMessage: "",
      form: {
        nombre: "",
        apellido: "",
        tipoDocumento: "",
        numeroDocumento: "",
        telefono: "",
        numeroPersonas: 0,
        fecha: "",
        hora: "",
      },
    };
  },
  methods: {
    openReservationForm() {
      this.showReservationForm = true;
    },
    explorarMas() {
      // Lógica para redirigir a una página de exploración
      this.notificationMessage =
        "La disponibilidad se encuentra en progreso. Próximamente, te informaremos.";
      this.notify = true;
    },
    submitForm() {
      // Lógica para enviar el formulario
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.showReservationForm = false;
          this.notificationMessage = "Tu reserva ha sido enviada con éxito.";
          this.notify = true;
          this.resetForm();
        }
      });
    },
    resetForm() {
      this.form = {
        nombre: "",
        apellido: "",
        tipoDocumento: "",
        numeroDocumento: "",
        telefono: "",
        numeroPersonas: 0,
        fecha: "",
        hora: "",
      };
    },
  },
};
</script>

<style scoped>
.parallax {
  position: relative;
  height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  width: 60%;
  font-family: "Open Sans";
  background-color: rgba(0, 0, 0, 0.332);
  border: solid 2px;
}

.reservation-label {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.parallax-btn {
  margin-top: 20px;
  font-size: 20px;
  font-family: "Open Sans";
  background-color: rgba(255, 255, 255, 0.127);
}

#parallax::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/imagenes/fondo2.jpeg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  z-index: -1;
}

.my-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
}

.cta {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.boton-reserva{
background-color: aquamarine;
}
.boton-explora{
  background-color: rgb(165, 246, 246);
}
.cursor-pointer {
  cursor: pointer;
}

.text-introduccion {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0;
  padding: 0 20px;
  flex-direction: column;
  font-family: "Playwrite NZ", cursive;
}

.text-introduccion h2 {
  font-size: 3rem;
}

.intro {
  width: 100%;
  max-width: 800px;
  font-size: 1.25rem;
  text-align: center;
}

.subtitulo {
  width: 100%;
  display: flex;
  justify-content: center;
}

.tituloSegundo {
  display: flex;
}

h4 {
  color: rgb(61, 164, 127);
  font-family: "Playwrite NZ", cursive;
  margin-right: 20px;
}

h6 {
  width: 100%;
  color: rgb(88, 164, 136);
  font-family: "Playwrite NZ", cursive;
  margin-bottom: 10px;
  font-size: 23px;
}

.col-6 {
  width: 100%;
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
}

.img-sub {
  display: flex;
  justify-content: center;
}

.parrafo {
  width: 100%;
  font-size: 20px;
  font-family: "Playwrite NZ", cursive;
  display: flex;
  justify-content: center;
  margin: 20px;
}

.parrafo-conte {
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 25px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
  }
  .intro {
    font-size: 1.3rem;
  }
  .text-introduccion h2 {
    font-size: 1.5rem;
  }
}
</style>
