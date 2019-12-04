<template>
    <div
        class="container"
        :class="{
            'light-background': !isDarkMode,
            'dark-background': isDarkMode
        }"
    >
        <div
            class="request"
            :class="{
                'opacity-light-text': isDarkMode,
                'opacity-dark-text': !isDarkMode
            }"
        >
            Don't have a Desing+Clode account
            <router-link to="/register">register a new account</router-link>
        </div>
        <div class="login">
            <img v-show="isDarkMode" src="@/assets/DCHQ.svg" alt />
            <img v-show="!isDarkMode" src="@/assets/DCHQ-dark.svg" alt />
            <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
                Sign into Design+Code HQ
            </h4>
            <input
                :class="{
                    'light-field': isDarkMode,
                    'dark-field': !isDarkMode
                }"
                type="email"
                placeholder="Email"
            />
            <input
                :class="{
                    'light-field': isDarkMode,
                    'dark-field': !isDarkMode
                }"
                type="password"
                placeholder="Password"
            />
            <button>Sign In</button>
            <router-link
                to="/recover"
                :class="{
                    'opacity-light-text': isDarkMode,
                    'opacity-dark-text': !isDarkMode
                }"
                >Forgot your password?</router-link
            >
            <ThemeSwitch />
        </div>
    </div>
</template>

<script>
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
    name: "SignIn",
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        }
    },
    components: {
        ThemeSwitch
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.login {
    width: 400px;
}

.request {
    position: absolute;
    top: 40px;
    right: 40px;
    color: rgba(255, 255, 255, 0.3);
    a {
        margin-left: 8px;
        color: white;
    }
}

.opacity-light-text {
    color: rgba(255, 255, 255, 0.3);
    a {
        margin-left: 8px;
        color: white;
    }
}

.opacity-dark-text {
    color: rgba(0, 0, 0, 0.3);
    a {
        margin-left: 8px;
        color: black;
    }
}
</style>
