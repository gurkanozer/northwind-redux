import {combineReducers} from 'redux';
import changeCategoryReducer from './changeCategoryReducer';
import categoryListReducer from './categoryListReducer';
import productListReducer from './productListReducer';
import cartReducer from './cartReducer';
import saceProductReducer from './saveProductReducer';

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
    saceProductReducer

})
export default rootReducer;