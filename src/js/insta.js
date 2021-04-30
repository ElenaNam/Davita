/* import * as ins from "./jquery.instagramFeed.min";
import { valueInst } from "./media";
const items = valueInst();

const showError = () => {
  console.log('instagram')
}

(function ($) {
  $(window).on("load", function () {
    $.instagramFeed({
      host:
        "https://images" +
        ~~(Math.random() * 3333) +
        "-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/",
      //username: "kot_mukha",
      username: "davita_mebelsamara", 
      container: "#instfeed",
      display_profile: false,
      display_biography: false,
      display_gallery: true,
      display_captions: false,
      callback: null,
      styling: false,
      items: items[0],
      items_per_row: items[1],
      cache_time: 700,
      on_error: showError(),
    });
  });
})(jQuery);  */
