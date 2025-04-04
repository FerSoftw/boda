const audio = document.getElementById('audio')
const playPauseBtn = document.getElementById('playPause')

playPauseBtn.addEventListener('click', () => {
   if (audio.paused) {
      audio.play()
      playPauseBtn.innerHTML = '<span class="pause-icon"></span>'
   } else {
      audio.pause()
      playPauseBtn.innerHTML = '<span class="play-icon"></span>'
   }
})
function updateCountdown() {
   const weddingDate = new Date('2025-05-15T14:30:00').getTime() //
   const now = new Date().getTime()
   const difference = weddingDate - now

   if (difference <= 0) {
      document.querySelector('.countdown-container').innerHTML = '<h2>¡Ya nos casamos! 🎉</h2>'
      return
   }

   const days = Math.floor(difference / (1000 * 60 * 60 * 24))
   const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
   const seconds = Math.floor((difference % (1000 * 60)) / 1000)

   document.getElementById('days').textContent = days.toString().padStart(2, '0')
   document.getElementById('hours').textContent = hours.toString().padStart(2, '0')
   document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0')
   document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0')
}

setInterval(updateCountdown, 1000)
updateCountdown() // Llamar inmediatamente para evitar el primer segundo vacío
;(function ($) {
   'use strict'

   // Navbar on scrolling
   $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
         $('.navbar').fadeIn('slow').css('display', 'flex')
      } else {
         $('.navbar').fadeOut('slow').css('display', 'none')
      }
   })

   // Smooth scrolling on the navbar links
   $('.navbar-nav a').on('click', function (event) {
      if (this.hash !== '') {
         event.preventDefault()

         $('html, body').animate(
            {
               scrollTop: $(this.hash).offset().top - 45,
            },
            1500,
            'easeInOutExpo'
         )

         if ($(this).parents('.navbar-nav').length) {
            $('.navbar-nav .active').removeClass('active')
            $(this).closest('a').addClass('active')
         }
      }
   })

   // Scroll to Bottom
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.scroll-to-bottom').fadeOut('slow')
      } else {
         $('.scroll-to-bottom').fadeIn('slow')
      }
   })

   // Portfolio isotope and filter
   var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
   })
   $('#portfolio-flters li').on('click', function () {
      $('#portfolio-flters li').removeClass('active')
      $(this).addClass('active')

      portfolioIsotope.isotope({ filter: $(this).data('filter') })
   })

   // Back to top button
   $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
         $('.back-to-top').fadeIn('slow')
      } else {
         $('.back-to-top').fadeOut('slow')
      }
   })
   $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo')
      return false
   })

   // Gallery carousel
   $('.gallery-carousel').owlCarousel({
      autoplay: false,
      smartSpeed: 1500,
      dots: false,
      loop: true,
      nav: true,
      navText: [
         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
         '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      responsive: {
         0: {
            items: 1,
         },
         576: {
            items: 2,
         },
         768: {
            items: 3,
         },
         992: {
            items: 4,
         },
         1200: {
            items: 5,
         },
      },
   })
})(jQuery)
