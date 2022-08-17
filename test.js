(function(){
    console.log('LOADED')
    var getCode = ((mob)=>{
        console.log('mob=' + mob)
    });
    
    getCode('test')
})()

function getCode(mob) {
    console.log('mob2=' + mob)
}
