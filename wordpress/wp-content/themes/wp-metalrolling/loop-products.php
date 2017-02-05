<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <div id="post-<?php the_ID(); ?>" <?php post_class('looper-proder'); ?>>

    <h2 class="inner-title">
      <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
    </h2><!-- /post title -->

    <a rel="nofollow" class="feature-img" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
      <?php if ( has_post_thumbnail()) :
        the_post_thumbnail('medium');
      else: ?>
        <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
      <?php endif; ?>
    </a><!-- /post thumbnail -->

    <h6 class="subdescr-loop"><span>Стандарт:</span><?php the_field('standart'); ?></h6>
    <h6 class="subdescr-loop"><span>Сталь:</span><?php the_field('steel'); ?></h6>
    <h6 class="subdescr-loop"><span>Диаметры:</span><?php the_field('diameters'); ?></h6>
    <h6 class="subdescr-loop subdescr-loop-pricer"><span>Цена:</span><?php the_field('price'); ?></h6>

  </div><!-- /looper -->
  <?php endwhile; else: ?>
  <div>

    <h2 class="title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>

  </div><!-- /article -->
<?php endif; ?>
