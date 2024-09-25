<template>
  <div :class="['card mb-3 custom-card', { 'bg-dark text-white': isSelected }]"  @click="$emit('select')">
    <div
      class="card-body d-flex justify-content-between ps-2 align-items-center"
    >
      <div class="d-flex align-items-center ps-1">
        <span v-if="!isEditing" class="pe-none">{{
          category.name
        }}</span>
        <input
          v-else
          v-model="editName"
          @blur="handleSave"
          @keyup.enter="handleSave"
          ref="editInput"
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
            <button class="dropdown-item" @click="$emit('delete')">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

const props = defineProps({
  category: Object,
  isSelected: Boolean,
});

const emit = defineEmits(["select", "update", "delete"]);

const isEditing = ref(false);
const editName = ref(props.category.name);
const editInput = ref(null);

const handleEdit = () => {
  isEditing.value = true;
  nextTick(() => {
    editInput.value.focus();
  });
};

const handleSave = () => {
  emit("update", editName.value);
  isEditing.value = false;
};
</script>

<style scoped>
.custom-card .card-body {
  padding: 0.5rem 1rem;
}
</style>
