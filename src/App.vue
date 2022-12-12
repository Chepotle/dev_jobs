<template>
    <router-view />
</template>

<script>
</script>

<style lang="scss">
@import "@/scss/colors.scss";

body {
    font-family: "Kumbh Sans", sans-serif;
    font-size: 16px;
}

.wrapper {
    background-color: $LightGrey;
    min-height: 100vh;
    position: relative;
}

.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
    background-color: $LightGrey;
}

/*Обнуление*/
* {
    padding: 0;
    margin: 0;
    border: 0;
}

*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

:focus,
:active {
    outline: none;
}

a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

a,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

ul li {
    list-style: none;
}

img {
    vertical-align: middle;
}

/*--------------------*/
</style>
