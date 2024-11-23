<template>
    <div class="ap-wrapper">
       <div class="ap-content">
            <div class="title">
                <h3>Add Post</h3>
            </div>
            <div class="post-details">
                <form>
                    <div class="form-group">
                        <input type="text" placeholder="Whats happening?">
                    </div>
                    <div class="action">
                        <IconsImage/>
                        <button class="btn">Post</button>
                    </div>
                </form>
            </div>
       </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.ap-wrapper{
    .ap-content{
        padding:10px;
        margin:0 auto;
        width: 750px;
        border:1px solid #ccc;
        border-radius: 4px;
    }
}
.form-group{
    input{
        width: 90%;
    }
}
.action{
    padding:10px;
    display: flex;
    justify-content: space-between;
    align-items:center;
}
</style>