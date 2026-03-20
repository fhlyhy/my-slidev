<script setup lang="ts">
import FooterBar from '../components/FooterBar.vue'
import { META } from '../meta'
</script>

<template>
  <div class="slidev-layout default">
    <slot />

    <FooterBar
      :title="$frontmatter.title ?? META.title"
      :author="$frontmatter.author ?? META.author"
      :course="$frontmatter.course ?? META.course"
      :date="$frontmatter.date ?? META.date"
      :page="$page"
      :total="$slidev?.nav?.total ?? 0"
    />
  </div>
</template>
