angular.module( 'sailng.member', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'member', {
		url: '/member',
		views: {
			"main": {
				controller: 'MembertCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		}
	});
})

.controller( 'MembertCtrl', function MemberController( $scope, titleService ) {
	titleService.setTitle('member');
});