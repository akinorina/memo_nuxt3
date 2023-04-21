<script lang="ts" setup>
useHead({
  title: 'Taskページ',
  meta: [
    { name: 'description', content: 'Taskページ' },
  ],
});

//
const task = ref('')
const { data: tasks, refresh } = useFetch('/api/task');

const addTask = () => {
  console.log(task.value)
  const { data } = useFetch('/api/task', {
    method: 'post',
    body: { task: task.value }
  })
  refresh();
  task.value = ''
}
</script>

<template>
  <div>
    <h1>Tasks</h1>
    <div>
      <ul class="list m-2">
        <li class="m-2" v-for="task in tasks" :key="task.id">{{ task.task }}</li>
      </ul>
      <form @submit.prevent="addTask">
        <div>
          <input
            class="shadow appearance-none border rounded m-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="task" />
        </div>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded"
            type="submit">タスクを登録</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.list {
  border: 1px #d0d0d0 solid;
  padding: 3px;
}

.list li {
  border: 2px #f0f0f0 solid;
  padding: 5px;
  background-color: #f0f0f0;
}
</style>
