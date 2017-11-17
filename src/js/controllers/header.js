'use strict';
export default class headerCtrl {
	constructor($state, $http){
		Object.assign(this, {$state, $http})
		this.showMenu0 = false;
		this.showMenu1 = false;
		this.showMenu2 = false;
		this.showMenu3= false;
	};

	mouseenter(index) {
		this.commonfunc(index);
	}

	mouseleave(index) {
		/* Act on the event */
		this.commonfunc(index);
	}

	commonfunc(index) {
		switch(index) {
			case 0:
				this.showMenu0 = !this.showMenu0
				break;
			case 1:
				this.showMenu1 = !this.showMenu1
				break;
			case 2:
				this.showMenu2 = !this.showMenu2
				break;
			case 3:
				this.showMenu3 = !this.showMenu3
				break;
		}
		return;
	}
}

headerCtrl.$inject=['$state', '$http']