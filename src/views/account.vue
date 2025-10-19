<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { useRouter } from 'vue-router';
    import { watchEffect } from 'vue';

    const route = useRoute();
    const router = useRouter();

    const activeTab = ref('signin');
    const showPassSignin = ref(false);
    const showPassSignup = ref(false);

    // activeTab.value = route.query.tab || 'signin'
    watchEffect(() => {
        activeTab.value = route.query.tab || 'signin';
    });

    function setTab(tab){
        activeTab.value = tab;
        router.replace({path: '/tai-khoan', query: {tab}});
    }
</script>

<template> 
    <div class="bg-gray-100 py-5">
        <div class="flex flex-col w-4/5 mx-auto gap-5 bg-white py-10">
            <div class="flex gap-30 mx-auto">
                <button @click="setTab('signin')" :class="['underline-from-center text-gray-600', 
                activeTab === 'signin' ? 'active-tab' : '']">Đăng nhập</button>
                <button @click="setTab('signup')" :class="['underline-from-center text-gray-600', 
                activeTab === 'signup' ? 'active-tab' : '']">Đăng ký</button>
            </div> 
            <div class="mx-auto w-2/5">
                <form v-if ="activeTab ==='signin'">
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-2">
                            <label for="usernameSignin"   class="text-gray-600">Tên đăng nhập/Email</label>
                            <input type="text" id="usernameSignin" class="px-4 py-2 border border-gray-300 rounded-sm" 
                            placeholder="Nhập username hoặc email">
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex-col flex gap-2">
                                <label for="passwordSignin" class="text-gray-600 gap-2">Mật khẩu</label>
                                <input id="passwordSignin" class="px-4 py-2 border border-gray-300 rounded-sm" 
                                placeholder="Nhập mật khẩu" :type="showPassSignin ? 'text' : 'password'" />
                            </div>
                            <div class="flex justify-between">
                                <div class="flex gap-1">
                                    <input type="checkbox" id="checkboxSignin" v-model="showPassSignin"/>
                                    <label for="checkboxSignin" class="text-gray-600" >Hiển thị mật khẩu</label>
                                </div>
                                <a href="" class="text-red-500 hover:text-red-600">Quên mật khẩu ?</a>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 items-center">
                            <button type="submit" class="rounded-sm text-white bg-blue-500 py-2 px-10 cursor-pointer">Đăng nhập</button>
                        </div>
                    </div> 
                </form>

                <form v-if="activeTab === 'signup'">
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-2">
                            <label for="usernameSignup" class="text-gray-600">Tên đăng nhập/Email</label>
                            <input type="text" id="usernameSignup" class="px-4 py-2 border border-gray-300 rounded-sm" 
                            placeholder="Nhập username hoặc email">
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex-col flex gap-2">
                                <label for="passwordSignup" class="text-gray-600 gap-2">Mật khẩu</label>
                                <input id="passwordSignup" class="px-4 py-2 border border-gray-300 rounded-sm" 
                                :type="showPassSignup ? 'text' : 'password'" placeholder="Nhập mật khẩu"/>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex-col flex gap-2">
                                <label for="passwordSignup2" class="text-gray-600 gap-2">Nhập lại mật khẩu</label>
                                <input id="passwordSignup2" class="px-4 py-2 border border-gray-300 rounded-sm" 
                                :type="showPassSignup ? 'text' : 'password'" placeholder="Nhập lại mật khẩu"/>
                            </div>
                            <div class="flex gap-1">
                                <input type="checkbox" id="checkboxSignup" v-model="showPassSignup"/>
                                <label for="checkboxSignup" class="text-gray-600">Hiển thị mật khẩu</label>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 items-center">
                            <button type="submit" class="rounded-sm text-white bg-blue-500 py-2 px-10 cursor-pointer">Đăng ký</button>
                        </div>
                        <div>
                            <p class="text-xs text-center px-8 py-8">Bằng việc đăng ký, bạn đã đồng ý với YG_Reads về <br/>
                                <a href="" class="text-blue-600 hover:text-blue-700 hover:underline ">Điều khoản dịch vụ</a> &  
                                <a href="" class="text-blue-600 hover:text-blue-700 hover:underline ">Chính sách bảo mật</a>
                            </p>
                        </div>
                    </div> 
                </form>
            </div>
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

.active-tab::after {
  transform: scaleX(1);
  background-color: #16a34a;
}
</style>