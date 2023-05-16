<script setup="">
import {ref} from "vue"
import api from "../api.js"

const article = ref(await api.all())

</script>

<template>
{{article}}
</template>

<style scoped>

</style>