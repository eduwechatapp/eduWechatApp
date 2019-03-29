Component({
    properties: {
        imageUrl:{
            type:String,
            value:'../../pages/img/computer.png'
        },
        placeholder:{
            type:String,
            value:''
        },
        title:{
            type:String,
            value:'购物指南'
        },
        childList:{
            type:Array,
            value:[
                {
                    title: '2333'
                },
                {
                    title: '2222'
                }
            ]
        }
    },
    methods: {
        _listFunction:function(){
           this.triggerEvent('listFunction')
        },
        _childFunc:function(e){
            console.log(e)
        }
    }
})