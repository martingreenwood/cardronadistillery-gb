<?php

add_action( 'wp_enqueue_scripts', 'cardrona_gb_styles' );
function cardrona_gb_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	if (is_page( 'stockists' )):
		wp_enqueue_style( 'nanoscroller', get_stylesheet_directory_uri() . '/mapsvg/css/nanoscroller-min.css' );
		wp_enqueue_style( 'mapsvg', get_stylesheet_directory_uri() . '/mapsvg/css/mapsvg-min.css' );
		wp_enqueue_script( 'mousewheel-JS', get_stylesheet_directory_uri() . '/mapsvg/js/jquery.mousewheel.min.js', array(), false, true );
		wp_enqueue_script( 'nanoscroller-JS', get_stylesheet_directory_uri() . '/mapsvg/js/jquery.nanoscroller.min.js', array(), false, true );
		wp_enqueue_script( 'mapsvg-JS', get_stylesheet_directory_uri() . '/mapsvg/js/mapsvg.js', array(), false, true );
		wp_enqueue_script( 'ukmap', get_stylesheet_directory_uri() . '/js/map.js', array(), false, true );
	endif;
}
