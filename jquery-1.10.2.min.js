<script>
(function($){$(document).ready(function(){
    $("[title]").style_my_tooltips({
    tip_follows_cursor:true,
    tip_delay_time:30,
    tip_fade_speed:300,
    attribute:"title"});});})(jQuery);
</script>

<script>
    $(document).ready(function(){
    	$(".lineage-content").hide();
        $(".clicky").click(function(){
            $(this).next(".lineage-content").slideToggle("750");
		});
    });
</script>
<script>
    $(document).ready(function(){
        $(".menu").click(function(){
            $(".usercontrols").slideToggle("750");
            $(".clickypanel").toggle("750");
		});
        $(".clickypanel").click(function(){
            $(".usercontrols, .clickypanel").slideUp("750");
		});
    });
</script>
