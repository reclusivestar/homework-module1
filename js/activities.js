$(document).ready(function() {
    $('td').click(function() {
        var content = $(this).text().trim(); 
        var columnIndex = $(this).index();    // Get the index of the clicked cell within its row

        // Prevent click action on the first column (types of activity column)
        if (columnIndex === 0) {
            return;
        }

        
        if (content === 'Not Available') {
            return;
        }
        
        $(this).toggleClass('highlighted');
        
        // Clear modal content before updating
        $('#modalContent').empty();
        
        // Add the selected activities to the modal content
        $('td.highlighted').each(function() {
            var activityContent = $(this).text().trim();
            var activityIndex = $(this).index();
            var activityHeader = $('th').eq(activityIndex).text();
            $('#modalContent').append("<p>" + activityContent + " at " + activityHeader + "</p>");
        });

        // If there are no selected activities, show a message
        if ($('#modalContent').has('p').length === 0) {
            $('#modalContent').html('<p>No activities selected.</p>');
        }

        // Show the modal when a valid cell is clicked
        $('#activityModal').modal('show');
    });

    // Change cursor to pointer on selectable cells, and default for non-selectable cells
    $('td').hover(function() {
        var columnIndex = $(this).index();
        if (columnIndex !== 0 && $(this).text().trim() !== 'Not Available') {
            $(this).css('cursor', 'pointer');
        } else {
            $(this).css('cursor', 'default');  // Default cursor for the first column
        }
    });

    // Prevent selecting heading/title cells
    $('th').css('cursor', 'default');

    // Handle "Get Info" button click (you can customize this action as needed)
    $('#getInfo').click(function() {
        alert('Information request sent!'); // Example action, replace with your logic
        $('#activityModal').modal('hide');  // Hide modal after action
    });

    // Handle "Back to Activities" button click
    $('#backToActivities').click(function() {
        $('#activityModal').modal('hide');
    });
});
