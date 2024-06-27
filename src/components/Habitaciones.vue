<template>
  <div>
    <div class="imgConcha">
      <img class="concha" src="imagenes/concha2.png" alt="concha" />
    </div>

    <div>
      <div class="titulo">
        <h5 class="titHab">TE INVITAMOS A CONOCER NUESTRAS</h5>
        <h2 class="titHab2">HABITACIONES</h2>
      </div>
    </div>

    <div class="contenedorSer">
      <div class="serviciosHab">
        <div class="servicios1">
          <div class="Servicio">
            <i class="fa-solid fa-wifi"></i>
            <h6>Wifi Gratis</h6>
          </div>

          <div class="Servicio">
            <i class="fa-solid fa-lock"></i>
            <h6>Caja Fuerte</h6>
          </div>

          <div class="Servicio">
            <i class="fa-solid fa-utensils"></i>
            <h6>Desayuno Incluido</h6>
          </div>

          <div class="Servicio">
            <i class="fa-solid fa-briefcase"></i>
            <h6>Kit de Aseo</h6>
          </div>

          <div class="Servicio">
            <span class="material-symbols-outlined"> face_3 </span>
            <h6>Servicio de Secador de Cabello</h6>
          </div>

          <div class="Servicio">
            <i class="fa-solid fa-toilet"></i>
            <h6>Baño privado con agua caliente</h6>
          </div>
        </div>

        <div class="servicios2">
          <div class="Servicio">
            <span class="material-symbols-outlined"> density_small </span>
            <h6>Toallas</h6>
          </div>

          <div class="Servicio">
            <i class="fa-regular fa-lightbulb"></i>
            <h6>Luz cálida para lectura</h6>
          </div>

          <div class="Servicio">
            <i class="fa-regular fa-snowflake"></i>
            <h6>Aire acondicionado</h6>
          </div>

          <div class="Servicio">
            <i class="fa-solid fa-wine-glass"></i>
            <h6>Copa de vino de la casa de bienvenida</h6>
          </div>

          <div class="Servicio">
            <i class="fa-solid fa-shower"></i>
            <h6>Duchas de agua dulce</h6>
          </div>

          <div class="Servicio">
            <i class="fa-solid fa-mug-hot"></i>
            <h6>Estación de café, agua y aromática</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="contenedorImagen">
      <div class="imgMar">
        <img class="imgMar2" src="imagenes/mar.jpg" alt="" />
        <div class="textoSuperpuesto">Inspirados por la naturaleza</div>
      </div>
    </div>

    <section id="estandar" class="title">
      <h2>ESTANDAR</h2>

      <div class="cards">
        <div class="cardsOne">
          <q-card class="my-card">
            <q-img src="imagenes/estan1.jpg" class="imgCard" />

            <q-card-section>
              <q-btn
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  Habitación Estándar Vista Interna
                </div>
                <div
                  class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                >
                  <q-icon name="place" />
                  Estandar
                </div>
              </div>

              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">$ 500</div>
              <div class="text-caption text-grey">
                La Habitación Estándar Vista Interna dispone de 1 o 2 camas...
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat color="primary" @click="showDialog = true"
                >Reserve</q-btn
              >
            </q-card-actions>
          </q-card>
        </div>

        <div class="cardsOne">
          <q-card class="my-card">
            <q-img src="imagenes/estan2.jpg" class="imgCard" />

            <q-card-section>
              <q-btn
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  Habitación Estándar Vista al Jardin
                </div>
                <div
                  class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                >
                  <q-icon name="place" />
                  Estandar
                </div>
              </div>

              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">$ 550</div>
              <div class="text-caption text-grey">
                La habitacion Estandar vista a Jardin disponible con tina...
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat color="primary" @click="showDialog = true"
                >Reserve</q-btn
              >
            </q-card-actions>
          </q-card>
        </div>

        <div class="cardsOne">
          <q-card class="my-card">
            <q-img src="imagenes/estan3.jpg" class="imgCard" />

            <q-card-section>
              <q-btn
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  Habitacion Estandar familiar vista Jardin
                </div>
                <div
                  class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                >
                  <q-icon name="place" />
                  Familiar
                </div>
              </div>

              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">$ 650</div>
              <div class="text-caption text-grey">
                Habitacion estandar familiar con vista a jardin y cuenta con 2
                baños...
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat color="primary" @click="showDialog = true"
                >Reserve</q-btn
              >
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section>

    <section id="medium" class="title">
      <h2>PREMIUM</h2>

      <div class="cards">
        <div class="cardsOne">
          <q-card class="my-card" flat bordered>
            <q-img src="imagenes/medi1.jpg" class="imgCard" />

            <q-card-section>
              <q-btn
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  Habitacion Premium con vista al Mar
                </div>
                <div
                  class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                >
                  <q-icon name="place" />
                  Premium
                </div>
              </div>

              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">$ 1000</div>
              <div class="text-caption text-grey">
                Habitacion Premium con vista el mar...
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat color="primary" @click="showDialog = true"
                >Reserve</q-btn
              >
            </q-card-actions>
          </q-card>
        </div>

        <div class="cardsOne">
          <q-card class="my-card" flat bordered>
            <q-img src="imagenes/medi2.jpg" class="imgCard" />

            <q-card-section>
              <q-btn
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">Habitacion Premium</div>
                <div
                  class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                >
                  <q-icon name="place" />
                  Premium
                </div>
              </div>

              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">$ 1500</div>
              <div class="text-caption text-grey">
                Habitacion premium con vista al mar + jacuzzi
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat color="primary" @click="showDialog = true"
                >Reserve</q-btn
              >
            </q-card-actions>
          </q-card>
        </div>

        <div class="cardsOne">
          <q-card class="my-card" flat bordered>
            <q-img src="imagenes/medi3.jpg" class="imgCard" />

            <q-card-section>
              <q-btn
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  Habitacion Premium con vista al mar
                </div>
                <div
                  class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                >
                  <q-icon name="place" />
                  Premium
                </div>
              </div>

              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">$ 1700</div>
              <div class="text-caption text-grey">
                Habitacion Premium con vista al mar + jacuzzi + sala
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat color="primary" @click="showDialog = true"
                >Reserve</q-btn
              >
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section>

    <section id="suite" class="title">
      <h2>SUITE</h2>

      <div class="cards">
        <div class="cardsOne">
          <q-card class="my-card" flat bordered>
            <q-img src="imagenes/prem1.webp" class="imgCard" />

            <q-card-section>
              <q-btn
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">Suite con vista al Mar</div>
                <div
                  class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                >
                  <q-icon name="place" />
                  Suite
                </div>
              </div>

              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">$ 2500</div>
              <div class="text-caption text-grey">
                Suite con vista al mar + Jacuzzi + sala
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat color="primary" @click="showDialog = true"
                >Reserve</q-btn
              >
            </q-card-actions>
          </q-card>
        </div>

        <div class="cardsOne">
          <q-card class="my-card" flat bordered>
            <q-img src="imagenes/prem2.jpg" class="imgCard" />

            <q-card-section>
              <q-btn
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">Suite con vista al Mar</div>
                <div
                  class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                >
                  <q-icon name="place" />
                  Suite
                </div>
              </div>

              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">$ 2700</div>
              <div class="text-caption text-grey">
                Suite con vista al mar + Jacuzzi + sala + cocina
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat color="primary" @click="showDialog = true"
                >Reserve</q-btn
              >
            </q-card-actions>
          </q-card>
        </div>

        <div class="cardsOne">
          <q-card class="my-card" flat bordered>
            <q-img src="imagenes/prem3.jpg" class="imgCard" />

            <q-card-section class="icon">
              <q-btn
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">Suite con vista al Mar</div>
                <div
                  class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                >
                  <q-icon name="place" />
                  Suite
                </div>
              </div>

              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">$ 3200</div>
              <div class="text-caption text-grey">
                Suite con vista al mar + Jacuzzi + sala + cocina + Privada
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat color="primary" @click="showDialog = true"
                >Reserve</q-btn
              >
            </q-card-actions>
          </q-card>
        </div>

        <q-dialog v-model="showDialog">
          <q-card>
            <q-card-section>
              <div class="text-h6">Formulario de Reserva</div>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <q-form @submit="submitForm" @reset="resetForm">
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
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      showDialog: false,
      form: {
        nombre: "",
        apellido: "",
        tipoDocumento: "",
        numeroDocumento: "",
        telefono: "",
        numeroPersonas: "",
        fecha: "",
        hora: "",
      },
      stars: 0,
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // Procesar la reserva
        console.log("Formulario enviado:", this.form);
        this.showDialog = false;
      }
    },
    resetForm() {
      this.form = {
        nombre: "",
        apellido: "",
        tipoDocumento: "",
        numeroDocumento: "",
        telefono: "",
        numeroPersonas: "",
        fecha: "",
        hora: "",
      };
    },
  },
};
</script>

<style scoped>
.imgConcha {
  width: 100%;
  display: flex;
  justify-content: center;
}

.concha {
  width: 30%;
  display: flex;
}

.titulo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
}

.titHab {
  width: 100%;
  margin: 0%;
  display: flex;
  justify-content: center;
  color: rgb(145, 206, 186);
}

.titHab2 {
  margin: 0%;
  display: flex;
  justify-content: center;
  color: rgb(70, 118, 102);
  font-family: "PT Serif", serif;
}

.contenedorSer {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.serviciosHab {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0; /* Asegúrate de que no haya espacio entre las columnas */
  margin: 0;
  padding: 0;
}

.servicios1,
.servicios2 {
  display: flex;
  flex-direction: column;
  gap: 0; /* Asegúrate de que no haya espacio entre los elementos */
  margin: 0;
  padding: 0;
}

.Servicio {
  display: flex;
  align-items: center;
  gap: 10px; /* Puedes ajustar esto según necesites */
  margin: 0; /* Elimina cualquier margen adicional */
  padding: 0; /* Elimina cualquier padding adicional */
}

.Servicio h6 {
  margin: 0; /* Elimina cualquier margen de los títulos */
  padding: 0; /* Elimina cualquier padding de los títulos */
}

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
  height: 200px; /* Ajusta según sea necesario */
}

.textoSuperpuesto {
  font-family: "Playwrite AU QLD", cursive;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* Ajusta el color del texto según sea necesario */
  font-size: 3em; /* Ajusta el tamaño de la fuente según sea necesario */
  text-align: center;
  background: rgba(
    0,
    0,
    0,
    0.314
  ); /* Fondo semitransparente para mayor legibilidad */
  padding: 10px;
  border: solid;
  border-radius: 5px;
}

h2 {
  display: flex;
  justify-content: center;
  font-family: "PT Serif", serif;
  font-style: italic;
  color: rgb(64, 144, 117);
  font-weight: 100px;
}
.ellipsis {
  font-family: "PT Serif", serif;
  color: rgb(21, 94, 21);
}

.absolute {
  color: rgb(45, 124, 45);
  background-color: aliceblue;
  border-radius: 50%;
  font-size: 20px;
}
.text-subtitle1 {
  font-family: "PT Serif", serif;
}
.cardsOne {
  flex: 1 0 30%;
  margin: 15px;
  height: 100%;
}

.my-card {
  width: 100%;
  height: 100%;
}
.title {
  margin-bottom: 50px;
}
.imgCard {
  height: 200px;
  object-fit: cover; /* Esto asegura que la imagen se ajuste sin distorsionarse */
  width: 100%;
}

.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .textoSuperpuesto {
    font-size: 2rem;
    justify-content: center;
  }
  
}
</style>
