<template>
    <div class="container is-max-desktop">
        <div class="notification is-primary">

            <div class="box">
                <h1>PoveziME</h1>

            <router-link to="/vozac"><button class="button">VOZAČ</button></router-link>
            <router-link to="/about"><button class="button">HOME</button></router-link>
            <router-link to="/paket"><button class="button">PAKET</button></router-link>
            <router-link to="/login"><button class="button">LOG IN</button></router-link>
            <router-link to="/singin"><button class="button">SIGN IN</button></router-link>
            </div>
            <div class="box2">
                <p>Putnik</p>
                <b-table :data="data" :columns="columns"></b-table>
            </div>
           

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:00', 'polazak': 'Zagreb', 'destinacija': 'Split', 'kontakt': '0989894854' },
                    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00', 'polazak': 'Zagreb','destinacija': 'Dubrovnik', 'kontakt': '097458458' },
                    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:30', 'polazak': 'Dubrovnik','destinacija':'Varaždin', 'kontakt':'091910195' },
                    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:30', 'polazak': 'Split','destinacija':'Zagreb', 'kontakt': '099568568' },
                    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 15:00', 'polazak': 'Zagreb','destinacija':'Slavonski Brod', 'kontakt':'098980058' }
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'Ime',
                    },
                    {
                        field: 'last_name',
                        label: 'Prezime',
                    },
                    {
                        field: 'date',
                        label: 'Datum i vrijeme polaska',
                        centered: true
                    },
                    {
                        field: 'polazak',
                        label: 'Polazak',
                    },
                    {
                        filed: 'destinacija',
                        label: 'Destinacija',
                    },
                    {
                        filed: 'kontakt',
                        label: 'Kontakt',
                    }
                ]
            }
        }
    }
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

.box2 {
    font-size: 15pt;
    text-align: left;
}

.b-table {
    font-size: 10pt;
    
}

</style>
