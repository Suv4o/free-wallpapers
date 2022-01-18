<template>
    <div>Hello Nuxt 3</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { getAllRepoFiles } from '@/api/queries'

onMounted(async () => {
    const data = await getAllRepoFiles()
    console.log(data)
})
</script>

<style lang="scss" scoped></style>
