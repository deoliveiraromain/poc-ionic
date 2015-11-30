var controllers = angular.module('controllers', ['openlayers-directive']);


controllers.controller('MainCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/modals/circulation-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.circulationModal = modal;
  });
  $scope.openCirculationModal = function() {
    $scope.circulationModal.show();
  };

  $ionicModal.fromTemplateUrl('templates/modals/couleurs-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.couleursModal = modal;
  });
  $scope.openCouleursModal = function() {
    $scope.couleursModal.show();
  };


  $ionicModal.fromTemplateUrl('templates/modals/legendes-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.legendesModal = modal;
  });
  $scope.openLegendesModal = function() {
    $scope.legendesModal.show();
  };


  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.circulationModal.remove();
    $scope.couleursModal.remove();
    $scope.legendesModal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });


  //$scope.center = {
  //  lat: 51.505,
  //  lon: -0.09
  //  zoom: 4
  //}
  angular.extend($scope, {
    center: {
        lat: 51.505,
        lon: -0.09,
        zoom: 8
    },
    defaults: {
                    layers: {
                        main: {
                            source: {
                                type: 'OSM',
                                url: 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
                            }
                        }
                    },
                    interactions: {
                      mouseWheelZoom: false
                    },
                    controls: {
                        zoom: false,
                        rotate: true,
                        attribution: false
                    }
              }
            }
            );
 // });


});



controllers.controller('CirculationCtrl', function($scope, $ionicModal) {  
  $scope.closeCirculationModal = function() {
    $scope.circulationModal.hide();
  };

});


controllers.controller('CouleursCtrl', function($scope, $ionicModal,$ionicPopover) {  
    $scope.closeCouleursModal = function() {
      $scope.couleursModal.hide();
    };

    $scope.regions=[
    {
    	nom : 'Île-de-France',
		depart : 'easy',
		retour : 'hard',
	},
	{
		nom : 'Grand-Ouest et Nord',
		depart : 'very-hard',
		retour : 'nightmare'
	},
	{
		nom : 'Bourgogne et Est',
		depart : 'very-hard',
		retour : 'hard'
	},
	{
		nom : 'Rhône-Alpes et Auvergne',
		depart :'easy',
		retour : 'easy'
	},
	{
		nom : 'Arc méditerranéen',
		depart :'hard',
		retour : 'hard'
	},
	{
		nom: 'Sud-Ouest',
		depart : 'nightmare',
		retour : 'nightmare'
	}

    ];

    $scope.getDepartColor= function(depart){
    	if (depart=='easy'){
    		return 'img/fleche_haut_verte.png'
    	}
    	else if (depart =='hard'){
    		return 'img/fleche_haut_orange.png'
    	}
    	else if (depart == 'very-hard'){
    		return 'img/fleche_haut_rouge.png'
    	}
    	else if(depart == 'nightmare'){
    		return 'img/fleche_haut_noir.png'
    	}
    }

    $scope.getRetourColor = function(retour){
    	if (retour=='easy'){
    		return 'img/fleche_bas_verte.png'
    	}
    	else if (retour =='hard'){
    		return 'img/fleche_bas_orange.png'
    	}
    	else if (retour == 'very-hard'){
    		return 'img/fleche_bas_rouge.png'
    	}
    	else if(retour == 'nightmare'){
    		return 'img/fleche_bas_noir.png'
    	}

    }


  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('templates/modals/legende-couleurs-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

});

controllers.controller('LegendesCtrl', function($scope, $ionicModal) {  
      $scope.closeLegendesModal = function() {
        $scope.legendesModal.hide();
      }; 
});



