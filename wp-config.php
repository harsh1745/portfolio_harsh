<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'h_portfolio' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>8x}rq!8+;8geFGsv>k)tv}s!Oe{s:)95$jcFcq~,JN(#$|nOk4!qSqhgETulr:<' );
define( 'SECURE_AUTH_KEY',  ';:|u{JmQ]/<H[NF&a%FigfHw^Fyts2@Rgc{fE-e.==[9M~@w.ka$=3:?JJoAWKAR' );
define( 'LOGGED_IN_KEY',    '[Uf8.G-~!sw`Nx<C /fED}+3^:>),-KlEbc*;:QpsyZYin<&*u;=8Js}YoJ24x),' );
define( 'NONCE_KEY',        'e46Lq[2p<Y |36>)d/ h2{%J<v2/=f{6.;SOhk0u/x8 _;$d*@AN.UUqa3ZQ@sjG' );
define( 'AUTH_SALT',        'EAQ}/N^Thuy}~QUObsLM<T(hz^1>6c(kgfLjHcgN?|bHg)n7zX1~ZA(PsM~qIsEf' );
define( 'SECURE_AUTH_SALT', 'pj3&{%Sc~dKExR&?iPXeTw0uM0dPRKW/fB=3j`LmGnU(!&Y[V8$L%l;(r`>SZE m' );
define( 'LOGGED_IN_SALT',   'T{:mLQxCY+#9TzlW@Js7fC$V7U[}wP3C(Vr{jQ&eG}8A.W&a{&G_iE$M:OqbYJi6' );
define( 'NONCE_SALT',       '4mg!7$ <t`9BYbznJ+@I-WDJ0X0QPu NMT]F=SnG8%&5hvkfc&M,_>UrvzqO%|*G' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
