const burgers = [{
  name: 'Hamburger',
  img: '/images/hamburger.jpg'
}, {
  name: 'Cheeseburger',
  img: '/images/cheeseburger.jpg'
}, {
  name: 'Double Cheeseburger',
  img: '/images/double-cheeseburger.jpg'
}, {
  name: 'Triple Cheeseburger',
  img: '/images/triple-cheeseburger.jpg'
}, {
  name: 'Bacon Smokehouse Burger',
  img: '/images/bacon-smokehouse-burger.jpg'
}, {
  name: 'Double Bacon Smokehouse Burger',
  img: '/images/double-bacon-smokehouse-burger.jpg'
}];

$(() => {
  // Generate options for the select element
  burgers.forEach((burger, index) => {
    $('#burger-select').append(`<option data-index=${index}>${burger.name}</option>`);
  });

  // Display the initial burger picture
  const index = parseInt($('#burger-select').find(':selected').data('index'));
  $('#burger-img').html(`<img src="${burgers[index].img}" alt="${burgers[index].name}" width="200">`);

  // Update the burger picture according to the option selected
  $('#burger-select').change(() => {
    const index = parseInt($('#burger-select').find(':selected').data('index'));
    $('#burger-img').html(`<img src="${burgers[index].img}" alt="${burgers[index].name}" width="200">`);
  });

  // Functionality of the "Place Order" button
  $('#order-button').click((event) => {
    event.preventDefault();
    const newBurger = {
      burgerName: $('#burger-select').val()
    };
    $.post('/api/burgers', newBurger, () => location.reload());
  });

  // Functionality of the "Deliver Order" button
  $('.deliver-button').click(function(event) {
    event.preventDefault();
    const burgerId = $(this).data('id');
    $.ajax(`/api/burgers/${burgerId}`, {
      type: 'PUT'
    }).then(() => location.reload());
  });

  // Functionality of the "Cancel Order" button
  $('.cancel-button').click(function(event) {
    event.preventDefault();
    const burgerId = $(this).data('id');
    $.ajax(`/api/burgers/${burgerId}`, {
      type: 'DELETE'
    }).then(() => location.reload());
  });

  // Functionality of the "Delete" button
  $('.delete-button').click(function(event) {
    event.preventDefault();
    const burgerId = $(this).data('id');
    $.ajax(`/api/burgers/${burgerId}`, {
      type: 'DELETE'
    }).then(() => location.reload());
  });

});
