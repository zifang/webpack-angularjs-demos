import { statusFilter, payStatusFilter, orderTypeFilter, mendianTypeFilter, mendianStatusFilter } from './status.js';

export default angular.module('filter', [])
.filter('statusFilter', () => {
  return statusFilter.status;
})
.filter('payStatusFilter', () => {
	return payStatusFilter.status;
})
.filter('orderTypeFilter', () => {
	return orderTypeFilter.status;
})
.filter('mendianTypeFilter', () => {
	return mendianTypeFilter.status;
})
.filter('mendianStatusFilter', () => {
	return mendianStatusFilter.status;
})
.name