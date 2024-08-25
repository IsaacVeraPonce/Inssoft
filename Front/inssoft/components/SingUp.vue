<script setup lang="ts">
import ComponentLoading from '~/components/ComponentLoading.vue';
const flagLoading = ref(false);
const showSuccess = ref(false);
const showError = ref(false);
const errorMessage = ref('');

const form = reactive({
	username: '',
	email: '',
	first_name: '',
	last_name: '',
	phone: '',
	password: '',
	repeatPassword: '',
	termsAndConditions: false,
});

const pause = (ms: number): Promise<unknown> => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

//DEVELOPER ONLY FOR TESTING
const simulateResponse = async (): Promise<boolean> => {
	const randomResponse = Math.floor(Math.random() * 2);
	flagLoading.value = true;
	await pause(3000);
	flagLoading.value = false;
	return randomResponse === 1;
};

const resetForm = (): void => {
	form.username = '';
	form.email = '';
	form.first_name = '';
	form.last_name = '';
	form.phone = '';
	form.password = '';
	form.repeatPassword = '';
	form.termsAndConditions = false;
};

const onSubmit = async (): Promise<void> => {
	showError.value = false;
	showSuccess.value = false;

	if (form.password !== form.repeatPassword) {
		errorMessage.value = 'Passwords do not match';
		showError.value = true;
		return;
	}

	try {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify(form);
		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
		};

		const response = await fetch('https://83.229.35.242:4000/users', requestOptions);
		const data = await response.json();

		if (response.status !== 201) throw new Error(data.message);

		showSuccess.value = true;
		resetForm();
	} catch (error) {
		errorMessage.value = 'Error creating user: ' + error;
		showError.value = true;
	}
};
</script>

<template>
	<ComponentLoading class="container custom-loading" v-if="flagLoading" />
	<BForm @submit.prevent="onSubmit" class="container custom-form" v-else>
		<BFormGroup id="input-group-1" label="Your First Name:" label-for="input-1">
			<BFormInput id="input-1" v-model="form.first_name" placeholder="Enter your first name" required />
		</BFormGroup>

		<BFormGroup id="input-group-2" label="Your Last Name:" label-for="input-2">
			<BFormInput id="input-2" v-model="form.last_name" placeholder="Enter your last name" required />
		</BFormGroup>

		<BFormGroup id="input-group-3" label="Your User Name:" label-for="input-3">
			<BFormInput id="input-3" v-model="form.username" placeholder="Enter your username name" required />
		</BFormGroup>

		<BFormGroup id="input-group-4" label="Email address:" label-for="input-4">
			<BFormInput id="input-4" v-model="form.email" type="email" placeholder="Enter email" required />
		</BFormGroup>

		<BFormGroup id="input-group-5" label="Phone:" label-for="input-5">
			<BFormInput id="input-5" v-model="form.phone" placeholder="Enter your phone" required type="tel" />
		</BFormGroup>

		<BFormGroup id="input-group-6" label="Password:" label-for="input-6">
			<BFormInput id="input-6" v-model="form.password" placeholder="asd|@#qwe" required type="password" />
		</BFormGroup>

		<BFormGroup id="input-group-7" label="Repeat Password:" label-for="input-7">
			<BFormInput id="input-7" v-model="form.repeatPassword" placeholder="asd|@#qwe" required type="password" />
		</BFormGroup>
		<BFormGroup id="input-group-8">
			<BFormCheckbox id="checkbox-1" v-model="form.termsAndConditions" name="checkbox-1" :value="true" :unchecked-value="false" required>
				I accept the terms and use
			</BFormCheckbox>
		</BFormGroup>

		<BButton type="submit" variant="primary">Submit</BButton>

		<DevOnly>
			<BCard class="mt-3" header="Form Data Result">
				<pre class="m-0">{{ form }}</pre>
			</BCard>
		</DevOnly>
	</BForm>
	<transition name="fade">
		<BAlert variant="success" :model-value="showSuccess" class="container custom-alert" dismissible>User created successfully</BAlert>
	</transition>
	<transition name="fade">
		<BAlert variant="danger" :model-value="showError" class="container custom-alert" dismissible>{{ errorMessage }}</BAlert>
	</transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.custom-alert {
	margin-top: 2rem;
	width: 80%;
	height: 40%;
	z-index: 10;
}

.custom-loading {
	width: 40%;
	height: 40%;
	z-index: 10;
	padding-top: 2rem;
	padding-bottom: 2rem;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.SingUpForm {
	min-height: 100%;
}
.custom-form {
	color: white;
	padding-top: 2rem;
	padding-bottom: 2rem;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	max-width: 50%;
	background: rgba(30, 64, 128, 0.5);
	box-sizing: border-box;
	box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
	border-radius: 10px;
}
</style>
