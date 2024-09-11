<template>
    <nav class="sidebar">
      <div class="position-sticky pt-3 ms-4 me-5">
        <h1 class="h2 mb-5 fw-bold">Minography</h1>
        <div class="accordion" id="photoProjectsAccordion">
          <div class="accordion-item border-0">
            <h2 class="accordion-header" id="headingPhotoProjects">
              <router-link class="text-decoration-none text-dark" to="/#">
                <button
                  class="accordion-button border-0 bg-transparent fw-bold pb-0 ps-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePhotoProjects"
                  aria-expanded="true"
                  aria-controls="collapsePhotoProjects"
                >
                  Photo projects
                </button>
              </router-link>
            </h2>
            <div
              id="collapsePhotoProjects"
              class="accordion-collapse collapse show"
              aria-labelledby="headingPhotoProjects"
              data-bs-parent="#photoProjectsAccordion"
            >
              <div class="accordion-body pt-0 mb-3">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="#">Food</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="#">Model</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="#">Landscape</RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup></script>
  
  <style scoped>
  
  .accordion-button {
    box-shadow: none;
  }
  
  .accordion-button:focus {
    box-shadow: none;
  }
  
  .accordion-button:not(.collapsed) {
    color: inherit;
    background-color: transparent;
    box-shadow: none; 
    border-bottom: none; 
  }
  
  .nav-link {
    color: #000;
  }
  
  .nav-link.active {
    font-weight: bold;
  }
  </style>