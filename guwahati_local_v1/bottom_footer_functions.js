var function_evaluation = false;

        function home_func() {
            func_catg_show('ads');
            function_darken_onclicked(0);
        }

        function event_func() {
            if ((function_evaluation == false) && (ad_gen_blocked_at >= ad_num )){
                onload_ad_to_load = ad_gen_blocked_at - ad_num;
                onload_load_ads();
                function_evaluation = true;
            }

            func_catg_hide();
            func_catg_show('event');
            function_darken_onclicked(1);
        }

        function offer_func() {
            if ((function_evaluation == false) && (ad_gen_blocked_at >= ad_num )){
                onload_ad_to_load = ad_gen_blocked_at - ad_num;
                onload_load_ads();
                function_evaluation = true;
            }
            func_catg_hide();
            func_catg_show('offer');
            function_darken_onclicked(2);
        }

        function job_func() {
            if ((function_evaluation == false) && (ad_gen_blocked_at >= ad_num )){
                onload_ad_to_load = ad_gen_blocked_at - ad_num;
                onload_load_ads();
                function_evaluation = true;
            }
            func_catg_hide();
            func_catg_show('job');
            function_darken_onclicked(3);
        }
