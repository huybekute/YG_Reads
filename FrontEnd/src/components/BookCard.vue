<script setup>

    const { book } = defineProps({
        book: Object
    });

</script>

<template>
    <div>
        <div class="flex flex-col w-60 justify-center space-y-1 shadow-lg cursor-pointer py-2">
            <img :src="`/product/${book.image}`" class="w-50 mx-auto">
            <div class="space-y-3 px-3">
                <h1 class="">{{ book.name }}</h1>
                <div>
                    <p class="text-red-500 font-bold">{{ book.price.toLocaleString('vi-VN') }} đ</p>
                    <p><del class="line-through decoration-gray-400">{{ book.oldPrice.toLocaleString('vi-VN') }} đ</del></p>
                </div>
            </div>
        </div>
    </div>
</template>