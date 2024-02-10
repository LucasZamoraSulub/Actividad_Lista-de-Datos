<template>
  <!-- Titulo de la vista -->
  <div>
    <h1 class="title">"Objetos de League of Legends version 2023"</h1>
  </div>

  <!-- Formulario para generar nuevo objeto -->
  <div class="container">
    <div>
      <h1 class="title">Formulario de nuevo objeto</h1>
    </div>
    <form @submit.prevent="submitForm">
      <!-- campo name -->
      <div class="form-camp">
        <label for="newObjectName">Nombre del objeto:</label>
        <input v-model="newObjectName" type="text" id="newObjectName" @input="validateName" />
        <p v-if="errors.name">{{ errors.name }}</p>
      </div>
      <!-- campo price -->
      <div class="form-camp">
        <label for="newObjectPrice">Precio:</label>
        <input
          v-model.number="newObjectPrice"
          type="number"
          id="newObjectPrice"
          min="0"
          @input="validatePrice"
        />
        <p v-if="errors.price">{{ errors.price }}</p>
      </div>
      <!-- campo Stats -->
      <div class="form-camp">
        <label for="newObjectStats">Estadísticas:</label>
        <input v-model="newObjectStats" type="text" id="newObjectStats" @input="validateStats" />
        <p v-if="errors.stats">{{ errors.stats }}</p>
      </div>
      <div class="form-camp">
        <!-- campo passive -->
        <label for="newObjectPassive">Pasiva:</label>
        <input
          v-model="newObjectPassive"
          type="text"
          id="newObjectPassive"
          @input="validatePassive"
        />
        <p v-if="errors.passive">{{ errors.passive }}</p>
      </div>
      <!-- Finalizar formulario -->
      <button class="submit" :disabled="!isFormValid()">Agregar objeto</button>
    </form>
  </div>

  <!-- renderizado de elementos y props -->
  <div>
    <ul>
      <ObjectItem
        v-for="object in objects"
        :change-color="changeColor"
        :object="object"
        :key="object.id"
      />
    </ul>
  </div>

</template>

<script setup lang="ts">
import type { IObject } from '@/interfaces/IObject'
import ObjectsData from '@/data/ObjectsData'
import ObjectItem from './ObjectItem.vue'
import { ref } from 'vue'

// Constantes 
const objects = ref<IObject[]>(ObjectsData)
const newObjectName = ref<string>('')
const newObjectPrice = ref<number>(0)
const newObjectStats = ref<string>('')
const newObjectPassive = ref<string>('')

const errors = ref({
  name: '',
  price: '',
  stats: '',
  passive: ''
})

// Validacion de los campos del formulario
const validateName = () => {
  if (newObjectName.value.trim() === '') {
    errors.value.name = 'El nombre del objeto no puede estar vacío'
  } else {
    errors.value.name = ''
  }
}

const validatePrice = () => {
  if (newObjectPrice.value <= 0) {
    errors.value.price = 'El precio debe ser mayor que cero'
  } else {
    errors.value.price = ''
  }
}

const validateStats = () => {
  if (newObjectStats.value.trim() === '') {
    errors.value.stats = 'Las estadísticas no pueden estar vacías'
  } else {
    errors.value.stats = ''
  }
}

const validatePassive = () => {
  if (newObjectPassive.value.trim() === '') {
    errors.value.passive = 'La pasiva no puede estar vacía'
  } else {
    errors.value.passive = ''
  }
}

const isFormValid = () => {
  return (
    newObjectName.value.trim() !== '' &&
    newObjectPrice.value > 0 &&
    newObjectStats.value.trim() !== '' &&
    newObjectPassive.value.trim() !== '' &&
    Object.values(errors.value).every((error) => error === '')
  )
}

// Verificacion del formulario antes de enviar
const submitForm = () => {
  if (!isFormValid()) {
    alert('Por favor, complete todos los campos correctamente')
    return
  }

  // Verificacion del objeto por medio del name para validar que no haya otro almacenado de la misma manera
  if (objects.value.some((object) => object.name === newObjectName.value)) {
    alert('El objeto ya existe, coloque otro nombre que no se encuentre en la lista de objetos')
    return
  }

  // Generacion de nuevo objeto por medio del formulario
  const newObject: IObject = {
    id: objects.value.length,
    name: newObjectName.value,
    price: newObjectPrice.value,
    Stats: newObjectStats.value,
    passive: newObjectPassive.value,
    textColor: '',
    bgColor: ''
  }
  objects.value.push(newObject)

  // Limpiar los campos de entrada después de agregar el objeto
  newObjectName.value = ''
  newObjectPrice.value = 0
  newObjectStats.value = ''
  newObjectPassive.value = ''
}

// Cambio de colores y textos de los objetos en la lista
const changeColor = (payload: { id: number; bgColor: string; textColor: string }) => {
  const objectIndex = objects.value.findIndex((object) => object.id === payload.id)
  if (objectIndex !== -1) {
    objects.value[objectIndex].bgColor = payload.bgColor
    objects.value[objectIndex].textColor = payload.textColor
  }
}
</script>

<style>

/* Estilos del contenedor */
.container {
  margin: 0 auto;
  margin-top: 30px;
  width: 900px;
  background-color: rgb(78, 5, 5);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(196, 17, 17, 0.5);
}

/* Estilos del formulario */
form {
  display: flex;
  flex-direction: column;
}

.form-camp {
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
  color: rgb(243, 234, 234);
}

/* Estilos del texto */
.title {
  margin-top: 15px;
  color: white;
  text-align: center;
}

label {
  color: white;
}

/* Estilos del boton */
input,
select {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #a3a0a0;
  border-radius: 5px;
  background-color: rgb(113, 116, 116);
  color: white;
}

.submit {
  margin-top: 10px;
  background-color: #339b13;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid #0b350f;
}

.submit:hover {
  background-color: #4cac2f;
}

.submit:disabled {
  background-color: rgb(102, 102, 102);
  color: rgb(175, 159, 159);
  font-weight: bold;
  border: 1px solid #666;
  cursor: not-allowed;
}
</style>
