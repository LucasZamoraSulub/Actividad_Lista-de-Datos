<template>

    <!-- Renderizado de la lista de elementos -->
  <div class="object-card" :style="{ backgroundColor: bgColor, color: textColor }">
    <span>
      <h3>No. {{ object.id + 1 }}</h3>
    </span>
    <h2>Nombre: {{ props.object.name }}</h2>
    <p>Precio: {{ props.object.price }} de oro</p>
    <p>Estadísticas: {{ props.object.Stats }}</p>
    <p>Pasiva: {{ props.object.passive }}</p>
    <!-- Boton para ejecutar el randomizador de colores de fondo y letrea de la lista de elementos -->
    <div class="btn-container">
      <button class="btn" @click="changeColor">Cambiar color</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IObject } from '@/interfaces/IObject'
import { defineProps, defineEmits } from 'vue'
import { ref } from 'vue'

// Constantes
const emits = defineEmits(['change-color'])
const bgColor = ref<string>('white')
const textColor = ref<string>('black')
const props = defineProps<{
  object: IObject
}>()


// Generador de colores aleatorios
const changeColor = () => {
  const randomColor = () => Math.floor(Math.random() * 256)

  const bgColorValue = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
  const textColorValue = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`

  // Actualizar los colores
  bgColor.value = bgColorValue
  textColor.value = textColorValue

  // Emitir el evento con los colores actualizados
  emits('change-color', {
    id: props.object.id,
    bgColor: bgColorValue,
    textColor: textColorValue
  })
}
</script>

<style scoped>
/* Estilos de las cards */
.object-card {
  text-align: center;
  color: black;
  border-radius: 15px;
  padding: 15px;
  margin: 20px;
  box-shadow: 0px 0px 12px rgba(71, 179, 170, 0.5);
}

/* Estilos del botones*/
.btn {
  margin-top: 10px;
  background-color: #132c9b;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  padding: 12px 60px;
  cursor: pointer;
  border: 1px solid #7caa80;
}

.btn-container {
  text-align: center;
}
</style>
