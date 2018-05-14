$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//click on X to delete a todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    //check if we hit enter
    if(event.which===13){
        //store value to the user input text
    var todoText = $(this).val()
    //give an empty string after user hits enter
    $(this).val("");
    //add li to the ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})
$(".fa-plus ").click(function(){
    $("input[type='text']").fadeToggle();
})