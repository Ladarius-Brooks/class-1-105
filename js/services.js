$(function(){
    $('#reebok').on('click',function(){
        $('#reebok p').show();
        $('#nike p').hide();
        $('#jordan p').hide();
        $('#reebok img').show();
        $('#nike img').hide();
        $('#jordan img').hide();
    })

    $('#nike').on('click',function(){
        $('#nike p').show();
        $('#reebok p').hide();
        $('#jordan p').hide();
        $('#nike img').show();
        $('#reebok img').hide();
        $('#jordan img').hide();
    })
    
    $('#jordan').on('click',function(){
        $('#jordan p').show();
        $('#nike p').hide();
        $('#reebok p').hide();
        $('#jordan img').show();
        $('#nike img').hide();
        $('#reebok img').hide();
    })
});
