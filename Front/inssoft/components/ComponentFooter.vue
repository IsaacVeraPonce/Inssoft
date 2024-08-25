<script setup lang="ts">
import IconGitHub from '~/components/icons/IconGitHub.vue';
</script>

<template>
	<footer>
		<div class="border-t border-gray-200">
			<div class="container main-footer">
				<span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
					<a class="frist-icon" href="https://www.linkedin.com/in/isaac-vera-ponce-94814b191" target="_blank">
						<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
							<path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
							<circle cx="4" cy="4" r="2" stroke="none"></circle>
						</svg>
					</a>
				</span>
			</div>
		</div>
		<div class="bg-gray-200">
			<div class="container d-flex justify-content-between margin-footer">
				<p class="text-center">
					&copy; 2024 Isaac Vera Ponce
					<a href="https://www.linkedin.com/in/isaac-vera-ponce-94814b191" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@IsaacVeraPonce</a>
				</p>
				<span class="">Inssoft prueba tecnica</span>
			</div>
		</div>
	</footer>

	<a href="https://github.com/IsaacVeraPonce" class="git-icon" target="_blank"><IconGitHub class="icon" /></a>
</template>

<style scoped>
.main-footer {
	padding-top: 1rem;
	padding-bottom: 0rem;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	align-items: center;
	flex-wrap: wrap;
	display: flex;
	margin-left: auto;
	margin-right: auto;
}
.inline-flex {
	display: inline-flex;
}
.w-full {
	width: 100%;
}
.justify-center {
	justify-content: center;
}
@media (min-width: 1024px) {
	.lg\:mt-0 {
		margin-top: 0px;
	}
	.lg\:ml-auto {
		margin-left: auto;
	}
}

@media (min-width: 1024px) {
	.md\:justify-start {
		justify-content: flex-start;
	}

	.md\:w-auto {
		width: auto;
	}
}
.frist-icon {
	margin-left: 0.75rem;
	--tw-text-opacity: 1;
	color: rgb(107 114 128 / var(--tw-text-opacity));
}
.w-5 {
	width: 1.25rem;
}
.h-5 {
	height: 1.25rem;
}
/* footer second section */
.text-gray-600 {
	--tw-text-opacity: 1;
	color: rgb(75 85 99 / var(--tw-text-opacity));
}
.bg-gray-200 {
	--tw-bg-opacity: 1;
	background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.ml-1 {
	margin-left: 0.25rem;
}
.margin-footer {
	padding-top: 1rem;
	padding-bottom: 0rem;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
}

a {
	color: inherit;
	text-decoration: inherit;
}
.git-icon {
	display: flex;
	border-radius: 9999px;
	width: 3rem;
	height: 3rem;
	--tw-bg-opacity: 1;
	background-color: rgb(243 244 246 / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: rgb(31 41 55 / var(--tw-text-opacity));
	position: fixed;
	bottom: 0px;
	right: 0px;
	align-items: center;
	justify-content: center;
	margin-right: 2rem;
	margin-bottom: 2rem;
	--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
	border-width: 1px;
	--tw-border-opacity: 1;
	border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
</style>
