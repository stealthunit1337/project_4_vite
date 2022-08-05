<template lang="pug">
MyAccordion
MyCarousel
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import MyAccordion from '@/components/MyAccordion.vue'
import MyCarousel from '@/components/MyCarousel.vue'

export default defineComponent({
	components: {
		MyAccordion,
		MyCarousel
	},
	setup() {


		return {

		}
	}
})
</script>

<style lang='scss'>
.accordion {

	--bs-accordion-border-color: none;

	&-button {
		color: white;
		background-color: #515151;
		border-radius: 5px !important;
		border-color: #515151 !important;


		&:not(.collapsed) {
			color: white;
			background-color: #515151;
		}


	}

	&-item {
		color: white;
		background-color: #515151;
		border-radius: 5px !important;
		border-color: #515151 !important;

		&:not(:first-child) {
			margin-top: 8px;
		}
	}

	&-flush {
		border-radius: 5px !important;
		border-color: #515151 !important;
	}
}
</style>