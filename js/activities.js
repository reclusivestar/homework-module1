$(document).ready(function() {
    $('td').click(function() {
        if ($(this).text().trim() === 'Not Available') {
            return;
        }
        $(this).toggleClass('highlighted');
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
