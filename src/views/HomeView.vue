<script setup lang="ts">
import TodosTable from "../components/TodosTable.vue";
import TodoPageHeader from "../components/TodoPageHeader.vue";
</script>

<template>
  <div class="todo-page">
    <TodoPageHeader />
    <TodosTable />
  </div>
</template>

<style lang="css" scoped>
.todo-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
}
</style>
