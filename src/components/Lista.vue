<template>
    <div class="container is-max-desktop">
        <div class="notification is-primary">

            <div class="box">
                PoveziMe
            </div>
            <div class="box">
            <button class="button">VOZAČ</button>
            <button class="button">PUTNIK</button>
            <button class="button">PAKET</button>
            <button class="button">LOG IN</button>
            <button class="button">SIGN IN</button>
            </div>

        </div>
    </div>
</template>

<script>
export default{}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button {
    all: unset;
    font-familly: Roboto, sans-serif;
    font-size: 15pt;
    color: white;
    margin: 10px;
    padding: 25px;
    background-color: #1b71da; 
    border-radius: 15px 0px;
    width: 10%;
}

.button:hover {
    background-color:#ffffff;
    color: #1b71da;
}

.box{
    background-color: #509bf5;
    padding: 40px;
    font-size: 50px;
    border-radius: 4px;
    margin: 10px;
}


</style>
