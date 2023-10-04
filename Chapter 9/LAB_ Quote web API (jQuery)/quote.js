$(function () {
   $("#fetchQuotesBtn").click(function () {
      let selectedTopic = $('#topicSelection option:selected').val();
      let selectedCount = $('#countSelection option:selected').val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   let reqUrl = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
   $.ajax({
      url: reqUrl,
      dataType: 'text',
      type: "GET",
      data: "",
      contentType: false,
      cache: true,
      processData: false,
      success: function (data) {

         var r_data = JSON.parse(data);

         let html = "";

         if (r_data.error) {
            html = `<div>${r_data.error}</div>`;
         } else {
            html = "<ol>";

            for (let c = 0; c < parseInt(count); c++) {
               html += '<li>' + r_data[parseInt(c)]['quote'] + ' - ' + r_data[parseInt(c)]['source'] + ' </li>';
            }
            html += '</ol>';
         }
         $('#quotes').html(html);
      },
      error: function () {
      }
   });
}

