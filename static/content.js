$( document ).ready(function() {

    var trump_fulltext;
    $.getJSON("https://raw.githubusercontent.com/andrewjtimmons/national_convention_sentiment/master/trump_rnc_speech_fulltext_analyzed.json", function(json) {
        trump_fulltext = json
        $('#trump-total-sentiment').append(
            "<div class='row text-row'>"+
            "<div class='col-md-10 speech-text'>Trump Overall Sentiment</div>" +
            "<div class='col-md-1 polarity'>"+trump_fulltext['documentSentiment']['polarity']+"</div>"+
            "<div class='col-md-1 magnitude'>"+trump_fulltext['documentSentiment']['magnitude']+"</div>"+
            "</div>"
        )
    });

    var trump_paragraphs;
    $.getJSON("https://raw.githubusercontent.com/andrewjtimmons/national_convention_sentiment/master/trump_rnc_speech_paragraphs_analyzed.json", function(json) {
        trump_paragraphs = json
        trump_paragraphs.forEach(function (paragraph) {
            $('#trump-paragraph-sentiment').append(
                "<div class='row text-row'>"+
                "<div class='col-md-10 speech-text'>"+paragraph['text']+"</div>" +
                "<div class='col-md-1 polarity'>"+paragraph['analysis']['documentSentiment']['polarity']+"</div>"+
                "<div class='col-md-1 magnitude'>"+paragraph['analysis']['documentSentiment']['magnitude']+"</div>"
                +"</div>"
            );
            $( "#trump-paragraph-sentiment div:nth-last-child(1) div:nth-last-child(2)" ).css("background-color", "yellow");
            $( "#trump-paragraph-sentiment div:nth-last-child(1) div:nth-last-child(1)" ).css("background-color", "yellow");

        });
    });

});