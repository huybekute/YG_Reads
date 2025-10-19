<script setup>

</script>

<template>
    <div>
        <div class="flex no-underline justify-between items-center w-4/5 mx-auto py-2">
            <RouterLink to ="/"><img src="../assets/Logo.png" alt="YG Reads" class="w-1/4"></img></RouterLink>
            <div class="flex gap-5 items-center">
                <div class="border border-gray-500 p-2 rounded-md">
                    <form action="/search" method="get">
                        <input type="text" placeholder="Tìm kiếm..." name="q" class="border-none outline-none "/>
                        <button type="submit"><i class="fas fa-search cursor-pointer"></i></button>
                    </form>
                </div>
                <div class="relative group">
                    <RouterLink to="/tai-khoan" class="py-3 px-4 rounded-md bg-green-500 hover:bg-green-600 text-white"><i class="fa-solid fa-user"></i> Tài khoản</RouterLink>
                    <div class="absolute flex-col hidden group-hover:flex group-hover:flex-col bg-white 
                    items-center shadow-lg w-40 rounded-md left-1/2 -translate-x-1/2 mt-2 z-10">
                        <RouterLink to ="/dang-nhap" class="p-2 my-4 rounded-md w-4/5 text-center bg-yellow-300 hover:bg-yellow-400 text-white font-medium">Đăng nhập</RouterLink>
                        <RouterLink to ="/dang-ky" class="p-2 mb-2 rounded-md w-4/5 text-center bg-yellow-300 hover:bg-yellow-400 text-white font-medium">Đăng ký</RouterLink>
                    </div>
                </div>  
            </div>
        </div>
        <div class="flex gap-15 mx-auto bg-gray-200 py-4 w-full justify-center menu-arrow">
            <div class="relative group">
                <a href="" class="hover:text-green-700 underline-offset-2 text-black underline-from-center">VĂN HỌC</a>
                <div class="absolute flex-col hidden group-hover:flex group-hover:flex-col bg-white shadow-2xl w-max">
                    <a href="" class="p-2 hover:bg-gray-100">Tiểu Thuyết</a>
                    <a href="" class="p-2 hover:bg-gray-100">Truyện Ngắn - Tản Văn</a>
                    <a href="" class="p-2 hover:bg-gray-100">Truyện Trinh Thám</a>
                    <a href="" class="p-2 hover:bg-gray-100">Thơ Ca</a>
                    <a href="" class="p-2 hover:bg-gray-100">Light Novel</a>
                    <a href="" class="p-2 hover:bg-gray-100">Du Ký</a>
                </div>
            </div>
            <div class="realative group">
                <a href="" class="hover:text-green-700 underline-offset-2 text-black underline-from-center">KINH TẾ</a> 
                <div class="absolute flex-col hidden group-hover:flex group-hover:flex-col bg-white shadow-2xl w-max">
                    <a href="" class="p-2 hover:bg-gray-100">Quản Trị - Lãnh Đạo</a>
                    <a href="" class="p-2 hover:bg-gray-100">Phân Tích Kinh Tế</a>
                    <a href="" class="p-2 hover:bg-gray-100">Marketing - Bán Hàng</a>
                    <a href="" class="p-2 hover:bg-gray-100">Tài Chính - Ngân Hàng</a>
                    <a href="" class="p-2 hover:bg-gray-100">Nhân sự - Việc làm</a>
                    <a href="" class="p-2 hover:bg-gray-100">Kế toán - Kiểm toán</a>
                    <a href="" class="p-2 hover:bg-gray-100">Bài Học Kinh Doanh</a>
                </div>
            </div>
            <div class="relative group">
                <a href="" class="hover:text-green-700 underline-offset-2 text-black underline-from-center">THIẾU NHI</a>
                <div class="absolute flex-col hidden group-hover:flex group-hover:flex-col bg-white shadow-2xl w-max">
                    <a href="" class="p-2 hover:bg-gray-100">Truyện Thiếu Nhi</a>
                    <a href="" class="p-2 hover:bg-gray-100">Kiến Thức - Kỹ Năng Sống</a>
                    <a href="" class="p-2 hover:bg-gray-100">Từ Điển</a>
                    <a href="" class="p-2 hover:bg-gray-100">Tạp Chí Thiếu Nhi</a>
                    <a href="" class="p-2 hover:bg-gray-100">Sách Nói</a>
                    <a href="" class="p-2 hover:bg-gray-100">Thẻ Học Thông Minh</a>
                    <a href="" class="p-2 hover:bg-gray-100">Tô Màu, Luyện Chữ</a>
                    <a href="" class="p-2 hover:bg-gray-100">Kiến Thức Bách Khoa</a>
                </div>
            </div>

            <div class="relative group">
                <a href="" class="hover:text-green-700 underline-offset-2 text-black underline-from-center">NGOẠI NGỮ</a>
                <div class="absolute flex-col hidden group-hover:flex group-hover:flex-col bg-white shadow-2xl w-max">
                    <a href="" class="p-2 hover:bg-gray-100">Tiếng Anh</a>
                    <a href="" class="p-2 hover:bg-gray-100">Tiếng Nga</a>
                    <a href="" class="p-2 hover:bg-gray-100">Tiếng Đức</a>
                    <a href="" class="p-2 hover:bg-gray-100">Tiếng Hàn</a>
                    <a href="" class="p-2 hover:bg-gray-100">Tiếng Nhật</a>
                    <a href="" class="p-2 hover:bg-gray-100">Tiếng Trung</a>
                    <a href="" class="p-2 hover:bg-gray-100">Tiếng Pháp</a>
                    <a href="" class="p-2 hover:bg-gray-100">Ngoại Ngữ Khác</a>
                </div>
            </div>

            <div class="relative group">
                <a href="" class="hover:text-green-700 underline-offset-2 text-black underline-from-center">TIỂU SỬ</a>
                <div class="absolute flex-col hidden group-hover:flex group-hover:flex-col bg-white shadow-2xl w-max">
                    <a href="" class="p-2 hover:bg-gray-100">Câu Chuyện Cuộc Đời</a>
                    <a href="" class="p-2 hover:bg-gray-100">Thể Thao</a>
                    <a href="" class="p-2 hover:bg-gray-100">Kinh Tế</a>
                    <a href="" class="p-2 hover:bg-gray-100">Chính Trị</a>
                    <a href="" class="p-2 hover:bg-gray-100">Nghệ Thuật - Giải Trí</a>
                    <a href="" class="p-2 hover:bg-gray-100">Hồi Ký</a>
                </div>
            </div>

            <div class="relative group">
                <a href="" class="hover:text-green-700 underline-offset-2 text-black underline-from-center">TÂM LÝ</a>
                <div class="absolute flex-col hidden group-hover:flex group-hover:flex-col bg-white shadow-2xl w-max">
                    <a href="" class="p-2 hover:bg-gray-100">Tâm Lý</a>
                    <a href="" class="p-2 hover:bg-gray-100">Kỹ Năng Sống</a>
                    <a href="" class="p-2 hover:bg-gray-100">Rèn Luyện Nhân Cách</a>
                    <a href="" class="p-2 hover:bg-gray-100">Sách Cho Tuổi Mới Lớn</a>
                    <a href="" class="p-2 hover:bg-gray-100">Hạt Giống Tâm Hồn</a>
                </div>
            </div>
            <a href="" class="hover:text-green-700 underline-offset-2 text-black underline-from-center">TÌNH CẢM</a>
            <a href="" class="hover:text-green-700 underline-offset-2 text-black underline-from-center">KHOA HỌC, CÔNG NGHỆ</a>
            <a href="" class="hover:text-green-700 underline-offset-2 text-black underline-from-center">KHÁC</a>
        </div>
    </div>
</template>


<style scoped>

/*hieu ung gach chan*/
.underline-from-center {
    position: relative;
    display: inline-block;
    text-decoration: none;
}

.underline-from-center::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px; 
    background-color: #16a34a; 
    transform: scaleX(0); 
    transform-origin: center; 
    transition: transform 0.3s ease-out;
}

.underline-from-center:hover::after {
    transform: scaleX(1);
}
</style>