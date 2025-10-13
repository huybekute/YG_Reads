<script setup>
    const product = [
        {
            id: 1,
            name: 'Mưa Đỏ',
            image: '../assets/product/01_MuaDo.webp',
            price: '150.000 đ',
            oldPrice: '200.000 đ',
            supplier: 'Cty Tri Thức Văn Hóa Sách VN',
            publishing: 'Quân Đội Nhân Dân',
            author: 'Chu Lai',
            coverFormat: 'Bìa mềm',
            publicationYear: '2025',
            weight: '350',
            packagingSize: '22 x 14 x 1.6cm',
            numberOfPage: 334,
            description: 'Những miền cảm xúc đan xen giữa nụ cười - nước mắt, nỗi đau - niềm vui, sự sống - cái chết, những thăng hoa - mất mát, sự hy sinh của những người cha, người chồng, người con, những người lính, những đồng chí, đồng đội đã không tiếc máu xương trong cuộc chiến đấu 81 ngày đêm bảo vệ thành Cổ Quảng Trị, bảo vệ Tổ quốc với những gian khổ, thiểu thốn lẫn những mất mát đau thương. Đó là một tiểu đội có 7 người lính với 7 tính cách, số phận, suy nghĩ và xuất thân khác nhau. Có người lãng tử, có người bộc trực, có anh lính nhút nhát, có anh lính gan dạ nhưng hơn tất cả họ là một gia đình, luôn có nhau dù đang giữa ranh giới mong manh sự sống và cái chết cận kề.'
        },

        {
            id: 2,
            name: 'Cây Cam Ngọt Của Tôi',
            image: '../assets/product/02_CayCamNgotCuaToi.webp',
            price: '90.000 đ',
            oldPrice: '130.000 đ'
        }
    ]
</script>

<template>
    <div>
        <img src="../assets/product/01_MuaDo.webp" alt="MuaDo" class="w-1/5"/>
        <h1>Mưa Đỏ</h1>
        <p class="text-red-500 font-bold">150.000 đ</p>
        <p><del>200.000 đ</del></p>
    </div>
</template>