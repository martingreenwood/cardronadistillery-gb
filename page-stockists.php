<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package cardronadistillery
 */

get_header();
?>

	<?php get_template_part( 'template-parts/header', 'page' ); ?>

	<section id="primary" class="content-area">

		<div class="container">

			<div class="row middle-xs center-xs">

				<?php
				while ( have_posts() ) :
					the_post();

					get_template_part( 'template-parts/content', 'page-notice' );

				endwhile; // End of the loop.
				?>

			</div>

		</div>

	</section>

	<section id="stockists">

		<div class="container">

			<div class="row intro center-xs">

				<header>
					<h2>United Kingdon</h2>
					<p>Please select a region by clicking on the map</p>
				</header>

			</div>

		</div>

		<div class="container">

			<div class="row">

				<div class="map col-xs-12 col-md-7">
					<div id="mapsvg"></div>
				</div>

				<div class="regions col-xs-12 col-md-5 center-xs start-sm">

					<?php

					$loop = new WP_Query( array(
							'post_type' => 'stockist',
							'posts_per_page' => -1
						)
					);
					?>

					<?php while ( $loop->have_posts() ) : $loop->the_post(); global $post; ?>

					  <div class="region <?php echo strtolower(str_replace('-','', $post->post_name)); ?>">

						  <h3 class="title"><?php the_title(); ?></h3>

						  <?php the_content( ) ?>

					  </div>

					<?php endwhile; wp_reset_query();

					?>

				</div>


			</div>

		</div>

	</section>



<?php
get_footer();
