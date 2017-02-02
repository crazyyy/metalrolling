<?php get_header(); ?>
<?php get_sidebar(); ?>
  <div id="container">
    <div id="content">

      <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

      <h1 class="cat-title inner-title"><?php the_category(', '); ?></h1>

      <div class="loop-products--container clearfix">
        <?php get_template_part('loop-products'); ?>
        <?php get_template_part('loop-products'); ?>
        <?php get_template_part('loop-products'); ?>
        <?php get_template_part('loop-products'); ?>
        <?php get_template_part('loop-products'); ?>
        <?php get_template_part('loop-products'); ?>
      </div><!-- /.loop-products--container -->

      <?php get_template_part('pagination'); ?>

    </div><!-- #content-->
  </div><!-- #container-->
<?php get_footer(); ?>
