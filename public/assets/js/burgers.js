$(function () {
  $(".change-devoured").on("click", function (event) {
    console.log($(this).data("id"));
    var id = $(this).data("id");
    const newDevour = $(this).data("newdevour");
    const newDevourState = {
      devoured: newDevour
    };
    $.ajax("/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      () => {
        console.log("changed devour to", newDevour);
        location.reload();
      }
    );
  });
  $(".form-group button").on("click", (event) => {
    event.preventDefault();
    const newBurger = {
      name: $("#burger").val().trim(),
      devoured: 0
    };
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      () => {
        console.log("created new burger");
        location.reload();
      }
    );
  });
  $(".delete").on("click", () => {
    const id = $(this).data("id");
    console.log("In Delete the id - " + id);
    $.ajax("/" + id, {
      type: "DELETE"
    }).then(
      () => {
        console.log("deleted burger");
        location.reload();
      }
    );
  });
});