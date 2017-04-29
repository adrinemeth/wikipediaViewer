var html = '';

function search() {
  // Use Ajax to handle things
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val(),
    dataType: 'jsonp',
    type: 'POST',
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data) {

      // First we clear the children from our class to make sure no previous results are showing.
      $('.results').empty();

      var resArr = data.query.search;

      //For each result, generate the html data.
      resArr.forEach(function(result) {
     
        html = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + result.title + '"target="_blank"><h3>' + result.title + '</h3><p>' + result.snippet + '</p></a></div>';

        // Displays the elements to the page
        $('.results').append(html);
        $('.articles').css('display', 'block');
      });
    }
  });
};

$('#search').keyup(function() {
  search();
});
