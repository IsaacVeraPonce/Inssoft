<script setup lang="ts">
import SingUp from './components/SingUp.vue';
</script>

<template>
	<div>
		<NuxtLayout :name="'main-layout'"> <SingUp /></NuxtLayout>
	</div>
</template>

<style>
html {
	line-height: 1.5;
	-webkit-text-size-adjust: 100%;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	font-feature-settings: normal;
	font-variation-settings: normal;
	-webkit-tap-highlight-color: transparent;
}
</style>
