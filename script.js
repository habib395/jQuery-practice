


//when browser load then ir show alert
// $(document).ready(function(){
//     alert('jQuery is ready!')
// })

//show alert when the button i clicked
$(document).ready(function(){
    $("#btn").click(function(){
        alert("Button Clicked!")
    })
});

// $("h2").hide()
// $("h2").show()


$(".second").hide()  //class name

//$("#name").hide()   //id name




$(document).ready(function(){
    $("#hideBtn").click(function(){
        $("#title").hide()
    })
});

$(document).ready

//show and hide by id

$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide()
    })
});
$(document).ready(function(){
    $("#show").click(function(){
        $("p").show()
    })
})


//toggle show and hide
$(document).ready(function(){
    $("#toggle").click(function(){
        $("p").toggle()
    })
})

//change text

$(document).ready(function(){
    $("#change").click(function(){
        $("#demo").text("Text changed.")
    })
})

//css change
$(document).ready(function(){
    $("#color").click(function(){
        $("#demo").css("color", "blue")
    })
})

//fade in and out

$(document).ready(function(){
    $("#fadeout").click(function(){
        $("#box").fadeOut()
    })
})

$(document).ready(function(){
    $("#fadein").click(function(){
        $("#box").fadeIn()
    })
})

//slide up and down
$(document).ready(function(){
    $("#slideup").click(function(){
        $("#box2").slideUp()
    })
});

$(document).ready(function(){
    $("#slidedown").click(function(){
        $("#box2").slideDown()
    })
})

//input value get and set
$(document).ready(function(){
    $("#getVal").click(function(){
        alert($("#myInput").val())
    })
    $("#setVal").click(function(){
        $("#myInput").val("New value set")
    })
})

//event section start

//click event
$(document).ready(function(){
    $("#btn").click(function(){
      $("#msg").text("Button clicked!");
    });
  });

  //hover
  $(document).ready(function(){
    $("#hoverText").hover(
      function(){ $(this).css("color", "red"); },   // mouse enter
      function(){ $(this).css("color", "black"); } // mouse leave
    );
  });

  //key press( problems )
  $(document).ready(function(){
    $("#nameInput").keypress(function(){
      $("#output").text("You are typing...");
    });
  });

  //form submission
  $(document).ready(function(){
    $("#myForm").submit(function(e){
      e.preventDefault(); 
      let name = $("#username").val();
      $("#result").text("Hello, " + name + "!");
    });
  });