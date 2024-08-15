/**
 * @file
 * Details behaviors.
 */
(function (Drupal, once) {

  'use strict';

  Drupal.behaviors.pokemonDetails = {
    attach: function (context, settings) {

      const detailsElements = once('pokemonDetails', '.js-form-type-details details.form-wrapper', context);
      detailsElements.forEach(detailsElement => {

        // Add an event listener to the summary element
        const summaryElement = detailsElement.querySelector('summary');
        summaryElement.addEventListener('click', event => {
          const iconElement = event.currentTarget.querySelector('.bi');
          iconElement.classList.toggle('bi-chevron-down');
          iconElement.classList.toggle('bi-chevron-up');
        });

        // Add an event listener to the form wrapper legend elements
        document.addEventListener('click', event => {
          const formWrapperLegendElements = document.querySelectorAll('.js-form-type-details details.form-wrapper summary');
  
          // Close the form wrapper if the click is outside the form wrapper
          formWrapperLegendElements.forEach(formWrapperLegendElement => {
            if (!formWrapperLegendElement.contains(event.target)) {
              
              if (formWrapperLegendElement.closest('details.form-wrapper') !== event.target.closest('details.form-wrapper')) {
                const detailsElement = formWrapperLegendElement.closest('details.form-wrapper');
                if (detailsElement.open) {
                  detailsElement.open = false;
                  const iconElement = formWrapperLegendElement.querySelector('.bi');
                  iconElement.classList.remove('bi-chevron-up');
                  iconElement.classList.add('bi-chevron-down');
                } 
              }
            }
          });
        });
      });
    }
  };

} (Drupal, once));
