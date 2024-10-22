<script setup lang="ts">
import { useModal } from "vue-final-modal";
import CreateTodoModal from "./modals/CreateTodoModal.vue";
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const searchInput = ref("");

const { open: openCreateTodoModal, close } = useModal({
  component: CreateTodoModal,
  attrs: {
    onClose() {
      close();
    },
  },
});
</script>

<template>
  <div class="header">
    <div class="">
      <el-input
        v-model="searchInput"
        style="width: 360px"
        placeholder="Поиск..."
        :prefix-icon="Search"
      />
      <el-button type="warning" style="margin-left: 10px">Фильтрация</el-button>
    </div>

    <ElButton type="primary" @click="openCreateTodoModal">
      Добавить ToDo
    </ElButton>
  </div>
</template>

<style lang="css" scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 80vw;
}
</style>
