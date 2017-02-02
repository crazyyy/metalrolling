<?php get_header(); ?>
<?php get_sidebar(); ?>
  <div id="container">
    <div id="content">

      <?php get_template_part('slider-wrap'); ?>

      <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

      <h1 class="cat-title inner-title"><?php the_category(', '); ?></h1>
      <?php get_template_part('loop'); ?>
      <?php get_template_part('pagination'); ?>

    </div><!-- #content-->
  </div><!-- #container-->
<?php get_footer(); ?>
