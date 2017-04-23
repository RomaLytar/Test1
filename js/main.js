var h_hght = 70; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна
                        
    $(function(){
      
        var elem = $('.main_header');
        var top = $(this).scrollTop();
             
        if(top > h_hght){
        elem.css('top', h_mrg);
        }           
           
        $(window).scroll(function(){
        top = $(this).scrollTop();
               
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
            } else {
            elem.css('top', h_mrg);
        }
    });
     
});
 
    $(document).ready(function() { 
      $(".menu_icon").toggle(function() { 
        // Отображаем скрытый блок 
        $(".menu").fadeIn(); // fadeIn - плавное появление
        return false; // не производить переход по ссылке
      },  
      function() { 
        // Скрываем блок 
        $(".menu").fadeOut(); // fadeOut - плавное исчезновение 
        return false; // не производить переход по ссылке
      }); // end of toggle() 
    }); // end of ready() 




/*$('.menu_icon').click(function(){
    $('.menu').toggle();
})  ; 

/*$(document).ready(function(){
    $(".appointment_form").validate({
        rules:{
            name:{
                required:true,
                sinlength: 2,
                maxlength: 20,
            },
                
                email:{
                required:true,
                sinlength: 4,
                maxlength: 40,

            },
        },
    });
});    */


