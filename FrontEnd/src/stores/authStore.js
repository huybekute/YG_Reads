import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const userRole = ref(localStorage.getItem('role') || null);
    const username = ref(localStorage.getItem('username') || null);

    const isLogin = computed(() => !!username.value);

    //state login
    function setLoginState(role, name, email){
        userRole.value = role;
        username.value = name;

        localStorage.setItem('role', role);
        localStorage.setItem('username', name);
    }

    //state logout
    function setLogoutState(){
        userRole.value = null;
        username.value = null;

        localStorage.removeItem('role');
        localStorage.removeItem('username');
    }
 
    return {
        userRole,
        username,
        isLogin,
        setLoginState,
        setLogoutState
    }
});