<?php /* Template Name: Catalog Page  */ get_header(); ?>
<?php get_sidebar(); ?>
  <div id="container">
    <div id="content">

      <?php get_template_part('slider-wrap'); ?>

      <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

      <?php if (have_posts()): while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <h1 class="page-title inner-title"><?php the_title(); ?></h1>

          <?php $posts = get_field('choose_subcat_page'); if( $posts ): ?>
            <ul class="categories--loopers clearfix">
              <?php foreach( $posts as $post): // variable must be called $post (IMPORTANT) ?>
              <?php setup_postdata($post); ?>
                <li>
                  <a href="<?php the_permalink(); ?>">
                    <?php if ( has_post_thumbnail()) : the_post_thumbnail('medium'); else: ?>
                      <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
                    <?php endif; ?>
                    <h2><?php the_title(); ?></h2>
                  </a>
                </li>
              <?php endforeach; ?>
            </ul>
            <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
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


