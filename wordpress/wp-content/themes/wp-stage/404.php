<?php get_header(); ?>
<?php get_sidebar(); ?>
  <div id="container">
    <div id="content">

      <?php get_template_part('slider-wrap'); ?>

      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <h1 class="ctitle"><?php _e( 'Page not found', 'wpeasy' ); ?></h1>
        <h2><a href="<?php echo home_url(); ?>"><?php _e( 'Return home?', 'wpeasy' ); ?></a></h2>
      </article>

    </div><!-- #content-->
  </div><!-- #container-->
<?php get_footer(); ?>
