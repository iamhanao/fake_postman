$(document).ready(function() {
})

req = function() {
    var url = 'http://'+$('#url').val()
    var k1 = $('#k1').val()
    var v1 = $('#v1').val()
    var param = {}
    param[k1] = v1

    $.post(url,param,function(result) {
        $("#res").html(result)
    },'json')
}