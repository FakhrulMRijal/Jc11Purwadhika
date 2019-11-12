<script>

var array1 = [true, true, true, false,
    true, true, true, true,
    true, true, true, false,
    true, true, true, true,
    false, false, true, true]


function array(arr){
    var output = 0
                
                

        // for(var i = 0; i < array1.length; i++) {
        //     if(array1[i] === 'true'){
        //         output += array1[i]
        //     }
        // }
        // return output       
    for(var i = 0; i < array1.length; i++) {
        if(array1[i] === true)
            output += 1 
        } 
     return output
}

console.log(array(true, false))

</script>