<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
* {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
body {
    background: $dark-blue;
    font-family: $system-font-family;
    font-weight: 400;
}

h1 {
    @include heading-1;
}

p {
    @include large-text;
}

.light-background {
    background-color: $light-gray;
}

.dark-background {
    background-color: $dark-blue;
}

.light-text {
    color: $white;
}

.dark-text {
    color: $black;
}

.light-field {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    &::placeholder {
        color: rgba(255, 255, 255, 0.2);
    }
}

.dark-field {
    background: rgba(198, 208, 235, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);
    &::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
}

h4 {
    line-height: 34px;
    font-size: 24px;
    text-align: center;
    color: white;
    margin: 0;
}

input {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    height: 60px;
    width: 100%;
    color: white;
    font-size: 20px;
    padding-left: 20px;
    margin-top: 20px;
    &::placeholder {
        color: rgba(255, 255, 255, 0.2);
    }
}

button {
    width: 100%;
    height: 60px;
    background: #56ccf2;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    font-size: 20px;
    border: none;
    color: white;
    margin-top: 20px;
    margin-bottom: 40px;
    cursor: pointer;
}

a {
    color: rgba(255, 255, 255, 0.2);
    text-decoration: none;
    font-size: 16px;
}
</style>
