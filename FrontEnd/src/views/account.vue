<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { useRouter } from 'vue-router';
    import { watchEffect } from 'vue';
    import { useAuthStore } from '@/stores/authStore';
    

    const route = useRoute();
    const router = useRouter();
    const authStore = useAuthStore();

    const activeTab = ref('signin');
    const showPassSignin = ref(false);
    const showPassSignup = ref(false);

    watchEffect(() => {
        activeTab.value = route.query.tab || 'signin';
    });

    //set tab signin or signup
    function setTab(tab){
        activeTab.value = tab;
        router.replace({path: '/tai-khoan', query: {tab}});
    }

    //kiem tra mat khau cua form dang ky
    const usernameSignup = ref('');
    const passwordSignup = ref('');
    const emailSignup = ref('');
    const confirmPasswordSignup = ref('');
    const passwordMatchError = ref(false);
    const passwordLengthError = ref(false);

    function validatePassword() {

        // mk it nhat 8 ky tu
        const minLength = 8;
        let isVal = true;
        if(passwordLengthError.value = passwordSignup.value.length > 0 && passwordSignup.value.length < minLength){
            passwordLengthError.value = true;
            isVal = false;
        }
        else{
            passwordLengthError.value = false;
        }


        // kiem tra trung khop mk
        if(passwordSignup.value && confirmPasswordSignup.value){
            passwordMatchError.value = (passwordSignup.value !== confirmPasswordSignup.value);
            if(passwordMatchError.value){
                isVal = false;
            }
        }
        else if(passwordLengthError.value){
            passwordMatchError.value = false;
        }
        return isVal;
    }

    //submit form dangky
    async function submitFormSignup(){
        if(validatePassword()){
            //gui du lieu len sever
            const userData = {
                username : usernameSignup.value,
                email : emailSignup.value,
                password : passwordSignup.value,
            };

            try{
                const res = await fetch('http://localhost:5000/api/auth', {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(userData),
                });
                
                if(res.ok){
                    await autoLogin();
                    router.push({
                        path: '/'
                    })
                }
                else{
                    alert('Đăng ký thất bại');
                }
            }
            catch(error){
                alert('Lỗi đăng ký ' + error);
            }
        };
    }

    //tu dong dang nhap sau khi dang ky
    async function autoLogin(){
        const signinData = {
            usernameLogin : usernameSignup.value,
            passwordLogin : passwordSignup.value
        }

        try{
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify(signinData),
            });
            if(res.ok){
                const dataSignin = await res.json();
                authStore.setLoginState(dataSignin.user.role, dataSignin.user.username);
            }
        }
        catch(error){
            console.log("Lỗi không xác định")
        }
    }
    //dang nhap
    const usernameSignin = ref('')
    const passwordSignin = ref('')
    async function submitFormSignin() {
        const signinData = {
            usernameLogin : usernameSignin.value,
            passwordLogin : passwordSignin.value
        }
        try{
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"},
                body: JSON.stringify(signinData),
            });
            if(res.ok){
                const dataSignin = await res.json();
                authStore.setLoginState(dataSignin.user.role, dataSignin.user.username);
                // console.log(dataSignin) 
                if(dataSignin.user.role === 'admin'){
                    router.push({
                        path: '/admin/dashboard'
                    });
                }
                else{
                    router.push({
                        path: '/'
                    });
                }
            }
            else{
                alert('Đăng nhập thất bại');
            }
        }
        catch(error){
            alert('Lỗi đăng nhập : ' + error);
        }
    }

    //neu da dang nhap ko truy cap trag tai khoan nx
    function blockAccessIfLoggedIn(){
        if(authStore.isLogin){
            router.replace({
                path: '/'
            })
        }
    }

    onMounted(() => {
        blockAccessIfLoggedIn();
    })

    
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
                <form v-if ="activeTab ==='signin'" @submit.prevent="submitFormSignin">
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-2">
                            <label for="usernameSignin"   class="text-gray-600">Tên đăng nhập/Email</label>
                            <input type="text" id="usernameSignin" class="px-4 py-2 border border-gray-300 rounded-sm" 
                            placeholder="Nhập username hoặc email" required v-model="usernameSignin"/>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex-col flex gap-2">
                                <label for="passwordSignin" class="text-gray-600 gap-2">Mật khẩu</label>
                                <input id="passwordSignin" class="px-4 py-2 border border-gray-300 rounded-sm" 
                                placeholder="Nhập mật khẩu" :type="showPassSignin ? 'text' : 'password'" 
                                v-model="passwordSignin" required/>
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

                <form v-if="activeTab === 'signup'" @submit.prevent="submitFormSignup">
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-2">
                            <label for="usernameSignup" class="text-gray-600">Tên đăng nhập</label>
                            <input type="text" id="usernameSignup" class="px-4 py-2 border border-gray-300 rounded-sm" 
                            placeholder="Nhập username" v-model="usernameSignup" required/>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="emailSignup" class="text-gray-600">Email</label>
                            <input type="email" id="emailSignup" class="px-4 py-2 border border-gray-300 rounded-sm" 
                            placeholder="Nhập email" v-model="emailSignup" required/>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex-col flex gap-2">
                                <label for="passwordSignup" class="text-gray-600 gap-2">Mật khẩu</label>
                                <input id="passwordSignup" :class="['px-4 py-2 border rounded-sm',
                                passwordMatchError ? 'border-red-500' : 'border-gray-300']" 
                                :type="showPassSignup ? 'text' : 'password'" placeholder="Nhập mật khẩu" 
                                v-model="passwordSignup" required @input="validatePassword"/>
                            </div>
                            <div v-if="passwordLengthError">
                                <p class="text-sm text-red-500">Mật khẩu phải có ít nhất 8 ký tự</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex-col flex gap-2">
                                <label for="passwordSignup2" class="text-gray-600 gap-2">Nhập lại mật khẩu</label>
                                <input id="passwordSignup2" :class="['px-4 py-2 border rounded-sm', 
                                passwordMatchError ? 'border-red-500' : 'border-gray-300']" 
                                :type="showPassSignup ? 'text' : 'password'" placeholder="Nhập lại mật khẩu" 
                                v-model="confirmPasswordSignup" required @input="validatePassword"/>
                            </div>
                            <div v-if="passwordMatchError">
                                <p class="text-red-500 text-sm">Mật khẩu không trùng khớp</p>
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
    z-index: 0;
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