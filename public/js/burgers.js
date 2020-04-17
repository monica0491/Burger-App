
$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      newBurger = {
        burger_name: $("#newburger").val().trim(),
        devoured: 0
      }
      console.log(newBurger)
  
      // Send the PUT request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(function() {
          console.log("Burger added")
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".eatburger").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
      var devouredState = {
          devoured: true
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredState
      }).then(function() {
          console.log("Burger devoured");
          location.reload();
      });
  });

  });
  

