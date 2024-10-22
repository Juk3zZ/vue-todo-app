<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import type { FormInstance, FormRules } from "element-plus";
import { onMounted } from "vue";
import { Close } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useTodoStore } from "@/stores/todo";

const emit = defineEmits(["close"]);

const todoStore = useTodoStore();

const form = ref({});
const formRef = ref<FormInstance>();

const formRules = ref<FormRules>({
  name: [{ required: true, trigger: "change", message: "Укажите название" }],
  id: [{ required: true, trigger: "change", message: "Введите номер" }],
});

async function handleCreateTodo(formEl?: FormInstance) {
  if (!formEl) return;

  let isValid = true;

  await formEl.validate((valid) => {
    if (!valid) isValid = false;
  });

  if (!isValid) return;

  todoStore.createTodo(form.value);
  emit("close");
}
</script>

<template>
  <VueFinalModal
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    style="display: flex; justify-content: center; align-items: center"
  >
    <div class="modal-wrapper">
      <div style="display: flex; justify-content: space-between">
        <h3>Создание ToDo</h3>
        <ElIcon style="cursor: pointer" size="16" @click="emit('close')">
          <Close />
        </ElIcon>
      </div>

      <br />

      <el-form
        ref="formRef"
        :model="form"
        label-position="top"
        :rules="formRules"
      >
        <el-form-item label="Номер" prop="id">
          <el-input v-model="form.id" />
        </el-form-item>
        <el-form-item label="Название" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Описание" prop="description">
          <el-input v-model="form.description" />
        </el-form-item>
        <el-form-item>
          <div style="display: flex; justify-content: space-between">
            <el-button type="danger" @click="emit('close')">Отмена</el-button>
            <el-button type="primary" @click="handleCreateTodo(formRef)"
              >Создать</el-button
            >
          </div>
        </el-form-item>
      </el-form>
    </div>
  </VueFinalModal>
</template>

<style lang="css" scoped>
.modal-wrapper {
  height: 400px;
  width: 400px;
  background-color: #fff;
  padding: 5px;
}
</style>
