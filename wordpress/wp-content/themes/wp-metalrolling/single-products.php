<?php get_header(); ?>
<?php get_sidebar(); ?>
  <div id="container">
    <div id="content">

      <?php get_template_part('slider-wrap'); ?>

      <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>

      <?php if (have_posts()): while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?>>
          <h1 class="page-title inner-title"><?php the_title(); ?></h1>
          <div class="feature-img">
            <?php if ( has_post_thumbnail()) :
              the_post_thumbnail('medium');
            else: ?>
              <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
            <?php endif; ?>
            <span class="subdescr">Прайс лист: <a target="_blank" href="<?php the_field('price_file'); ?>">Скачать</a></span>
          </div><!-- /.feature-img -->
          <h6 class="subdescr">Стандарт: <?php the_field('standart'); ?></h6>
          <h6 class="subdescr">Сталь: <?php the_field('steel'); ?></h6>
          <h6 class="subdescr">Диаметры: <?php the_field('diameters'); ?></h6>
          <h6 class="subdescr">Цена: <span><?php the_field('price'); ?></span></h6>
        </article>

        <div class="products-loader">
        </div><!-- /.products-loader -->

        <div class="products-pricetable">
          <h6>Фильтр таблицы:</h6>
          <div class="products-pricetable--filters-h">
          </div><!-- /.products-pricetable--filters-h -->
          <div class="products-pricetable--filters">
          </div><!-- /.products-pricetable--filters -->
          <?php $table =  get_field('table_shortcode'); /*  echo do_shortcode($table); */ ?>
        </div><!-- /.products-pricetable -->

       <?php $liser =  do_shortcode($table);  var_dump($liser); ?>

        <?php get_template_part('relative-products'); ?>

      <?php endwhile; else: ?>
        <article>
          <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
        </article>
      <?php endif; ?>


    </div><!-- #content-->
  </div><!-- #container-->
<?php get_footer(); ?>
