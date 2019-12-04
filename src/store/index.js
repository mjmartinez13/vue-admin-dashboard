import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const userSelectedDarkMode =
    window.localStorage.getItem("isDarkMode") === "true";

const state = {
    isDarkMode: userSelectedDarkMode
};

const getters = {
    isDarkMode(state) {
        return state.isDarkMode;
    }
};

const mutations = {
    toggleDarkMode(state) {
        if (state.isDarkMode) {
            state.isDarkMode = false;
            document.body.style.background = "#f0f3f5";
            window.localStorage.setItem("isDarkMode", "false");
        } else {
            document.body.style.background = "#212c4f";
            window.localStorage.setItem("isDarkMode", "true");
            state.isDarkMode = true;
        }
    }
};

const actions = {
    triggerDarkMode(context) {
        context.commit("toggleDarkMode");
    }
};

export default new Vuex.Store({
    state,
    // Retraive the state
    getters,
    // Change state
    mutations,
    // couse trigger for mutations async
    actions
});
