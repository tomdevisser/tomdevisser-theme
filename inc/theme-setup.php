<?php
/**
 * This file is meant to set up the theme by enqueueing styles and scripts, and
 * removing core functionality that is unwanted.
 *
 * @package toms
 */

/**
 * Sets up everything around blocks and block patterns.
 *
 * @package toms
 */
require 'blocks.php';

/**
 * Unregisters all block patterns from WordPress core.
 *
 * @package toms
 */
function toms_block_course_theme_unregister_patterns() {
	remove_theme_support( 'core-block-patterns' );
}
add_action( 'after_setup_theme', 'toms_block_course_theme_unregister_patterns', 15 );

/**
 * Allows SVG uploads.
 *
 * @param array $t Mime types keyed by the file extension regex corresponding to those types.
 * @package toms
 */
function toms_mime_types( $t ) {
	$t['svg'] = 'image/svg+xml';
	return $t;
}
add_filter( 'upload_mimes', 'toms_mime_types' );

/**
 * Require all custom post type registration files.
 *
 * @package toms
 */
if ( file_exists( get_template_directory() . '/post-types' ) ) {
	$toms_cpt_files = glob( get_template_directory() . '/post-types/*.php' );

	// Auto require all found post types.
	foreach ( $toms_cpt_files as $toms_cpt_file ) {
		require $toms_cpt_file;
	};
};

/**
 * Enqueue scripts and styles.
 *
 * @package toms
 */
function toms_scripts() {
	wp_enqueue_script( 'toms-scripts', get_template_directory_uri() . '/build/toms-scripts.js', array(), '1.0.0', true );
	wp_enqueue_style( 'toms-styles', get_template_directory_uri() . '/build/toms-styles.css', array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'toms_scripts' );
