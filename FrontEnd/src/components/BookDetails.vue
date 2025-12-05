<script setup>
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    import axios from 'axios';

    const book = ref({});

    onMounted(async () => {
        const res = await axios.get(`http://localhost:5000/api/books/1`);
        book.value = res.data;
    })


</script>

<template>
    <div class="bg-gray-100 py-10">
        <div class="flex w-4/5 mx-auto gap-5">
            <div class="w-2/5 bg-white rounded-xl sticky top-5 h-fit">
                <div class="">
                    <img :src="`/product/${ book.image }/index.jpg`" class="w-3/5 mx-auto p-5">
                </div>
                <div class="flex w-9/10 h-30 justify-center gap-2 mx-auto my-2">
                    <img :src="`/product/${ book.image }/item1.jpg`" class="w-1/5 object-cover">
                    <img :src="`/product/${ book.image }/item2.jpg`" class="w-1/5 object-cover">
                    <img :src="`/product/${ book.image }/item3.jpg`" class="w-1/5 object-cover">
                    <img :src="`/product/${ book.image }/item4.jpg`" class="w-1/5 object-cover">
                    <div v-if="book.image" class="w-1/5 flex items-center justify-center bg-gray-200 
                       text-gray-600 cursor-pointer"> +{{ 2 }}
                    </div>
                </div>
                
                <div class="flex justify-center mx-auto px-4 py-2 gap-5">
                    <a href="" class="border-2 rounded-md border-red-700 text-red-700 w-1/2 text-center py-3 font-bold"><i class="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng</a>
                    <a href="" class="bg-red-700 rounded-md text-white w-1/2 text-center py-3 font-bold">Mua ngay</a>
                </div>
                <div class="flex flex-col px-4 gap-5 py-5">
                    <h1 class="font-bold">Chính sách ưu đãi của YG Reads</h1>
                    <div class="flex justify-between">
                        <a href="" class="text-sm"><span class="font-bold "><i class="fa-solid fa-truck-fast"></i> 
                            Thời gian giao hàng: </span> Giao nhanh và uy tín</a>
                    </div>
                    <div class="flex justify-between">
                        <a href="" class="text-sm"><span class="font-bold "><i class="fa-solid fa-box-open"></i> 
                            Chính sách đổi trả: </span> Đổi trả miễn phí toàn quốc</a>
                    </div>
                </div>
            </div>
            <div class="w-3/5 space-y-2">
                <div class="bg-white space-y-4 p-5 rounded-xl" style="font-family:'Nunito Sans', sans-serif;">
                    <h1 class="font-bold text-2xl">{{ book.name }}</h1>
                    <div class="flex gap-30">
                        <div class="">
                            <p>Nhà cung cấp : <span class="font-bold">
                                {{ book.supplier?.name || 'Đang cập nhật'}}</span></p>
                            <p>Nhà xuất bản : <span class="font-bold">{{ book.publishing?.name || 'Đang cập nhật'}}</span></p>
                            <p class="text-sm filter text-gray-500">Đã bán: 5.1k</p>
                        </div>
                        <div class="">
                            <p>Tác giả: <span class="font-bold">{{ book.author?.name || 'Đang cập nhật'}}</span></p>
                            <p>Hình thức bìa: <span class="font-bold">{{ book.coverFormat || 'Đang cập nhật'}}</span></p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="flex gap-3">
                            <h1 v-if="book.price" class="text-3xl text-red-600 font-bold">
                                {{ book.price.toLocaleString('vi-VN')}}</h1>
                            <h1 v-if="book.oldPrice" class="text-xl text-gray-500"><del>
                                {{ book.oldPrice.toLocaleString('vi-VN') }}</del></h1>
                            <h1 class="text-white bg-red-600 px-2 py-1 font-bold rounded">
                                {{ '-' + ((book.oldPrice - book.price)/book.oldPrice)*100 + '%' }}</h1>
                        </div>
                        <div>
                            <p class="text-red-500">Chính sách khuyến mãi trên chỉ áp dụng tại YG Reads</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white space-y-4 p-5 rounded-xl">
                    <h1 class="text-xl font-bold">Thông tin vận chuyển</h1>
                    <!-- <div>
                        <p class="font-bold text-lg">Số lượng</p>
                    </div> -->
                </div>
                <div class="bg-white space-y-4 p-5 rounded-xl">
                    <h1 class="text-xl font-bold space-y-2">Thông tin chi tiết</h1>
                    <div class="flex flex-col">
                        <div class="flex border-b border-gray-200 py-2">
                            <p class="text-gray-500 w-1/3">Mã hàng</p>
                            <p>{{ book.bookID || 'Đang cập nhật' }}</p>
                        </div>
                        <div class="flex border-b border-gray-200 py-2">
                            <p class="text-gray-500 w-1/3">Tên nhà cung cấp</p>
                            <p>{{ book.supplier?.name || 'Đang cập nhật' }}</p>
                        </div>
                        <div class="flex border-b border-gray-200 py-2">
                            <p class="text-gray-500 w-1/3">Tác giả</p>
                            <p>{{ book.author?.name || 'Đang cập nhật' }}</p>
                        </div>
                        <div class="flex border-b border-gray-200 py-2">
                            <p class="text-gray-500 w-1/3">Nhà Xuất Bản</p>
                            <p>{{ book.publishing?.name || 'Đang cập nhật' }}</p>
                        </div>
                        <div class="flex border-b border-gray-200 py-2">
                            <p class="text-gray-500 w-1/3">Thể loại</p>
                            <p>{{ book.category?.name || 'Đang cập nhật' }}</p>
                        </div>
                        <div class="flex border-b border-gray-200 py-2">
                            <p class="text-gray-500 w-1/3">Năm Xuất Bản</p>
                            <p>{{ book.publicationYear || 'Đang cập nhật' }}</p>
                        </div>
                        <div class="flex border-b border-gray-200 py-2">
                            <p class="text-gray-500 w-1/3">Trọng lượng</p>
                            <p>{{ book.weight || 'Đang cập nhật' }}</p>
                        </div>
                        <div class="flex border-b border-gray-200 py-2">
                            <p class="text-gray-500 w-1/3">Kích thước bao bì</p>
                            <p>{{ book.packagingSize || 'Đang cập nhật' }}</p>
                        </div>
                        <div class="flex border-b border-gray-200 py-2">
                            <p class="text-gray-500 w-1/3">Số trang</p>
                            <p>{{ book.numberOfPage || 'Đang cập nhật' }}</p>
                        </div>
                        <div class="flex border-b border-gray-200 py-2">
                            <p class="text-gray-500 w-1/3">Hình thức bìa</p>
                            <p>{{ book.coverFormat || 'Đang cập nhật' }}</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white space-y-4 p-5 rounded-xl">
                    <h1 class="font-bold text-xl">Mô tả sản phẩm</h1>
                    <h2 class="font-bold">{{ book.name }}</h2>
                    <p class="text-sm"> {{ book.description || 'Đang cập nhật' }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>