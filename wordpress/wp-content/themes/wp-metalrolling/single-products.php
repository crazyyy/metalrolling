<?php get_header(); ?>
<?php get_sidebar(); ?>
  <div id="container">
    <div id="content">

      <?php get_template_part('slider-wrap'); ?>

      <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

      <?php if (have_posts()): while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <?php the_content(); ?>

          <?php edit_post_link(); ?>
        </article>
      <?php endwhile; else: ?>
        <article>
          <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
        </article>
      <?php endif; ?>


    </div><!-- #content-->
  </div><!-- #container-->
<?php get_footer(); ?>
