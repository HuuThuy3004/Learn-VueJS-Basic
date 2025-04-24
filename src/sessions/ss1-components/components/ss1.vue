<script>
export default {
    name: 'ss1',
    data() {
        return {
            appName: 'Vue.js Basic App',
            appDescription: 'This is a simple Vue.js application.',
            appVersion: '1.0.0',
            appAuthor: 'Your Name',
            appLicense: 'MIT',
            appYear: new Date().getFullYear(),
            appCopyright: `© ${new Date().getFullYear()} Your Name. All rights reserved.`,
            appLicenseText: `This project is licensed under the ${this.appLicense} License. See the LICENSE file for details.`
        };
    }
};
</script>

<template>
    <div class="ss1">
        <h1>Welcome to Your Vue.js App</h1>
        <p>This is a simple Vue.js application.</p>
        <p>Version: 1.0.0</p>
        <p>Author: Your Name</p>
        <p>License: MIT</p>
        <p>Year: {{ new Date().getFullYear() }}</p>
        <p>Copyright: © {{ new Date().getFullYear() }} Your Name. All rights reserved.</p>
        <p>License Text: This project is licensed under the MIT License. See the LICENSE file for details.</p>
    </div>
</template>

<style>
    .ss1 {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .ss1 h1 {
        font-size: 2em;
        margin-bottom: 20px;
    }
</style>