<script setup>

</script>

<template>
    <div>
        <div class="flex">
            <div class="flex flex-col bg-gray-200 gap-5 text-xl px-3 h-screen py-5 border-r border-gray-300">
                <h1 class="text-2xl px-5 font-bold">ADMIN</h1>
                <RouterLink to ="/admin/dashboard" class="hover:bg-gray-300 px-5 py-3">Bảng điều khiển</RouterLink>
                <RouterLink to ="/admin/user-management" class="hover:bg-gray-300 px-5 py-3">Quản lý người dùng</RouterLink>
                <RouterLink to ="/admin/content-management" class="hover:bg-gray-300 px-5 py-3">Quản lý nội dung</RouterLink>
                <RouterLink to ="/admin/order-management" class="hover:bg-gray-300 px-5 py-3">Quản lý đơn hàng / giao dịch</RouterLink>
            </div>
            <div class="flex-1 p-3">
                <RouterView/>
            </div>
        </div>
    </div>
</template>
