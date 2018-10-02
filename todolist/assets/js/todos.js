//check of a to do
$("ul").on("click","li",function(){

    console.log($(this).css("color"));

   if($(this).css("color")==="rgb(128, 128, 128)"){       
   	
   $(this).css("color","black");
   $(this).css("text-decoration","none"); 

   }

 else {  
$(this).css("color","grey");
$(this).css("text-decoration","line-through"); 

}
});

// button to delete a to do

$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500,function(){

	$(this).remove();
} );

	event.stopPropagation();
});

//to add a new to do

$("input[type='text']").keypress(function(event){

if(event.which=== 13){
	var newtask= $(this).val();
	$(this).val(" ");
     $("ul").append("<li><span><i class ='fa fa-trash'></i></span> " + newtask + "</li>")
}

});