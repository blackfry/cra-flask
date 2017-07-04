(function($){
  $(document).ready(function(){
    $('.comments-btn').on('click', function(e){
      var commentUrl = $(this).attr('href');
      var parentContainer = $(this).parents('.span16');
      var commentContainer = parentContainer.find('.comments');
      if(commentContainer.length === 0) {
        $.get(commentUrl, function(data){
          parentContainer.append(data);
        });
      } else {
        commentContainer.toggle();
      }
      return false;
    });
  });
})(jQuery);