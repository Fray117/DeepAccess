<style type="text/css">
	html {
		text-align: center;
		color: #FFFFFF;
		background-color: #000000;
		font-family: monospace;
	}

	a {
		text-decoration: none;
	}

	.live {
		color: #00FF00;
	}

	.dead {
		color: #FF0000;
	}
</style>

<?php
/**
 * DeepAccess Intrepeter
 *
 * @author Fray117
 */

include 'deepaccess.php';

$deepaccess = new DeepAccess;

/** List to Array */
$list = preg_split('/\r\n|\r|\n/', $_POST['list']);

print var_export($deepaccess->merge($list));

exit;
// print var_export(get_headers('http://localhost/', 1));
for ($i=0; $i < sizeof($list); $i++) { 
	if ($deepaccess->check($list[$i])) {
		print $list[$i] . ' -> <a href="' . $list[$i] . '" class="live">LIVE</a><br>';
	} else {
		print $list[$i] . ' -> <a href="' . $list[$i] . '" class="dead">NONE</a><br>';
	}
}