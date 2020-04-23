<template>
    <div id="HomePage">
        <h1>HomePage</h1>
        <p>
            You Are logged in
        </p>
        <span>{{ message }}</span>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        message: "test",
        data() {
            return {};
        }
    }
</script>

<style scoped>
    #HomePage {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>