<template>
  <div class="input">
    <h1>This is an input page</h1>
  </div>
      <input v-model="message" placeholder="x" />
    <p>Введённое сообщение: {{ message }}</p>
    <input v-model="message" placeholder="y" />
    <p>Введённое сообщение: {{ message }}</p>
  </div>
      <input v-model="message" placeholder="z" />
    <p>Введённое сообщение: {{ message }}</p>
  </div>
</template>
