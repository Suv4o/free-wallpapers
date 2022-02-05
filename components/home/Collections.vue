<template>
    <div>
        <div class="max-w-7xl mx-auto">
            <div class="max-w-2xl mx-auto sm:py-10 py-8 lg:max-w-none">
                <div class="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                    <div v-for="image in images" :key="image.name" class="group relative">
                        <div
                            class="relative w-full h-80 bg-slate-300 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
                        >
                            <img
                                v-if="image.smallUrl"
                                :src="image.smallUrl"
                                :alt="image.description ? image.description.Name : ''"
                                class="w-full h-full object-center object-cover"
                            />
                        </div>
                        <h3 class="mt-6 text-sm text-gray-500">
                            <a :href="image.smallUrl">
                                <span class="absolute inset-0" />
                                {{ image.description ? image.description.Author : '' }}
                            </a>
                        </h3>
                        <p class="text-base font-semibold text-gray-900 mb-6">
                            {{ image.description ? image.description.Name : '' }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ImageFromApi } from '@/interfaces/client'
import { Entries } from '@/interfaces/server'
let images = ref<Entries[]>([])
let search = ref<string>('')
let page = 1

onMounted(async () => {
    images.value = fillPlaceholderImages(
        {
            name: '',
            extension: '',
            object: {
                byteSize: 0,
                text: ''
            }
        },
        18
    )
    const response = await getData()
    images.value = response.collection
})

async function getData(size: number = 18, page: number = 1, search: string = ''): Promise<ImageFromApi> {
    if (search) {
        return await $fetch(`/api/get-images?size=${size}&page=${1}&search=${search}`)
    }
    return await $fetch(`/api/get-images?size=${size}&page=${1}`)
}

function fillPlaceholderImages(value: Entries, len: number): Entries[] {
    return [...Array(len).keys()].map(() => value)
}
</script>

<style lang="scss" scoped></style>
