<?php

add_action( 'wp_enqueue_scripts', 'cardrona_gb_styles' );
function cardrona_gb_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_script( 'uk', get_stylesheet_directory_uri() . '/js/uk.js', array(), false, false );
}
