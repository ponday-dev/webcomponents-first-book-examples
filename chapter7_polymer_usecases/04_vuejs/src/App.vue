<template>
  <my-button value="sample" @click="handleClick">
    click
  </my-button>
</template>

<script>

export default {
  name: 'app',
  methods: {
    handleClick(event) {
      console.log(event.target.value);
    }
  }
}
</script>
