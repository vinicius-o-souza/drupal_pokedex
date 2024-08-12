/**
 * @file
 * Checkbox behaviors.
 */
(function (Drupal, once) {

  'use strict';

  Drupal.behaviors.pokemonCheckbox = {
    attach: function (context, settings) {

      once('pokemonCheckbox', 'input[type="checkbox"]', context).forEach(function (element) {
        const checkbox = document.querySelectorAll('input[type="checkbox"]');
        checkbox.forEach(checkbox => {
          checkbox.addEventListener('click', function(event) {
            if (this.checked) {
              this.nextElementSibling.classList.add('bi-square-fill');
              this.nextElementSibling.classList.remove('bi-square');
            } else {
              this.nextElementSibling.classList.remove('bi-square-fill');
              this.nextElementSibling.classList.add('bi-square');
            }
          });
        });
      });

    }
  };

} (Drupal, once));
