// GALLERY 1
jQuery('#gallery1').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/logo-wael-m.jpg',
            'thumb': 'images/photos/logo-wael-s.jpg',
            'subHtml': 'Logo'
        },{
            'src': 'images/photos/ramadan.jpg',
            'thumb': 'images/photos/ramadan.jpg',
            'subHtml': 'Affiche facebook pour ramadan'
        },{
            'src': 'images/photos/affiche-ete-2017.jpg',
            'thumb': 'images/photos/affiche-ete-2017.jpg',
            'subHtml': 'affiche ete 2017'
        }, {
            'src': 'images/photos/medaillon.jpg',
            'thumb': 'images/photos/medaillon-s.jpg',
            'subHtml': "Medal"
        }, {
            'src': 'images/photos/mug.jpg',
            'thumb': 'images/photos/mug-s.jpg',
            'subHtml': "Mug creation"
        }, {
            'src': 'images/photos/Hippocampe.jpg',
            'thumb': 'images/photos/Hippocampe-s.jpg',
            'subHtml': "Seahorse swimming degree"
        }, {
                'src': 'images/photos/grenouille.jpg',
                'thumb': 'images/photos/grenouille-s.jpg',
                'subHtml': "frog swimming degree"
            }, {
            'src': 'images/photos/pingouin.jpg',
            'thumb': 'images/photos/pingouin-s.jpg',
            'subHtml': "Penguin swimming degree"
        }, {
            'src': 'images/photos/abonnement.jpg',
            'thumb': 'images/photos/abonnement-s.jpg',
            'subHtml': "subscription Card"
        }]
    })
});



jQuery('#daribat').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/dari.jpg',
            'thumb': 'images/photos/dari.jpg',
            'subHtml': 'Daribat.tn Website'
        }, {
            'src': 'images/photos/logo_dari1.jpg',
            'thumb': 'images/photos/logo_dari1.jpg',
            'subHtml': "Daribat LOGO"
        }]
    })
});



jQuery('#olive').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/affiche.jpg',
            'thumb': 'images/photos/affiche.jpg',
            'subHtml': 'brochure O\'live'
        }, {
            'src': 'images/photos/brochure-recto.jpg',
            'thumb': 'images/photos/brochure-recto.jpg',
            'subHtml': "Recto Brochure O\'live"
        }, {
            'src': 'images/photos/brochure-verso.jpg',
            'thumb': 'images/photos/brochure-verso.jpg',
            'subHtml': "verso Brochure O\'live"
        }]
    })
});



jQuery('#aurasol').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: false,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/aurasol1.jpg',
            'thumb': 'images/photos/aurasol1.jpg',
            'subHtml': 'aurasol-pv.com Website'
        }]
    })
});

jQuery('#startisanat').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: false,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/start.jpg',
            'thumb': 'images/photos/start.jpg',
            'subHtml': 'startisanat.org Website'
        }]
    })
});


