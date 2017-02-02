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
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/update_css.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/easydropdown.flat.css">
  <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.easydropdown.js"></script>
</head>
<body <?php body_class(); ?>>
  <div id="wrapper">
    <div id="header-wrap" style="background: rgba(41, 41, 41, 0.9) url(<?php echo get_template_directory_uri(); ?>/img/top-pt.png) center top repeat;">
      <header id="header">
        <div class="company" style="width: 300px; padding-right: 10px;">
          <div class="company-logo">
			  <a style="display: none;" href="<?php echo home_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/img/site-logo_2.png" alt=""></a>
			  <a href="<?php echo home_url(); ?>"><img style="height: 80px; max-width: none;" src="http://<?php echo $_SERVER['SERVER_NAME']; ?>/wp-content/uploads/2017/01/Logo.png" alt=""></a>
          </div>
			  <div  style="display: none;"class="company-name">Название компании</div>
			  <div  style="display: none;"class="company-desc">Металлопрокат</div>
        </div>
		<div class="company" style="width: 380px; margin-top: 26px; margin-left: 10px; padding-right: 10px;">
          <div class="company-logo">
			  <noindex><img rel="nofollow" style="height: 110px; max-width: none;" src="http://<?php echo $_SERVER['SERVER_NAME']; ?>/wp-content/uploads/2017/01/shapka-metall.png" alt=""> </noindex>
          </div>
        </div>
		<div class="header-container" style="width: 160px; float: left; margin-top: 20px; margin-right: 0px; margin-left: 20px;">
		  <p><a style="color: #ffd200;" href="http://<?php echo $_SERVER['SERVER_NAME']; ?>/kalkulyator-metalla"><img style="height: 13px; margin: 0px 4px -2px 0px;" src="<?php echo get_template_directory_uri(); ?>/img/calculator.png">Калькулятор металла</a></p>
		  <p><a style="color: #ffd200;" href="http://<?php echo $_SERVER['SERVER_NAME']; ?>/marochnik-stalej"><img style="height: 13px; margin: 0px 4px -2px 0px;" src="<?php echo get_template_directory_uri(); ?>/img/cube.png">Марочник сталей</a></p>
		  <p><a style="color: #ffd200;" href="http://<?php echo $_SERVER['SERVER_NAME']; ?>/spravochnik-gostov"><img style="height: 13px; margin: 0px 4px -2px 0px;" src="<?php echo get_template_directory_uri(); ?>/img/directory-submission-symbol.png">Справочник ГОСТов</a></p>
        </div>
        <div class="header-container" style="width: 180px; margin: 36px 23px 20px 0;">
          <div class="top-but text-shadow" style="display: none;">
            <a href="/online---zayavka">Online - заявка</a>
          </div>
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
