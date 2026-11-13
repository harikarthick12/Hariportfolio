(function ($) {
    "use strict";



    $(window).on('elementor/frontend/init', function () {


        elementorFrontend.hooks.addAction('frontend/element_ready/global', function ($scope, $) {



            if ($scope.hasClass('section-fullscreen-menu')) {


                $scope.addClass('fullscreen_menu');
                $scope.attr('id', 'site-navigation'); 
               

                if (!$scope.hasClass('fs--initialized')) {

                    $scope.find('.main-menu ul.sub-menu').wrap('<div class="sub-menu-wrapper"></div>');
                    $scope.addClass('fs--initialized');

                }
               

            }


            if ($scope.hasClass('section-project-header') && $scope.hasClass('elementor-element-edit-mode')) {


                $scope.append('<div class="project-image featured prev-dark"><img src="' + findPath.pluginsUrl + '/nayla-elementor-extension/assets/img/place-holder-dark.jpg' + '"/></div>"')
                $scope.append('<div class="project-image featured prev-light"><img src="' + findPath.pluginsUrl + '/nayla-elementor-extension/assets/img/place-holder-light.jpg' + '"/></div>"')
            }
            

        });



    });
    
})(jQuery)



