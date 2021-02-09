<template>
    <div class="container is-max-desktop">
        

            <div class="box">
                <h1>PoveziME</h1>
            <router-link to="/vozac"><button class="button">VOZAČ</button></router-link>
            <router-link to="/putnik"><button class="button">PUTNIK</button></router-link>
            <router-link to="/paket"><button class="button">PAKET</button></router-link>
            <router-link to="/login"><button class="button">LOG IN</button></router-link>
            <router-link to="/singin"><button class="button">SIGN IN</button></router-link>
            </div>
            <div class="box">
                <p> Da li trebaš prijevoz? <br> 
                    Da li trebaš suputnika?<br>
                    Ili imaš mjesto za paket?
                 </p>
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
    font-size: 8pt;
    color: white;
    margin: 10px;
    padding: 10px;
    background-color: rgb(122, 113, 11, 0.7); 
    border-radius: 15px 0px;
    width: 10%;
}

.button:hover {
    background-color:#ffffff;
    color: rgb(122, 113, 11, 0.7);
}

.box{
    background-color: rgba(24, 22, 22, 0.4);
    padding: 40px;
    font-size: 50px;
    border-radius: 4px;
    margin: 10px;
    color: white;
}

a {text-decoration: none;}

p {
    font-size: 20pt;
}

</style>
