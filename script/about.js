$(document).ready(function(){
    $('#team-con').on('click', function(){
        $('#team-con').hide();
        $('#team1').toggle();
        $('#team-content').toggle();

    })

    $('#team-content').on('click', function(){
        $('#team-con').show();
        $('#team1').hide();
        $('#team-content').hide();

    })

    $('#team1').on('click', function(){
        $('#team-con').show();
        $('#team1').hide();
        $('#team-content').hide();

    })

    $('#int-con').on('click', function(){
        $('#int-con').hide();
        $('#int2').toggle();
        $('#int3').toggle();

    })

    $('#int2').on('click', function(){
        $('#int-con').show();
        $('#int2').hide();
        $('#int3').hide();

    })

    $('#int3').on('click', function(){
        $('#int-con').show();
        $('#int2').hide();
        $('#int3').hide();

    })


    $('#vate-con').on('click', function(){
        $('#vate-con').hide();
        $('#vate1').toggle();
        $('#vate2').toggle();

    })

    $('#vate1').on('click', function(){
        $('#vate-con').show();
        $('#vate1').hide();
        $('#vate2').hide();

    })

    $('#vate2').on('click', function(){
        $('#vate-con').show();
        $('#vate1').hide();
        $('#vate2').hide();

    })



})