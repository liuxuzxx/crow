/**
 * Created by liuxu on 2018-08-03 11:38:22
 * description: suspects的reducer
 */

const SuspectsReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            console.log('执行了add类型的action');
            return [...state, {suspectsName: action.suspectsName, age: action.age}];
        default:
            return state;
    }
};

export default SuspectsReducer;