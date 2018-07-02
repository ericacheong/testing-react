import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New comment'
    };
    const newState1 = commentsReducer([], action);
    
    expect(newState1).toEqual(['New comment']);
});
it('handles action with unknown type', () => {
    const newState = commentsReducer([], { type: '' });
    expect(newState).toEqual([]);
});