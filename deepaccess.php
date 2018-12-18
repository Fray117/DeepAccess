<?php
/**
 * DeepAccess - Hyper Text Validator
 *
 * @author Fray117
 */

class DeepAccess {
	
	function check($url, $follow = 1) {
		
		/** Fetch Headers */
		if (empty($url)) {
			return false;
		} else {
			$header = get_headers($url, 1);
		}

		/** Check Status */
		if (preg_match('/200/', $header[0])) {
			return true;
		} elseif (preg_match('/301/', $header[0]) || preg_match('/302/', $header[0])) {
			
			/** Follow Location */
			if ($follow = 1) {
				return $this->check($header['Location']);
			} else {
				return false;
			}
		} else {
			return false;
		}

	}

	function validate($url, $match) {

		/** Validate using RegEx */
		if (preg_match($match, file_get_contents($url))) {
			return true;
		} else {
			return false;
		}

	}

	function merge($list, $display = 0) {

		for ($i=0; $i < sizeof($list); $i++) { 
			if (isset($a)) {
				for ($b=0; $b < sizeof($a); $b++) { 
					if ($list[$i] == $a[$b]) {
						continue;
					} else {
						$a[] = $list[$i];
					}
				}
			} else {
				$a = array($list[$i]);
			}
		}

		return $a;

	}
}