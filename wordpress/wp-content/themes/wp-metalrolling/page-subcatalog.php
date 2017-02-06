<?php /* Template Name: Sub Catalog Page  */ get_header(); ?>
<?php get_sidebar(); ?>
  <div id="container">
    <div id="content">

      <?php get_template_part('slider-wrap'); ?>

      <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

      <?php if (have_posts()): while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <h1 class="page-title inner-title"><?php the_title(); ?></h1>

          <?php $terms = get_field('categories'); if( $terms ): ?>
            <ul class="categories--loopers clearfix">
              <?php foreach( $terms as $term ): ?>
                <li>
                  <a href="<?php echo get_term_link( $term ); ?>">
                    <?php $image = get_field('image', $term); if( !empty($image) ): ?>
                      <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                    <?php endif; ?>
                    <h2><?php echo $term->name; ?></h2>
                  </a>
                </li>
              <?php endforeach; ?>
            </ul><!-- categories--loopers -->
          <?php endif; ?>

          <?php the_content(); ?>
          <?php edit_post_link(); ?>
        </article>
      <?php endwhile; else: // If 404 page error ?>
        <article>
          <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
        </article>
      <?php endif; ?>

    </div><!-- #content-->
  </div><!-- #container-->
<?php get_footer(); ?>


