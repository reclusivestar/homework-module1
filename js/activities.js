$(document).ready(function() {
    $('td').click(function() {
        var content = $(this).text().trim(); 
        var columnIndex = $(this).index();    // Get the index of the clicked cell within its row
        var headerText = $('th').eq(columnIndex).text();  // Get the corresponding header text based on the index
        if (content === 'Not Available') {
            return;
        }
        $(this).toggleClass('highlighted');
        if ($(this).hasClass("highlighted")) {  // Check if selected cell has class
            $('#displaySelected').css("visibility", "visible");  // Make display box visible
            $('#displaySelected').css("margin-top", "2em");  // Add spaces above display box
            $('#result').append("<p>" + content + " at " + headerText + "</p>");  // Add child element with contents of cell
        } else {  // If selected cell doesn't have the class
            $('#result p:contains(' + content + ')').remove();  // Remove child element
            
            if ($('#result').has('p').length == false) {  // Check if there are any child elements within parent
                $('#displaySelected').css("visibility", "hidden");  // Make display box hidden
                $('#displaySelected').css("margin-top", "0");  // Remove spaces above display box
            }
        }
    });
    // Change cursor to pointer on selectable cells, and default for non-selectable cells
    $('td').hover(function() {
        if ($(this).text().trim() !== 'Not Available') {
            $(this).css('cursor', 'pointer');
        }
    });
    // Prevent selecting heading/title cells
    $('th').css('cursor', 'default');
});
