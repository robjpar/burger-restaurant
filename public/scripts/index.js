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
  burgers.forEach((burger, index) => {
    $('#burger-select').append(`<option data-index=${index}>${burger.name}</option>`);
  });

  const index = parseInt($('#burger-select').find(':selected').data('index'));
  $('#burger-img').html(`<img src="${burgers[index].img}" alt="${burgers[index].name}" width="200">`);

  $('#burger-select').change(() => {
    const index = parseInt($('#burger-select').find(':selected').data('index'));
    $('#burger-img').html(`<img src="${burgers[index].img}" alt="${burgers[index].name}" width="200">`);
  });

  $('#order-button').click(() => {
    const newBurger = {
      burgerName: $('#burger-select').val()
    };
    $.post('/api/burgers', newBurger, () => location.reload());
  });

  $('.deliver-button').click(function() {
    const burgerId = $(this).data('id');
    $.ajax(`/api/burgers/${burgerId}`, {
      type: 'PUT'
    }).then(() => location.reload());
  });

  $('.cancel-button').click(function() {
    const burgerId = $(this).data('id');
    $.ajax(`/api/burgers/${burgerId}`, {
      type: 'DELETE'
    }).then(() => location.reload());
  });

  $('.delete-button').click(function() {
    const burgerId = $(this).data('id');
    $.ajax(`/api/burgers/${burgerId}`, {
      type: 'DELETE'
    }).then(() => location.reload());
  });

});
