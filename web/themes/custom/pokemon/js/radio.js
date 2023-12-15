/**
 * @file
 * Radio behaviors.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.radio = {
    attach (context, settings) {

      document.addEventListener('click', function(event) {
        var formWrapperLegend = document.querySelector('.form-wrapper.form-composite-type--radios legend');
        if (!formWrapperLegend.contains(event.target)) {
          formWrapperLegend.nextElementSibling.classList.remove('active');
        } else {
          formWrapperLegend.nextElementSibling.classList.add('active');
        }
      });

      document.querySelector('input[type="radio"]').addEventListener('click', function(event) {
        this.nextElementSibling.classList.toggle('bi-square-fill');
        this.nextElementSibling.classList.toggle('bi-square');
      });

    }
  };

} (Drupal));
