<template>
    <div class="container is-max-desktop">
        <div class="notification is-primary">

            <div class="box">
                PoveziME
            </div>

            <div class="box">
            <router-link to="/about"><button class="button">Nazad</button></router-link>
            </div>
            <div class="box2">
                
            <form>
            <b-field label="Ime">
             <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Email"
                type="is-danger"
                message="This email is invalid">
                <b-input type="email"
                 value="john@"
                 maxlength="30">
                </b-input>
            </b-field>

            <b-field label="Username"
             type="is-success"
             message="This username is available">
             <b-input value="johnsilver" maxlength="30"></b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password"
                    value="iwantmytreasure"
                    password-reveal>
                </b-input>
            </b-field>

            <b-field label="Poruka">
                <b-input maxlength="200" type="textarea"></b-input>
            </b-field>

            <button class="button">Obriši</button>
            <button class="button">Pošalji</button>
            </form>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                name: 'John Silver'
            }
        }
    }
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

.box, .box2{
    background-color: #509bf5;
    padding: 40px;
    font-size: 50px;
    border-radius: 4px;
    margin: 10px;
    color: white;
}

a {text-decoration: none;}
.is-primary {background-color: white;}
router-link {text-decroation: none;}

label {
    color: white;
}

</style>
