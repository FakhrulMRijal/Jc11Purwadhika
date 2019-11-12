<script>
function hitung(number){
    var output = 0
    var split = number.split('plus')
    for(var i = 0; i < split.length; i++){
        output += parseInt(split[i])
    }
    return  output
}

console.log(hitung('1plus1plus1plus8'))

</script>
