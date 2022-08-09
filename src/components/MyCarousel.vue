<template>
	<div class="carousel-bg">
		<div class="container">
			<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
				<div class="carousel-inner">

					<div class="carousel-item active" data-bs-interval="3000">
						<div class="carousel-wrapper">
							<div class="carousel-caption">
								<h5>Second slide label</h5>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur corrupti
									doloremque
									ullam deleniti, voluptatem dolore quaerat, totam quis repellendus magnam expedita fugiat
									iusto
									soluta. Perferendis quibusdam non veritatis voluptatem.
									Quod inventore dolorum tempore magnam ex aut earum eaque deleniti alias asperiores quaerat
									nostrum
									consectetur suscipit dolores, sed ullam fugit quos laborum adipisci eius veritatis maiores
									accusantium unde quae. Vel.
									Quaerat numquam delectus sequi. Rerum iste deleniti molestiae dolorem dolore alias, odit
									tenetur
									quasi nihil quia, eaque perferendis cupiditate similique magni culpa placeat molestias
									temporibus
									nam laborum quos fugit laboriosam.</p>
							</div>
							<div class="carousel-image">
								<img src="@/assets/img/carousel1.svg" class="w-100" alt="..." />
							</div>
						</div>
					</div>

					<div class="carousel-item" data-bs-interval="2000">
						<div class="carousel-wrapper">
							<div class="carousel-caption">
								<h5>Second slide label</h5>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur corrupti
									doloremque
									ullam deleniti, voluptatem dolore quaerat, totam quis repellendus magnam expedita fugiat
									iusto
									soluta. Perferendis quibusdam non veritatis voluptatem.
									Quod inventore dolorum tempore magnam ex aut earum eaque deleniti alias asperiores quaerat
									nostrum
									consectetur suscipit dolores, sed ullam fugit quos laborum adipisci eius veritatis maiores
									accusantium unde quae. Vel.
									Quaerat numquam delectus sequi. Rerum iste deleniti molestiae dolorem dolore alias, odit
									tenetur
									quasi nihil quia, eaque perferendis cupiditate similique magni culpa placeat molestias
									temporibus
									nam laborum quos fugit laboriosam.</p>
							</div>
							<div class="carousel-image">
								<img src="@/assets/img/carousel2.svg" class="w-100" alt="..." />
							</div>
						</div>
					</div>

					<div class="carousel-item">
						<div class="carousel-wrapper">
							<div class="carousel-caption">
								<h5>Second slide label</h5>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur corrupti
									doloremque
									ullam deleniti, voluptatem dolore quaerat, totam quis repellendus magnam expedita fugiat
									iusto
									soluta. Perferendis quibusdam non veritatis voluptatem.
									Quod inventore dolorum tempore magnam ex aut earum eaque deleniti alias asperiores quaerat
									nostrum
									consectetur suscipit dolores, sed ullam fugit quos laborum adipisci eius veritatis maiores
									accusantium unde quae. Vel.
									Quaerat numquam delectus sequi. Rerum iste deleniti molestiae dolorem dolore alias, odit
									tenetur
									quasi nihil quia, eaque perferendis cupiditate similique magni culpa placeat molestias
									temporibus
									nam laborum quos fugit laboriosam.</p>
							</div>
							<div class="carousel-image">
								<img src="@/assets/img/carousel3.svg" class="w-100" alt="..." />
							</div>
						</div>
					</div>

					<div class="carousel-item">
						<div class="carousel-wrapper">
							<div class="carousel-caption">
								<h5>Second slide label</h5>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur corrupti
									doloremque
									ullam deleniti, voluptatem dolore quaerat, totam quis repellendus magnam expedita fugiat
									iusto
									soluta. Perferendis quibusdam non veritatis voluptatem.
									Quod inventore dolorum tempore magnam ex aut earum eaque deleniti alias asperiores quaerat
									nostrum
									consectetur suscipit dolores, sed ullam fugit quos laborum adipisci eius veritatis maiores
									accusantium unde quae. Vel.
									Quaerat numquam delectus sequi. Rerum iste deleniti molestiae dolorem dolore alias, odit
									tenetur
									quasi nihil quia, eaque perferendis cupiditate similique magni culpa placeat molestias
									temporibus
									nam laborum quos fugit laboriosam.</p>
							</div>
							<div class="carousel-image">
								<img src="@/assets/img/carousel4.svg" class="w-100" alt="..." />
							</div>
						</div>
					</div>
					<div class="carousel-bottom">
						<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
							data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<div class="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
								class="active carousel-button" aria-current="true" aria-label="Slide 1"></button>
							<button class='carousel-button' type="button" data-bs-target="#carouselExampleDark"
								data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button class='carousel-button' type="button" data-bs-target="#carouselExampleDark"
								data-bs-slide-to="2" aria-label="Slide 3"></button>
							<button class='carousel-button' type="button" data-bs-target="#carouselExampleDark"
								data-bs-slide-to="3" aria-label="Slide 4"></button>
						</div>
						<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
							data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {


		return {

		}
	}
})
</script>

<style lang="scss" scoped>
.carousel {
	&-bg {
		background-color: $background;

	}

	&-dark {
		filter: none !important;
	}

	&-button {
		border: solid 2px rgba(0, 0, 0, 0);
		border-radius: 50%;
		background-color: $add  !important;
		opacity: 1 !important;
		margin: 0;
		align-self: center;
		filter: none !important;

		&:hover {
			background-color: $hover  !important;
		}

		&:active {
			background-color: $pressed  !important;
		}

		&.active {
			background-color: $primary  !important;
			border: solid 2px $add;
		}

		&:not(:last-child) {
			margin-right: 10px;
		}
	}

	&-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	&-image {
		display: flex;
		justify-self: flex-end;
		height: 560px;
		width: 600px;

	}

	&-caption {
		position: static;
	}

	&-bottom {
		width: 100%;
		position: absolute;
		display: flex;
		flex-direction: row;
		bottom: 45px;
		justify-content: center;
	}

	&-indicators {
		position: static;
		margin: 0;
		align-self: center;
	}

	&-control {
		&-prev {
			margin-right: 24px;
			width: 64px;
			position: static;
			z-index: 999;
			opacity: 1 !important;

			&-icon {
				background-image: url('@/assets/icons/carousel-control.svg');
				width: 64px;
				height: 64px;
				filter: none !important;

				&:hover {
					background-image: url('@/assets/icons/carousel-control-hover.svg');
				}

				&:active {
					background-image: url('@/assets/icons/carousel-control-active.svg');
				}
			}

		}

		&-next {
			margin-left: 24px;
			width: 64px;
			position: static;
			z-index: 999;
			opacity: 1 !important;

			&-icon {
				background-image: url('@/assets/icons/carousel-control.svg');
				transform: rotate(180deg);
				width: 64px;
				height: 64px;
				filter: none !important;

				&:hover {
					background-image: url('@/assets/icons/carousel-control-hover.svg');
				}

				&:active {
					background-image: url('@/assets/icons/carousel-control-active.svg');
				}



			}
		}
	}

}
</style>