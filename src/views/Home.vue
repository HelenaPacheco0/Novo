<template>
    <div class="container is-max-desktop">

            <div class="box">
                <router-link to="/about">PoveziME</router-link>
                
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

a {text-decoration: none;}
router-link {text-decroation: none;}

</style>
