<template>
  <div>
    <q-page class="card">
      <q-card class="my-card">
        <q-card-section>
          <div class="contenedor">
            <!-- Información de Contacto -->
            <div class="col-4 contacto">
              <q-list>
                <div class="title">¡CONTACTANOS!</div>
                <q-item>
                  <q-item-section>
                    <q-item-label class="letra">
                      <strong>Dirección:</strong>
                      <p></p>
                      Calle 123, San Andres, Colombia
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="letra">
                      <strong>Teléfonos:</strong>
                      <p></p>
                      123 456 7890, 123 456 7891
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="letra">
                      <strong>Correo Electrónico:</strong>
                      <p></p>
                      coralisland@hotel.com
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="letra">
                      <strong>Horarios de Atención:</strong>
                      <p></p>
                      Todos los dias 24 horas
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <!-- Foto del Hotel -->
            <div class="imgCon flex justify-center items-center">
              <iframe
                src="https://maps.google.com/maps?q=hotel%20location&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>

            <!-- Formulario de Contacto -->
            <div class="col-4 q-pa-md">
              <q-form @submit="enviarConsulta">
                <q-input filled v-model="nombre" label="Nombre" required />
                <q-input
                  filled
                  v-model="email"
                  label="Correo Electrónico"
                  type="email"
                  required
                />
                <q-input filled v-model="telefono" label="Teléfono" />
                <q-input
                  filled
                  v-model="mensaje"
                  label="Mensaje"
                  type="textarea"
                  required
                />

                <q-btn
                  type="submit"
                  label="Enviar"
                  color="primary"
                  class="q-mt-md"
                />
              </q-form>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    };
  },
  methods: {
    enviarConsulta() {
      // Aquí puedes manejar el envío de la consulta, por ejemplo, hacer una solicitud a un API.
      console.log("Nombre:", this.nombre);
      console.log("Email:", this.email);
      console.log("Teléfono:", this.telefono);
      console.log("Mensaje:", this.mensaje);

      // Resetear el formulario después del envío
      this.nombre = "";
      this.email = "";
      this.telefono = "";
      this.mensaje = "";

      this.$q.notify({
        type: "positive",
        message: "Consulta enviada exitosamente",
      });
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  padding: 20px;
}

.contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.my-card {
  max-width: 1000px;
  margin: 0 auto;
}
.title {
  display: flex;
  justify-content: center;
  color: rgb(64, 144, 117);
  font-family: "PT Serif", serif;
  font-size: 30px;
}
.letra {
  font-style: italic;
  font-size: 18px;
}
.contacto {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.q-img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 980px) {
  .contenedor {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 780px) {
    .contenedor {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
}
</style>
