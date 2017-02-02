<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="<?php bloginfo( 'charset' ); ?>">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!-- icons -->
  <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">

  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
  <link rel="stylesheet" href="//cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css">

</head>
<body <?php body_class(); ?>>
  <div id="wrapper">
    <div id="header-wrap">
      <header id="header">
        <div class="company">
          <div class="company-logo">
            <a href="<?php echo home_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/img/site-logo_2.png" alt=""></a>
          </div>
          <div class="company-name">Название компании</div>
          <div class="company-desc">Металлопрокат</div>
        </div>
        <div class="header-container clearfix">

          <?php wpeHeadNavTop(); ?>
          <div class="site-phone">
            <div class="phone-site">
              <a href="tel:+7 (000) 000-00-00">+7 (000) 000-00-00</a>
            </div>
            <div class="phone-site">
              <a href="tel:8 (000) 111-11-11">8 (000) 111-11-11</a>
            </div>
          </div>
          <div class="site-mail">
            <a href="mailto:login@domain.ru">login@domain.ru</a>
          </div>
        </div>
      </header>
      <!-- #header-->
      <div class="clearfix"></div>
    </div>
    <div class="nav-top clearfix">
      <div class="nav-top-in">
        <?php wpeHeadNav(); ?>
        <div class="search-wrap">
          <form  method="get"  name="searchform" action="<?php echo home_url(); ?>" role="search" class="search">
            <input name="s" type="text" placeholder="Поиск по сайту..." value="">
            <input type="submit" value="">
          </form>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>

    <div id="middle" class="side-left clearfix">
