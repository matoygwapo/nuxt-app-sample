<template>
    <div>
        <div class="header-wrapper">
            <div class="header-content">
                <nuxt-link to="/" class="logo">
                        <IconsLogo/>
                        <h2>Post It</h2>
                </nuxt-link>
                <div class="user">
                    <IconsUser/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header-content{
    display: flex;
    justify-content: space-between;
    .logo{
    display: flex;
    gap:10px;
    text-decoration: none;
    color:#000;
    }
}
</style>