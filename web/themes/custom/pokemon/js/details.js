/**
 * @file
 * Details behaviors.
 */
(function (Drupal, once) {

  'use strict';

  Drupal.behaviors.pokemonDetails = {
    attach: function (context, settings) {      

      once('pokemonDetails', 'details.js-form-wrapper', context).forEach(function (element) {
        const details = document.querySelectorAll('details.form-wrapper');
        details.forEach(detail => {
          const summary = detail.querySelector('summary');
          summary.addEventListener('click', function(event) {
            const icon = this.querySelector('.bi');
            icon.classList.toggle('bi-chevron-down');
            icon.classList.toggle('bi-chevron-up');
          });
        });
      });

    }
  };

} (Drupal, once));
