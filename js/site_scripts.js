var partners = [
    { src: 'images/partners/partner-bustour.png', alt: 'Partner Bus Tours' },
    { src: 'images/partners/partner-cabinrental.png', alt: 'Partner Cabin Rental' },
    { src: 'images/partners/partner-campingadv.png', alt: 'Partner Camping Adventure' },
    { src: 'images/partners/partner-collegetours.png', alt: 'Partner College Tours' },
    { src: 'images/partners/partner-rentalbike.png', alt: 'Partner Bike Rentals' },
    { src: 'images/partners/partner-tourgroup.png', alt: 'Partner Tour Group' }
];

var partnersList = '';

for (var i = 0; i < partners.length; i++) {
    partnersList += `
              <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 text-center partner">
                  <img src="${partners[i].src}" alt="${partners[i].alt}" class="img-fluid">
              </div>`;
}

document.getElementById('partners').innerHTML = partnersList;