<template>
	<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
				aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
		</div>
		<div class="carousel-inner">

			<div class="carousel-item active" data-bs-interval="10000">
				<div class="carousel-wrapper">
					<div class="carousel-caption">
						<h5>Second slide label</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur corrupti doloremque
							ullam deleniti, voluptatem dolore quaerat, totam quis repellendus magnam expedita fugiat iusto
							soluta. Perferendis quibusdam non veritatis voluptatem.
							Quod inventore dolorum tempore magnam ex aut earum eaque deleniti alias asperiores quaerat nostrum
							consectetur suscipit dolores, sed ullam fugit quos laborum adipisci eius veritatis maiores
							accusantium unde quae. Vel.
							Quaerat numquam delectus sequi. Rerum iste deleniti molestiae dolorem dolore alias, odit tenetur
							quasi nihil quia, eaque perferendis cupiditate similique magni culpa placeat molestias temporibus
							nam laborum quos fugit laboriosam.</p>
					</div>
					<div class=" carousel-image">
						<img src="@/assets/img/carousel1.svg" class="w-100" alt="..." />
					</div>
				</div>
			</div>

			<div class="carousel-item" data-bs-interval="2000">
				<div class="carousel-wrapper">
					<div class="carousel-caption">
						<h5>Second slide label</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur corrupti doloremque
							ullam deleniti, voluptatem dolore quaerat, totam quis repellendus magnam expedita fugiat iusto
							soluta. Perferendis quibusdam non veritatis voluptatem.
							Quod inventore dolorum tempore magnam ex aut earum eaque deleniti alias asperiores quaerat nostrum
							consectetur suscipit dolores, sed ullam fugit quos laborum adipisci eius veritatis maiores
							accusantium unde quae. Vel.
							Quaerat numquam delectus sequi. Rerum iste deleniti molestiae dolorem dolore alias, odit tenetur
							quasi nihil quia, eaque perferendis cupiditate similique magni culpa placeat molestias temporibus
							nam laborum quos fugit laboriosam.</p>
					</div>
					<div class=" carousel-image">
						<img src="@/assets/img/carousel2.svg" class="w-100" alt="..." />
					</div>
				</div>
			</div>

			<div class="carousel-item">
				<div class="carousel-wrapper">
					<div class="carousel-caption">
						<h5>Second slide label</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur corrupti doloremque
							ullam deleniti, voluptatem dolore quaerat, totam quis repellendus magnam expedita fugiat iusto
							soluta. Perferendis quibusdam non veritatis voluptatem.
							Quod inventore dolorum tempore magnam ex aut earum eaque deleniti alias asperiores quaerat nostrum
							consectetur suscipit dolores, sed ullam fugit quos laborum adipisci eius veritatis maiores
							accusantium unde quae. Vel.
							Quaerat numquam delectus sequi. Rerum iste deleniti molestiae dolorem dolore alias, odit tenetur
							quasi nihil quia, eaque perferendis cupiditate similique magni culpa placeat molestias temporibus
							nam laborum quos fugit laboriosam.</p>
					</div>
					<div class=" carousel-image">
						<img src="@/assets/img/carousel4.svg" class="w-100" alt="..." />
					</div>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.carousel {
	&-indicator {}

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

	&-control {
		&-prev {
			bottom: -89.5%;
			left: 38%;
			z-index: 999
		}

		&-next {
			bottom: -89.5%;
			right: 38%;
			z-index: 999
		}
	}

}
</style>