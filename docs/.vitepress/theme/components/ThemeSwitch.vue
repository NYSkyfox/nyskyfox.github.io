<!-- .vitepress/theme/components/ThemeSwitch.vue -->
<script setup lang="ts">
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<template>
  <button
    class="theme-switch-btn"
    :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
    @click="isDark = !isDark"
  >
    <span class="vpi-sun sun-icon" :class="{ visible: !isDark }" />
    <span class="vpi-moon moon-icon" :class="{ visible: isDark }" />
  </button>
</template>

<style>
.theme-switch-btn {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  padding: 0;
  color: var(--vp-c-text-2);
}
.theme-switch-btn:hover {
  background: var(--vp-c-bg-soft);
}
.dark .theme-switch-btn {
  color: #e0e0e0;
}
.theme-switch-btn .sun-icon,
.theme-switch-btn .moon-icon {
  width: 18px;
  height: 18px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.2s;
}
.theme-switch-btn .sun-icon.visible,
.theme-switch-btn .moon-icon.visible {
  opacity: 1;
  position: static;
}
</style>
