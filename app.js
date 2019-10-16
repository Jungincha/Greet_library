

$('#login').click(function() {
    var loginInfo = G$('JungIn', 'Cha');

    $('#logindiv').hide();
    
    loginInfo.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})