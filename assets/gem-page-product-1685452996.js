

    (function( jQuery ){
  var $module = jQuery('#m-1680002509120').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1680002509185').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1681214865778').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  (function( jQuery ){
  // var $module = jQuery('#m-1679325869592').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1680002509156').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  (function(jQuery) {
  var $module = jQuery('#m-1680002509147').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);(function(jQuery) {
  var $module = jQuery('#m-1680002509172').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {
      document.dispatchEvent(new CustomEvent('variant:change', {
        detail : {
          variant: variant
        }
      }));
    }
  });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  // var $module = jQuery('#m-1683107441906').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  // var $module = jQuery('#m-1680535309331').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1685453089432').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1685453089485').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1685453089385').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1685453089401').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1685453089441').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1685453089406').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
  
    (function( jQuery ){
  var $module = jQuery('#m-1685453742835').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1685453089377').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1685453089425').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1683102321968').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#e-1685453089419","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685453089419","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":500}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685453089422","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685453089422","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":250}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1685453089454","target":".module"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685453089438","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Text Block: #e-1685453089438"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685453468625","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685453468625","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":250}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685453884240","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685453884240","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":500}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685453478091","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685453478091","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":250}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685453897240","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685453897240","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":500}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685453500015","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685453500015","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":250}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685453917621","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685453917621","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":500}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685453929813","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685453929813","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":500}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685453516325","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685453516325","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":250}}]}]}]); window.__gfV1FlowActions.init();