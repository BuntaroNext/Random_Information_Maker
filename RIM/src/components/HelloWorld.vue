<script setup lang="ts">
defineProps<{
  msg: string
}>()

async function random() {
  const partners = ['1307','1308','1340']
  const n = partners.length
  const index = Math.floor(Math.random() * n)
  console.log(partners[index])
  
  const url='https://api.e-stat.go.jp/rest/3.0/app/getSimpleStatsData' +
    '?appId=5ad4bda309c2bf8094ad8a28a0478baecff27294' +
    '&lang=J' +
    '&statsDataId=0003349481' +
    '&sectionHeaderFlg=2' +
    '&replaceSpChars=0'

  const res = await fetch(url)
  const text = await res.text()

  const blob = new Blob(['\uFEFF', text], { type: 'text/csv;charset=utf-8' })
  const blobUrl = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = blobUrl
  a.download = 'estat_0003288322.csv'
  a.click()

  URL.revokeObjectURL(blobUrl)
}
</script>

<template>
  <div class="greetings">
    <h1>
      <button @click="random">
        結婚しよう
      </button>
    </h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
