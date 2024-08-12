<?php

namespace Drupal\example_form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class ExampleForm extends FormBase {

  public function getFormId() {
    return 'example_form';
  }

  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['text_field'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Text field'),
      '#description' => $this->t('Enter some text'),
    ];

    $form['textarea_field'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Textarea field'),
      '#description' => $this->t('Enter some text'),
    ];

    $form['checkbox_field'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Checkbox field'),
      '#description' => $this->t('Check the box'),
    ];

    $form['radios_field'] = [
      '#type' => 'radios',
      '#title' => $this->t('Radio buttons field'),
      '#options' => [
        'option1' => $this->t('Option 1'),
        'option2' => $this->t('Option 2'),
        'option3' => $this->t('Option 3'),
      ],
    ];

    $form['select_field'] = [
      '#type' => 'select',
      '#title' => $this->t('Select field'),
      '#options' => [
        'option1' => $this->t('Option 1'),
        'option2' => $this->t('Option 2'),
        'option3' => $this->t('Option 3'),
      ],
    ];

    $form['date_field'] = [
      '#type' => 'date',
      '#title' => $this->t('Date field'),
      '#description' => $this->t('Enter a date'),
    ];

    $form['email_field'] = [
      '#type' => 'email',
      '#title' => $this->t('Email field'),
      '#description' => $this->t('Enter an email address'),
    ];

    $form['tel_field'] = [
      '#type' => 'tel',
      '#title' => $this->t('Phone number field'),
      '#description' => $this->t('Enter a phone number'),
    ];

    $form['number_field'] = [
      '#type' => 'number',
      '#title' => $this->t('Number field'),
      '#description' => $this->t('Enter a number'),
    ];

    $form['details_field'] = [
      '#type' => 'details',
      '#title' => $this->t('Additional details'),
      '#open' => TRUE,
      '#description' => $this->t('Enter any additional details here'),
      'additional_details' => [
        '#type' => 'radios',
        '#title' => $this->t('Select an option'),
        '#options' => [
          'option1' => $this->t('Option 1'),
          'option2' => $this->t('Option 2'),
          'option3' => $this->t('Option 3'),
        ],
      ],
    ];

    $form['actions'] = [
      '#type' => 'actions',
    ];

    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Handle form submission here
  }
}