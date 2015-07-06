angular.module( 'sailng.member', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/member',
		views: {
			"main": {
				controller: 'MembertCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		}
	});
})

.controller( 'MembertCtrl', function AboutController( $scope, titleService ) {
	titleService.setTitle('member');
});