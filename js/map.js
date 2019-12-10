/**
 * File map.js.
 *
 * Map SVG functions.
 */

(function($){

	jQuery("#mapsvg").mapSvg( {
	    width: 628.09174, height: 1051, colors: {
            baseDefault: "#000000", directory: "#fafafa", status: {}
            , background: "transparent", base: "#D09A5A", disabled: "#000000", stroke: "#171717", hover: "daaa75", selected: "daaa75"
        }
		, viewBox: [-0.14306866085257752, 0, 628.3778773217051, 1051.4788], cursor: "pointer", onClick: function(e, mapsvg) {
	        var region=this;
	        var str=this.title.replace(/\s/g, '');
	        var str=str.replace(/'/g, '');
	 var str=str.replace(/-/g, '');
	        var title=str.toLowerCase();
	        console.log(title);
	        $('div.region').removeClass('active');
	        $('div.' + title).addClass('active');
	    }
	    , tooltips: {
	        mode: "title", on: false, priority: "local", position: "bottom-right"
	    }
	    , popovers: {
	        mode: "off", on: false, priority: "local", position: "top", centerOn: false, width: 300, maxWidth: 50, maxHeight: 50, resetViewboxOnClose: true, mobileFullscreen: "0"
	    }
	    , gauge: {
	        on: false, labels: {
	            low: "low", high: "high"
	        }
	        , colors: {
	            lowRGB: {
	                r: 85, g: 0, b: 0, a: 1
	            }
	            , highRGB: {
	                r: 238, g: 0, b: 0, a: 1
	            }
	            , low: "#550000", high: "#ee0000", diffRGB: {
	                r: 153, g: 0, b: 0, a: 0
	            }
	        }
	        , min: 0, max: false
	    }
	    , source: "/wp-content/themes/cardronadistillery-gb/mapsvg/maps/geo-calibrated/united-kingdom.svg", title: "United-kingdom", responsive: true
	}

	);


})(jQuery);
