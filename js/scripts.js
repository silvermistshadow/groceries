$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    $("#outputList").empty();
    $("#listOut").prepend("<ul id='outputList'> </ul>")
    var inputItems = $("input#itemList").val();
    var items = inputItems.split(" ");

    items.sort();

    var outputItems = items.map(function(item){
      return item.toUpperCase();
    });

    outputItems.forEach(function(outputItem){
      $("#outputList").append("<li>" + outputItem + "</li>")
    });

    $("#listOut").show();
    $("#formBox").hide();



  });

  $("#clearList").click(function(){
    $("#formBox").show();
    $("#listOut").hide();

  });

});
