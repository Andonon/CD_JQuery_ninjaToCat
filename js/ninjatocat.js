/*******************************************************************/
/* Created: June 2 2017 by Troy Center, troycenter1@gmail.com.      */
/* INSERTDESCRIPTION                                               */
/*******************************************************************/
/***************************************************/
/*         Javascript                              */
/***************************************************/
"use strict";
    $(document).ready(function(){ 
        $('img').click(function(){
            $(this).fadeOut(300, function(){
                var currsrc = $(this).attr('src');
                var altsrc = $(this).attr('alternateimgsrc'); 
                $(this).attr("src", altsrc);
                $(this).attr("alternateimgsrc", currsrc);  
                $(this).fadeIn(300);           
            });
        })
    });    
    