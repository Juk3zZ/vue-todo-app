<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Delete, Edit } from "@element-plus/icons-vue";
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();

const todos = ref([
  {
    id: 1,
    name: "1231234",
    description: "Описание Описание Описание ОписаниеОписаниеОписание Описание",
  },
  {
    id: 2,
    name: "1231234",
    description: "Описание Описание Описание ОписаниеОписаниеОписание Описание",
  },
  {
    id: 3,
    name: "1231234",
    description: "Описание Описание Описание ОписаниеОписаниеОписание Описание",
  },
]);

function handleEditTodo(id: number) {}

function handleDeleteTodo(id: number) {}

onMounted(() => {
  todoStore.getTodos();
});
</script>

<template>
  <div class="table-wrapper">
    <ElTable :data="todoStore.todoList" style="width: 80vw">
      <ElTableColumn prop="id" label="Номер" width />
      <ElTableColumn prop="name" label="Название" width />
      <ElTableColumn prop="description" label="Описание задачи" />
      <ElTableColumn>
        <template #default="scope">
          <el-button
            type="primary"
            :icon="Edit"
            circle
            @click="handleDeleteTodo(scope.row.id)"
          />
          <el-button
            type="danger"
            :icon="Delete"
            circle
            @click="handleEditTodo(scope.row.id)"
          />
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<style lang="css" scoped></style>
