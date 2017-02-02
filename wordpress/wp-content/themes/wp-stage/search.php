<?php get_header(); ?>
<?php get_sidebar(); ?>
  <div id="container">
    <div id="content">

      <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

      <h1 class="search-title inner-title"><?php echo sprintf( __( '%s Search Results for ', 'wpeasy' ), $wp_query->found_posts ); echo get_search_query(); ?></h1>
      <?php get_template_part('loop'); ?>
      <?php get_template_part('pagination'); ?>

    </div><!-- #content-->
  </div><!-- #container-->
<?php get_footer(); ?>
