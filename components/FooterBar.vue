<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title?: string
  author?: string
  course?: string
  date?: string
  page?: number
  total?: number
}>()

const leftText = computed(() => {
  const a = props.author ?? ''
  const c = props.course ?? ''
  if (a && c) return `${a}（${c}）`
  return a || c || ''
})

const midText = computed(() => props.title ?? '')
const rightText = computed(() => props.date ?? '')

const pageText = computed(() => {
  if (!props.page || !props.total) return ''
  return `${props.page}/${props.total}`
})
</script>

<template>
  <div class="footerbar">
    <div class="footerbar__inner">
      <div class="footerbar__left">{{ leftText }}</div>
      <div class="footerbar__mid">{{ midText }}</div>

      <div class="footerbar__right">
        <span>{{ rightText }}</span>
        <span v-if="pageText" class="footerbar__page">{{ pageText }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footerbar{
  position:absolute;left:0;right:0;bottom:0;height:34px;
  background:var(--bar-blue);z-index:9999
}
.footerbar__inner{
  height:34px;display:grid;grid-template-columns:1fr auto 1fr;
  align-items:center;padding:0 14px;color:#fff;font-size:14px;opacity:.95
}
.footerbar__left{
  justify-self:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:10px
}
.footerbar__mid{
  justify-self:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:55vw
}
.footerbar__right{
  justify-self:end;white-space:nowrap;display:flex;gap:12px;align-items:center
}
.footerbar__page{
  opacity:.95
}
</style>
