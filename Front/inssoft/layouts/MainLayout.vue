<script setup lang="ts">
import ComponentHeader from '~/components/ComponentHeader.vue';
import ComponetFooter from '~/components/ComponentFooter.vue';
</script>

<template>
	<ComponentHeader />
	<div class="container min-h-full">
		<div class="row"></div>
		<div class="row">
			<slot />
		</div>
		<div class="row"></div>
	</div>
	<ComponetFooter />
</template>

<style scoped>
.min-h-full {
	min-height: 70vh;
}
</style>
