<template>
  <div class="card mb-3 custom-card">
    <div
      class="card-body d-flex justify-content-between ps-2 align-items-center"
    >
      <div class="d-flex align-items-center">
        <span v-if="!isEditing" class="pe-none">{{ subCategory.name }}</span>
        <input
          v-else
          v-model="editName"
          @blur="handleSave"
          @keyup.enter="handleSave"
          ref="editInput"
          class="form-control form-control-sm"
        />
      </div>
      <div class="dropdown">
        <button class="btn p-0 text-secondary" data-bs-toggle="dropdown">
          •••
        </button>
        <ul class="dropdown-menu">
          <li>
            <button class="dropdown-item" @click="handleEdit">Edit</button>
          </li>
          <li>
            <button class="dropdown-item" @click="$emit('delete')">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

const props = defineProps({
  subCategory: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update", "delete"]);

const isEditing = ref(false);
const editName = ref(props.subCategory.name);
const editInput = ref(null);

const handleEdit = () => {
  isEditing.value = true;
  editName.value = props.subCategory.name;
  nextTick(() => {
    editInput.value.focus();
  });
};

const handleSave = () => {
  if (editName.value.trim() !== "") {
    emit("update", editName.value.trim());
    isEditing.value = false;
  } else {
    editName.value = props.subCategory.name;
    isEditing.value = false;
  }
};
</script>

<style scoped>
.form-control-sm {
  height: 25px;
  font-size: 0.875rem;
}

.dropdown-menu {
  min-width: 6rem;
}

.dropdown-item {
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
}

.custom-card .card-body {
  padding: 0.5rem 1rem;
}
</style>
