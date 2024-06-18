import Bienvenida from "../components/Bienvenida.vue"
import Contacto from "../components/Contacto.vue"
import Deportes from "../components/Deportes.vue"
import Habitaciones from "../components/Habitaciones.vue"
import Servicios from "../components/Servicios.vue"
import { createRouter, createMemoryHistory } from "vue-router"

const routes=[
    {path:"/",component:Bienvenida},
    {path:"/Contacto",component:Contacto},
    {path:"/Deportes",component:Deportes},
    {path:"/Habitaciones",component:Habitaciones},
    {path:"/Servicios",component:Servicios}

]

export const router = createRouter({
    history:createMemoryHistory(),
    routes
})


