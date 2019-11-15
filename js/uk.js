function getCookie(c_name) {
	var c_value = document.cookie,
		c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) c_start = c_value.indexOf(c_name + "=");
	if (c_start == -1) {
		c_value = null;
	} else {
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start, c_end));
	}
	return c_value;
}

(function($) {

	// console.log("document.URL : "+document.URL);
	// console.log("document.location.href : "+document.location.href);
	// console.log("document.location.origin : "+document.location.origin);
	// console.log("document.location.hostname : "+document.location.hostname);
	// console.log("document.location.host : "+document.location.host);
	// console.log("document.location.pathname : "+document.location.pathname);
	// console.log("navigator.language : "+navigator.language);

	var acookie = getCookie("redirect");
	if (!acookie) {

		$.get('https://jsonip.com/', function (res) {
			// console.log(res.ip)

			$.get('https://ipapi.co/' + res.ip + '/json/', function (rest) {
				console.log(rest.country);

				var EU = ['GB','BE','BG','CZ','DK','DE','EE','IE','EL','ES','FR','HR','IT','CY','LV','LT','LU','HU','MT','NL','AT','PL','PT','RO','SI','SK','FI','SE'];
				var in_EU = EU.indexOf(rest.country); // -1 means not found in array

				if (in_EU < 0) {
					var EU_COUNTRY = false
				} else {
					var EU_COUNTRY = true
				}

				console.log(EU_COUNTRY);

				// Are you a pommy?
				if (rest.countryCode === 'AU')
				{
					$('.destination').text(rest.country_name);
					$('.destination2').text('Australian');
					$('.destination-link').attr('href', 'https://www.cardronadistillery.com/au/');
				}
				// OK, are you in new zealand?
				else if (EU_COUNTRY === false)
				{
					$('.destination').text(rest.country_name);
					$('.destination2').text('Global');
					$('.destination-link').attr('href', 'https://www.cardronadistillery.com/');
				} else {
					$('.country-alert').remove();
				}
			});

		});

	}

	setTimeout(function() {
		$('.country-alert').addClass('show');
	}, 10000)

})(jQuery);
