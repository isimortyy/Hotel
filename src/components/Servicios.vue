<template>
  <q-page class="q-pa-md">
    <div class="contenedorImagen">
      <div class="imgMar">
        <img class="imgMar2" src="imagenes/mar.jpg" alt="" />
        <div class="textoSuperpuesto">
          ¡Haz de tu estancia un momento inolvidable con nuestros servicios
          personalizados!"
        </div>
      </div>
    </div>

    <q-page-container>
      <div class="cards">
        <q-card
          v-for="(service, index) in services"
          :key="index"
          class="q-mb-md col-xs-12 col-sm-6 col-md-4"
        >
          <q-img :src="service.image" :alt="service.name" class="service-image">
            <q-card-section>
              <div class="text-h6">{{ service.name }}</div>
            </q-card-section>
          </q-img>
          <q-card-section>
            <p class="descripcion">{{ service.description }}</p>
            <p class="text-caption">Precio: {{ service.price }}</p>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn color="green" @click="openForm(service.name)"
              >Solicitar</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </q-page-container>

    <q-dialog v-model="formVisible">
      <q-card>
        <q-card-section>
          <div class="text-h6">Solicitar {{ selectedService }}</div>
        </q-card-section>

        <q-card-section>
          <q-form @submit.prevent="submitForm">
            <q-input
              v-model="form.name"
              label="Nombre"
              filled
              required
            ></q-input>
            <q-input
              v-model="form.documentNumber"
              label="Número de Documento"
              type="number"
              filled
              required
            ></q-input>
            <q-input
              v-model="form.date"
              label="Fecha"
              type="date"
              filled
              required
            ></q-input>
            <q-input
              v-model="form.time"
              label="Hora"
              type="time"
              filled
              required
            ></q-input>
            <q-btn type="submit" color="primary" label="Enviar"></q-btn>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          name: "Spa",
          image: "imagenes/spa1.jpeg",
          description:
            "Disfruta de una experiencia relajante en nuestro spa de lujo con servicios de masajes, tratamientos faciales y mucho más.",
          price: "$160",
        },
        {
          name: "Restaurante",
          image: "imagenes/resta1.jpg",
          description:
            "Saborea la mejor gastronomía en nuestro restaurante, con una selección de platos internacionales y locales.",
          price: "Segun corresponda",
        },
        {
          name: "Gym",
          image: "imagenes/gym1.jpeg",
          description:
            "Mantente en forma durante tu estancia con nuestro gimnasio totalmente equipado.",
          price: "$100",
        },
        {
          name: "Salón de Belleza",
          image: "imagenes/salon1.webp",
          description:
            "Ponte en manos de nuestros expertos en belleza y disfruta de tratamientos de primera clase.",
          price: "Segun corresponda",
        },
        {
          name: "Servicio de Lavandería",
          image: "imagenes/lava1.jpg",
          description:
            "Ofrecemos servicios de lavandería y tintorería para tu comodidad.",
          price: "$50",
        },
        {
          name: "Discoteca",
          image: "imagenes/dico1.jpg",
          description:
            "Baila toda la noche en nuestra discoteca con los mejores DJs y un ambiente increíble.",
          price: "$70",
        },
        {
          name: "Casino",
          image: "imagenes/casi1.webp",
          description:
            "Prueba tu suerte en nuestro casino con una variedad de juegos de azar y entretenimiento.",
          price: "0",
        },
        {
          name: "Sala de Billar",
          image: "imagenes/billar1.jpg",
          description:
            "Disfruta de una partida de billar en nuestra sala especialmente diseñada para ello.",
          price: "0",
        },
        {
          name: "Servicio de Transporte",
          image: "imagenes/trans1.jpg",
          description:
            "Ofrecemos servicios de transporte para que te muevas cómodamente por la ciudad.",
          price: "$180",
        },
        {
          name: "Alquiler de Automóviles",
          image: "imagenes/pres1.jpg",
          description:
            "Alquila un automóvil y explora la ciudad a tu propio ritmo.",
          price: "$160",
        },
      ],
      formVisible: false,
      selectedService: "",
      form: {
        name: "",
        documentNumber: "",
        date: "",
        time: "",
      },
    };
  },
  methods: {
    openForm(serviceName) {
      this.selectedService = serviceName;
      this.formVisible = true;
    },
    submitForm() {
      console.log("Formulario enviado:", this.form);
      this.formVisible = false;
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: "",
        documentNumber: "",
        date: "",
        time: "",
      };
    },
  },
};
</script>

<style scoped>
.contenedorImagen {
  position: relative;
  width: 100%; /* Ajusta según sea necesario */
}

.imgMar {
  position: relative;
  padding-top: 30px;
}

.imgMar2 {
  width: 100%;
  height: 250px; /* Ajusta según sea necesario */
}

.textoSuperpuesto {
  width: 90%;
  font-family: "Playwrite AU QLD", cursive;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* Ajusta el color del texto según sea necesario */
  font-size: 2.8rem; /* Ajusta el tamaño de la fuente según sea necesario */
  text-align: center;
  background: rgba(
    0,
    0,
    0,
    0.489
  ); /* Fondo semitransparente para mayor legibilidad */
  padding: 10px;
  border: solid;
  border-radius: 5px;
}

.service-image {
  height: 200px;
  width: 100%;
  object-fit: cover; /* Asegura que la imagen cubra todo el contenedor */
  display: flex;
  justify-content: center;
  align-items: center;
}

.cards {
  gap: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.descripcion {
  font-family: "PT Serif", serif;
  font-size: 20px;
}

@media (max-width: 1202px) {
  .textoSuperpuesto {
    font-size: 2.5rem;
    justify-content: center;
  }
}

@media (max-width: 880px) {
  .textoSuperpuesto {
    font-size: 1.6rem;
    justify-content: center;
  }

  @media (max-width: 680px) {
    .textoSuperpuesto {
      font-size: 1.8rem;
      justify-content: center;
    }
  }

  @media (max-width: 420px) {
    .textoSuperpuesto {
      font-size: 1.5rem;
      justify-content: center;
    }
  }
}
</style>
