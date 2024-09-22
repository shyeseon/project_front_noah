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
        <div class="col-md-5 ms-3">
          <form ref="form" @submit.prevent="sendEmail">
            <h5 class="text-muted mb-4 mt-2">CONTACT</h5>
            <div class="mb-4">
              <input type="text" name="from_name" class="form-control border-0 border-bottom border-dark ps-0 rounded-0" placeholder="name*" required
              v-model="userInfo.name"/>
            </div>
            <div class="mb-4">
              <input type="email" name="from_email" class="form-control border-0 border-bottom border-dark ps-0 rounded-0" placeholder="email*" required
              v-model="userInfo.email" />
            </div>
            <div class="mb-5">
              <textarea name="message" class="form-control border-0 border-bottom border-dark ps-0 rounded-0" placeholder="message*" rows="3" required
              v-model="userInfo.message"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-outline-dark px-4" :disabled="!isEmailFormValid" @click="openEmailModal">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- email confirm modal -->
    <div v-if="showEmailModal"
      class="modal fade show d-block"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">삭제 확인</h5>
          </div>
          <div class="modal-body">
            <p>정말 삭제하시겠습니까?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="closeEmailModal">
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import emailjs from '@emailjs/browser';
  import { computed, ref } from 'vue';

  const form = ref(null);
  const showEmailModal = ref(false);

  const userInfo = ref({
    name: "",
    email: "",
    message: ""
  })

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

  const isUserEmailValid = computed(() => {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i // 정규표현식
    return regex.test(userInfo.value.email); // test : js 정규식 검사 method 
  });

  const isEmailFormValid = computed(() => {
    return userInfo.value.name !== "" && userInfo.value.message !== ""
    && isUserEmailValid.value
  });

  const openEmailModal = () => {
    showEmailModal.value = true;
  }
  const closeEmailModal = () => {
    showEmailModal.value = false;
  }

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