<script setup>
    import BookCard from '@/components/BookCard.vue';
    import BookDetails from '@/components/BookDetails.vue';

    import { onMounted, ref } from 'vue';
    
    const books = ref([]);

    onMounted(async() => {
        try{
            const res = await fetch('http://localhost:5000/api/books');
            books.value = await res.json();
            console.log(book.value);
        }
        catch(error){
            console.error(error);
        }
    });
</script>
<template>
    <!-- <div class="w-4/5 mx-auto py-4 flex">
        <BookCard v-for="book in books" :key="book._id" :book = "book"/> 
    </div>  -->
    <BookDetails/>
</template>