<?php
/**
 * Title: Default Footer
 * Slug: toms/footer-default
 * Categories: footer
 * Block Types: core/template-part/footer
 */
?>
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
	<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|40"}}},"layout":{"type":"flex","justifyContent":"space-between"}} -->
	<div class="wp-block-group alignwide" style="padding-top:var(--wp--preset--spacing--40)">
		<!-- wp:social-links {"iconColor":"contrast","iconColorValue":"#2500ff","openInNewTab":true,"className":"is-style-logos-only","layout":{"type":"flex","justifyContent":"center"}} -->
		<ul class="wp-block-social-links has-icon-color is-style-logos-only">
			<!-- wp:social-link {"url":"https://github.com/thomasdevisser","service":"github"} /-->

			<!-- wp:social-link {"url":"https://profiles.wordpress.org/thomasdevisser/","service":"wordpress"} /-->

			<!-- wp:social-link {"url":"https://twitter.com/thomasjdevisser","service":"twitter"} /-->
		</ul>
		<!-- /wp:social-links -->
		<!-- wp:paragraph {"align":"right"} -->
		<p class="has-text-align-right">
		<?php
		printf(
			/* Translators: The current year. */
			esc_html__( '&copy; %s Tom de Visser', 'toms' ),
			date( 'Y' )
		)
		?>
		</p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
