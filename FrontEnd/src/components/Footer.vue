<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const showFooter = computed(() => route.path !== '/admin')
</script>

<template>
    <div class="border-t border-gray-200 mb-8" v-if="showFooter"></div>
    <div class="w-4/5 mx-auto py-10" v-if="showFooter">
        <div class="flex justify-center gap-20">
            <div class="space-y-4">
                <div class="flex flex-col space-y-2">
                    <h1 class="text-black font-bold">GIỚI THIỆU</h1>
                    <RouterLink to = "/gioi-thieu" class="text-blue-600 hover:text-blue-700 hover:underline">Giới thiệu</RouterLink>
                    <RouterLink to = "/quyen-rieng-tu" class="text-blue-600 hover:text-blue-700 hover:underline">Quyền riêng tư</RouterLink>
                    <RouterLink to= "/dieu-khoan-dich-vu" class="text-blue-600 hover:text-blue-700 hover:underline">Điều khoản dịch vụ</RouterLink>
                    <a href="" class="text-blue-600 hover:text-blue-700 hover:underline">Thông tin khuyến mại</a>
                </div>
                <div class="flex flex-col space-y-2">
                    <h1 class="font-bold">CHÍNH SÁCH BÁN HÀNG</h1>
                    <RouterLink to ="/chinh-sach-van-chuyen" class="text-blue-600 hover:text-blue-700 hover:underline">Chính sách vận chuyển</RouterLink>
                    <RouterLink to ="/chinh-sach-bao-hanh" class="text-blue-600 hover:text-blue-700 hover:underline">Chính sách bảo hành</RouterLink>
                    <RouterLink to ="/chinh-sach-doi-tra-va-hoan-tien" class="text-blue-600 hover:text-blue-700 
                    hover:underline">Chính sách đổi trả và hoàn tiền</RouterLink>
                    <a href="" class="text-blue-600 hover:text-blue-700 hover:underline">Phương thức thanh toán</a>
                </div>
            </div>
            <div class="flex flex-col space-y-2">
                <h1 class="font-bold">TƯ VẤN BÁN HÀNG</h1>
                <p><span class="font-bold">Mr. A:</span> 012345678</p>
                <p><span class="font-bold">Mr. B:</span> 012345678</p>
                <p><span class="font-bold">Mrs. C:</span> 012345678</p>
                <p><span class="font-bold">Mrs. D:</span> 012345678</p>
                <p><span class="font-bold">Mr. E:</span> 012345678</p>
                <p><span class="font-bold">Mr. F:</span> 012345678</p>
                <p><span class="font-bold">Kỹ thuật:</span> 012345678</p>
            </div>
            <div class="flex flex-col space-y-2">
                <h1 class="font-bold">LIÊN HỆ</h1>
                <a href="https://www.facebook.com/KingYG1804/" class="text-blue-600 hover:text-blue-700 hover:underline"
                target="_blank">Facebook: Nguyễn Huy</a>
                <p>SĐT: 0393244131</p>
                <p>Email: huynguyen.2764@gmail.com</p>
                <p>Thời gian làm việc: 08h-22h</p>
                <img src="../assets/Logo.png" class="w-32 h-auto">
            </div>
            <div class="space-y-4">
                <div class="flex flex-col space-y-2">
                    <h1 class="font-bold">CHÚNG TÔI TRÊN</h1>
                    <div class="flex space-x-2 text-3xl">
                        <a href="" class=""><i class="fab fa-facebook-f"></i></a>
                        <a href="" class=""><i class="fab fa-instagram"></i></a>
                        <a href="" class=""><i class="fab fa-youtube"></i></a>
                        <a href="" class=""><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>
                <div class="flex flex-col space-y-2">
                    <h1 class="font-bold">THÔNG TIN KHÁC</h1>
                    <a href="" class="text-blue-600 hover:text-blue-700 hover:underline">Tích điểm</a>
                    <a href="" class="text-blue-600 hover:text-blue-700 hover:underline">Lịch sử mua hàng</a>
                    <a href="" class="text-blue-600 hover:text-blue-700 hover:underline">Chất lượng phục vụ</a>
                    <a href="" class="text-blue-600 hover:text-blue-700 hover:underline">Góp ý</a>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <p>Copyright © 2025</p>
            <p>216 Tầm Vu, Phường Tân An, Tp. Cần Thơ</p>
        </div>
    </div>
</template>