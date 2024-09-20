<template>
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-5">
          <img
            src="https://www.davehillphoto.com/images/pics/1536/18865_zYcW4F_20240416_hill_liquid_iv_sbc_beach_volleyball_16968.jpg"
            alt="profile-picture"
            class="img-fluid"
          />
        </div>
        <div class="col-md-5">
          <form ref="form" @submit.prevent="sendEmail">
            <h5 class="text-muted mb-4 mt-2">CONTACT</h5>
            <div class="mb-4">
              <input type="text" name="from_name" class="form-control border-0 border-bottom border-dark ps-0 rounded-0" placeholder="name*" required />
            </div>
            <div class="mb-4">
              <input type="email" name="from_email" class="form-control border-0 border-bottom border-dark ps-0 rounded-0" placeholder="email*" required />
            </div>
            <div class="mb-5">
              <textarea name="message" class="form-control border-0 border-bottom border-dark ps-0 rounded-0" placeholder="message*" rows="3" required></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-outline-dark px-4">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import emailjs from '@emailjs/browser';
  import { ref } from 'vue';

  const form = ref(null);

  const sendEmail = () => {
    emailjs.sendForm('service_nr04731', 'template_brdk4ii', form.value, {
          publicKey: 'naKp_jmgiUrgnLWrV',
        })
        .then(
          () => {
            console.log('sending email is SUCCESS!');
          },
          (error) => {
            console.log('sending email is FAILED...', error.text);
          },
        );
  };

  </script>
  
  <style scoped>
  .form-control:focus {
    box-shadow: none;
    border-color: #888888;
  }
  
  textarea {
    resize: vertical;
  }
  
  h5 {
    font-weight: normal;
  }
  </style>