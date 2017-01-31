<?php if( get_field('show_slider') ): ?>
  <div class="slider-wrap">
    <ul class="slider">
    <?php if( have_rows('slider') ): while ( have_rows('slider') ) : the_row(); ?>
      <?php $image = get_sub_field('slider_image'); if( !empty($image) ): ?>

        <li>
          <a href="javascript:void(0);">
            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
          </a>
        </li>

      <?php endif; ?>

    <?php endwhile; endif; ?>
    </ul>
  </div><!-- slider-wrap -->

<?php endif; ?>
