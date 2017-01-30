<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'gavris_mmet');

/** Имя пользователя MySQL */
define('DB_USER', 'gavris_mmet');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '*BESr4sg');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '&Y0?!tm*9:f|bu|?Y}_XnOxV%|R%pDH*;=t<|f@F`=zY)8_A/JMR_Lt<(.*X^I Y');
define('SECURE_AUTH_KEY',  '.u3#UX_cvfRN8O:TT:|y>?6BD02e9{qVz>w@X,%@,r1Ssb&eQDNQH{0.}nn9z1qo');
define('LOGGED_IN_KEY',    'n=8`Cwz*71k;&E<>Aj+vhuf* H?lpRK8L#mvi!T6[L!>@0+&Qh6CI{i]mo$.Vipz');
define('NONCE_KEY',        '5iW p2Y}flew|ezwA/JJ0@e$G1H#f-UZn30hVc|EmiQ?5oWY>(ihVyC=#9zJ=kw%');
define('AUTH_SALT',        'b=}&Sb P ex}Vq*_X*OP}KXIPxEwB#0E]J9-z8gUTkc)4#P,UVQ(TML7S$fI,HH1');
define('SECURE_AUTH_SALT', 'Ck~o~CtJ>wz-?btni|{M9b#<[ibfl-_ODtDxe{PW%>hSI`4%!SS(=c5QUNr}Ar:!');
define('LOGGED_IN_SALT',   '{/o|dQHfkFau ?jZ8aLu:|uQJj?22l#1AbC%ND5cL_Vxx;5!QK UD4xuHE|j^_B%');
define('NONCE_SALT',       'IW}/6!?>Q#n&/&yA3wr7cdDi(RX[-a<tMmJ6n&lOvlTXk>za6S}ci@`/6^6ktjy+');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
