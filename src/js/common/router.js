import mainRouter from '../../router/router.js';
import mendianRouter from '../../pages/mendian/router/router.js';
import caipinRouter from '../../pages/caipin/router/router.js';

export default angular.module('ngRouter',[])
.config(mainRouter)
.config(mendianRouter)
.config(caipinRouter)
.name