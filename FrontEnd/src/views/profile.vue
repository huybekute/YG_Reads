<script setup> 
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    import axios from 'axios';
    import { useRoute } from 'vue-router';
    import { useRouter } from 'vue-router';
    
    const route = useRoute();
    const router = useRouter();
    const user = ref({});
    const username = localStorage.getItem('username');
    
    onMounted(async () => {
        const res = await axios.get(`http://localhost:5000/api/auth/${username}`);
        user.value = res.data;
    })

    const activeTab = ref('view')
    function setTab(tab){
        activeTab.value = tab;
        route.replace({ path: '/thong-tin-tai-khoan', query: {tab}})
    }

    const fullNameEdit = ref('');
    const addressEdit = ref('');
    const phoneEdit = ref('');
    
    async function submitFormEdit () {
        const userData = {
            fullName : fullNameEdit.value,
            address: addressEdit.value,
            phone: phoneEdit.value
        }
        try{
            const res = await fetch('http://localhost:5000/api/auth', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(userData),
            });
                
            if(res.ok){
                alert('Cập nhật thông tin thành công');
                router.push({
                    path: '/thong-tin-tai-khoan'
                })
            }
            else{
                alert('Cập nhật thất bại');
            }
        }
        catch(error){
            alert('Lỗi cập nhật' + error);
        }
    }

    
</script>

<template>
    <div v-if="activeTab === 'view'" class="border border-gray-200 my-5 ml-40 w-3/5">
        <div class="my-5 mx-3">
            <div class="flex gap-5 flex-col">
                <h1 class="font-bold text-2xl">THÔNG TIN TÀI KHOẢN</h1>
                <div class="flex">
                    <p class="w-1/3 text-md">Tên đăng nhập</p>
                    <p class="font-bold">{{ user.username || 'Đang cập nhật'}}</p>
                </div>
                <div class="border-b border-dashed border-gray-200"></div>
                <div class="flex">
                    <p class="w-1/3">Email</p>
                    <p class="font-bold">{{ user.email || 'Đang cập nhật'}}</p>
                </div>
                <div class="border-b border-dashed border-gray-200"></div>
                <div class="flex">
                    <p class="w-1/3">Họ và tên</p>
                    <p class="font-bold">{{ user.fullName || 'Đang cập nhật'}}</p>
                </div>
                <div class="border-b border-dashed border-gray-200"></div>
                <div class="flex">
                    <p class="w-1/3">Điện thoại</p>
                    <p class="font-bold">{{ user.phone || 'Đang cập nhật'}}</p>
                </div>
                <div class="border-b border-dashed border-gray-200"></div>
                <div class="flex">
                    <p class="w-1/3">Địa chỉ</p>
                    <p class="font-bold">{{ user.address || 'Đang cập nhật'}}</p>
                </div>
                <div class="border-b border-dashed border-gray-200"></div>
                <div class="flex">
                    <p class="w-1/3">Ngày đăng ký</p>
                    <p class="font-bold">{{ user.createdAt || 'Đang cập nhật' }}</p>
                </div>
            </div>
            <div class="border-b border-gray-200 mx-5 mt-10 mb-5"></div>
            <div class="flex gap-5">
                <button @click="setTab('edit')" class="bg-green-500 text-white rounded-sm p-2 cursor-pointer" >Sửa thông tin</button>
                <a href="" class="bg-gray-400 text-white rounded-sm p-2">Đổi mật khẩu</a>
            </div>
        </div>
    </div>
    <div v-if="activeTab === 'edit'">
        <div class="border border-gray-200 my-5 ml-40 w-3/5">
        <div class="my-5 mx-3">
            <form @submit.prevent="submitFormEdit">
                <div class="flex gap-5 flex-col">
                    <h1 class="font-bold text-2xl">SỬA THÔNG TIN</h1>
                    <div class="flex">
                        <p class="w-1/3 text-md">Tên đăng nhập</p>
                        <p class="font-bold border border-gray-300 py-1 px-2 rounded-sm w-60 bg-gray-200">
                            {{ user.username || 'Đang cập nhật'}}</p>
                    </div>
                    <div class="border-b border-dashed border-gray-200"></div>
                    <div class="flex">
                        <p class="w-1/3">Email</p>
                        <p class="font-bold border border-gray-300 py-1 px-2 rounded-sm w-60 bg-gray-200">
                            {{ user.email || 'Đang cập nhật'}}</p>
                    </div>
                    <div class="border-b border-dashed border-gray-200"></div>
                    <div class="flex">
                        <p class="w-1/3">Họ và tên</p>
                        <input type="text" class="border border-gray-300 py-1 px-2 rounded-sm w-60" 
                        :placeholder="user.fullName || 'Nhập họ tên'" v-model="fullNameEdit">
                    </div>
                    <div class="border-b border-dashed border-gray-200"></div>
                    <div class="flex">
                        <p class="w-1/3">Điện thoại</p>
                        <input type="text" class="border border-gray-300 py-1 px-2 rounded-sm w-60"
                        :placeholder="user.phone || 'Nhập số điện thoại'" v-model="phoneEdit">
                    </div>
                    <div class="border-b border-dashed border-gray-200"></div>
                    <div class="flex">
                        <p class="w-1/3">Địa chỉ</p>
                        <input type="text" class="border border-gray-300 py-1 px-2 rounded-sm w-60"
                        :placeholder="user.address || 'Nhập địa chỉ'" v-model="addressEdit">
                    </div>
                    <div class="border-b border-dashed border-gray-200"></div>
                    <div class="flex">
                        <p class="w-1/3">Ngày đăng ký</p>
                        <p class="font-bold border border-gray-300 py-1 px-2 rounded-sm w-60 bg-gray-200">
                            {{ user.createdAt || 'Đang cập nhật' }}</p>
                    </div>
                    <div>
                        <button type="submit"></button>
                    </div>
                </div>
                <div class="flex gap-5">
                    <button type="submit" class="bg-green-500 text-white rounded-sm p-2 items-center mx-auto cursor-pointer">
                        Cập nhật thông tin</button>
                </div>
            </form>            
        </div>
    </div>
    </div>
</template>