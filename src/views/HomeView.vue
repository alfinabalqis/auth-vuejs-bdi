<template>
  <div class="about">
    <h1 class="text-3xl font-bold pb-8 text-center">Fetching API</h1>
    <div class="flex justify-center gap-4 flex-wrap">
      <div v-for="item in list" :key="item.id" class=" shadow-md p-8 rounded-sm">
        <img :src="item.avatar" alt="Avatar" class="rounded-full my-4">
        <h1 class=" text-xl font-bold">{{ item.first_name }} {{ item.last_name }}</h1>
        <p>{{ item.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      list: []
    }
  },

  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.warn(result.data.data);
    this.list = result.data.data;
  }
}

</script>
