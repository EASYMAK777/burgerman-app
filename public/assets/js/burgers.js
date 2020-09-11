$(function() {
    $(".change-delicious").on("click", function(event) {
      var id = $(this).data("id");
      var newFlavor = $(this).data("newflavor");
  
      var newFlavorState = {
        delicious: newFlavor
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newFlavorState
      }).then(
        function() {
          console.log("changed taste to", newFlavor);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        delicious: $("[burger=delicious]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burgers").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burgers", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });