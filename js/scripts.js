$(document).ready(function() {
  $('.masthead').waypoint('sticky');

  $('.custom_select').each(function() {

      var $this = $(this),
          numberOfOptions = $(this).children('option').length,
          $styled_select,
          $listItems,
          $list;

      $this.addClass('hidden');
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="styled_select"></div>');

      $styled_select = $this.next('div.styled_select');

      $styled_select.text($this.children('option').eq(0).text());

      $list = $('<ul />', {
          'class': 'options'
      }).insertAfter($styled_select);

      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }

      $listItems = $list.children('li');

      $styled_select.click(function(e) {
          e.stopPropagation();
          $('div.styled_select.active').each(function() {
              $(this).removeClass('active').next('ul.options').hide();
          });
          $(this).toggleClass('active').next('ul.options').toggle();
      });

      $listItems.click(function(e) {
          e.stopPropagation();
          $styled_select.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
      });

      $(document).click(function() {
          $styled_select.removeClass('active');
          $list.hide();
      });

  });
});
