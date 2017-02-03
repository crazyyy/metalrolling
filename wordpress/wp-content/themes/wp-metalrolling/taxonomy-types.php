<?php get_header(); ?>
<?php get_sidebar(); ?>
  <div id="container">
    <div id="content">

      <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

      <h1 class="cat-title inner-title"><?php the_category(', '); ?></h1>

      <div class="loop-products--container clearfix">
        <?php get_template_part('loop-products'); ?>
      </div><!-- /.loop-products--container -->

      <?php get_template_part('pagination'); ?>

      <div class="content-container">

        <?php
        // vars
        $queried_object = get_queried_object();
        $taxonomy = $queried_object->taxonomy;
        $term_id = $queried_object->term_id;
        ?>
        <?php the_field('description', $taxonomy . '_' . $term_id); ?>
      </div><!-- /.content-container -->

    </div><!-- #content-->
  </div><!-- #container-->
<?php get_footer(); ?>
