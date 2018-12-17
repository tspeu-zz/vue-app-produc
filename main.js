//vue instance-> el #element bind to de div Id #
//data->
//actions->
var app= new Vue({
    el: '#app',
    data : {
        product: 'Socks',
        linkin : false,
        buttonDeshabi : true,
        segundos : 0,
        image: 'assets/sock-green.jpeg',
        altText :'A pair of VUE socks',
        anchText: '#',
        inStock : true, 
        inventory : 100
    },
    created(){
        // setInterval(() => {
        //     this.segundos ++
        // } , 1000);
    }
});
