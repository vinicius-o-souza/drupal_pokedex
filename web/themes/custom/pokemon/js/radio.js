/**
 * @file
 * Radio behaviors.
 */
(function (Drupal, once) {

  'use strict';

  Drupal.behaviors.pokemonRadio = {
    attach: function (context, settings) {

      once('pokemonRadio', 'input[type="radio"]', context).forEach(function (element) {
        const radio = document.querySelectorAll('input[type="radio"]');
        console.log(radio);
        radio.forEach(radio => {
          radio.addEventListener('click', function(event) {
            let name = this.name;
            document.querySelectorAll('input[type="radio"][name="' + name + '"]').forEach(radio => {
              radio.nextElementSibling.classList.remove('bi-square-fill');
              radio.nextElementSibling.classList.add('bi-square');
            });

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
