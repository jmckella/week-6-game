 // Initial array of movies
    var celebrities = ['Lebron James', 'Matt Damon', 'Kim Kardashian', 'Kanye West'];

    // ========================================================

    // displayMovieInfo function now re-renders the HTML to display the appropriate content. 
    function displayCelebrityInfo(){

        var celebrity = $(this).attr('data-name');
        var queryURL = "http://api.giphy.com/v1/gifs/<gif_id>" + sport + "?api_key=dc6zaTOxFJmzC";
        
        // Creates AJAX call for the specific movie being 
        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

            // Creates a generic div to hold the movie
           

            // Retrieves the Rating Data
            var rating = response.Rated;

            // Creates an element to have the rating displayed
            var pOne = $('<p>').text( "Rating: " + rating);

            // Displays the rrating
            // Creates an element to hold the image 
            var image = $('<img>').attr("src", response.Poster);

            // Appends the image
            celebrity.append(image);

            // Puts the entire Movie above the previous movies.
            $('#celebrity').prepend(celebrityDiv);
        });

    }

    // ========================================================

    // Generic function for displaying movie data 
    function renderButtons(){ 

        // Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
        $('#celebrityButtons').empty();

        // Loops through the array of movies
        for (var i = 0; i < celebrities.length; i++){

            // Then dynamicaly generates buttons for each movie in the array

            // Note the jQUery syntax here... 
            var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
            a.addClass('celebrity'); // Added a class 
            a.attr('data-name', celebrities[i]); // Added a data-attribute
            a.text(celebrities[i]); // Provided the initial button text
            $('#celebrityButtons').append(a); // Added the button to the HTML
        }
    }

    // ========================================================

    // This function handles events where one button is clicked
    $('#addCelebrity').on('click', function(){

        // This line of code will grab the input from the textbox
        var celebrity_text = $('#celebrity-input').val().trim();

        // The movie from the textbox is then added to our array
        celebrity_text.push(movie);
        
        // Our array then runs which handles the processing of our movie array
        renderButtons();

        // We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
        return false;
    })

    // ========================================================

    // Generic function for displaying the movieInfo
    $(document).on('click', '.celebrity_text', displayCelebrityInfo);


    // ========================================================

    // This calls the renderButtons() function
    renderButtons();
