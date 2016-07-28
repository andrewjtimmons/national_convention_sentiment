$( document ).ready(function() {

    function setPolarityBackground(container, polarity) {
        if (polarity > 0) {
            baseColor = 150
            maxSaturation = 55
            brightness = 55
        } else{
            baseColor = 30
            maxSaturation = 100
            brightness = 55
        }
        polarityPercent = Math.abs(polarity) * maxSaturation
        $( container + " div:nth-last-child(1) div:nth-last-child(2)" ).css("background-color", "hsl("+baseColor+", "+ polarityPercent +"%, "+brightness+"%)");
    }

    function setMagnitudeBackground(container, magnitude) {
        magnitudePercent = Math.abs(magnitude) * 15
        $( container + " div:nth-last-child(1) div:nth-last-child(1)" ).css("background-color", "hsl(270, "+ magnitudePercent +"%, 55%)");
    }



    // Set Clinton Fulltext
    $.getJSON("https://raw.githubusercontent.com/andrewjtimmons/national_convention_sentiment/master/trump_rnc_speech_fulltext_analyzed.json", function(json) {
        var trump_fulltext = json
        polarity = trump_fulltext['documentSentiment']['polarity'];
        magnitude = trump_fulltext['documentSentiment']['magnitude']
        $('#clinton-total-sentiment').append(
            "<div class='row text-row'>"+
            "<div class='col-xs-10 speech-text'><h3>Clinton Overall Sentiment</h3></div>" +
            "<div class='col-xs-1 polarity'>"+trump_fulltext['documentSentiment']['polarity']+"</div>"+
            "<div class='col-xs-1 magnitude'>"+trump_fulltext['documentSentiment']['magnitude']+"</div>"+
            "</div>"
        )
        setPolarityBackground('#clinton-total-sentiment', polarity);
        setMagnitudeBackground('#clinton-total-sentiment', magnitude);
    });

    // Set Clinton Paragraphs
    $.getJSON("https://raw.githubusercontent.com/andrewjtimmons/national_convention_sentiment/master/trump_rnc_speech_paragraphs_analyzed.json", function(json) {
        var trump_paragraphs = json
        trump_paragraphs.forEach(function (paragraph) {
            polarity = paragraph['analysis']['documentSentiment']['polarity']
            magnitude = paragraph['analysis']['documentSentiment']['magnitude']
            $('#clinton-paragraph-sentiment').append(
                "<div class='row text-row'>"+
                "<div class='col-xs-10 speech-text'>"+paragraph['text']+"</div>" +
                "<div class='col-xs-1 polarity'>"+paragraph['analysis']['documentSentiment']['polarity']+"</div>"+
                "<div class='col-xs-1 magnitude'>"+paragraph['analysis']['documentSentiment']['magnitude']+"</div>"
                +"</div>"
            );
        setPolarityBackground('#clinton-paragraph-sentiment', polarity);
        setMagnitudeBackground('#clinton-paragraph-sentiment', magnitude);
        });
    });

    // Set Trump Fulltext
    $.getJSON("https://raw.githubusercontent.com/andrewjtimmons/national_convention_sentiment/master/trump_rnc_speech_fulltext_analyzed.json", function(json) {
        var trump_fulltext = json
        polarity = trump_fulltext['documentSentiment']['polarity'];
        magnitude = trump_fulltext['documentSentiment']['magnitude']
        $('#trump-total-sentiment').append(
            "<div class='row text-row'>"+
            "<div class='col-xs-10 speech-text'><h3>Trump Overall Sentiment</h3></div>" +
            "<div class='col-xs-1 polarity'>"+trump_fulltext['documentSentiment']['polarity']+"</div>"+
            "<div class='col-xs-1 magnitude'>"+trump_fulltext['documentSentiment']['magnitude']+"</div>"+
            "</div>"
        )
        setPolarityBackground('#trump-total-sentiment', polarity);
        setMagnitudeBackground('#trump-total-sentiment', magnitude);
    });

    // Set Trump Paragraphs
    $.getJSON("https://raw.githubusercontent.com/andrewjtimmons/national_convention_sentiment/master/trump_rnc_speech_paragraphs_analyzed.json", function(json) {
        trump_paragraphs = json
        trump_paragraphs.forEach(function (paragraph) {
            polarity = paragraph['analysis']['documentSentiment']['polarity']
            magnitude = paragraph['analysis']['documentSentiment']['magnitude']
            $('#trump-paragraph-sentiment').append(
                "<div class='row text-row'>"+
                "<div class='col-xs-10 speech-text'>"+paragraph['text']+"</div>" +
                "<div class='col-xs-1 polarity'>"+polarity+"</div>"+
                "<div class='col-xs-1 magnitude'>"+magnitude+"</div>"
                +"</div>"
            );
            setPolarityBackground('#trump-paragraph-sentiment', polarity);
            setMagnitudeBackground('#trump-paragraph-sentiment', magnitude);
        });
    });

});