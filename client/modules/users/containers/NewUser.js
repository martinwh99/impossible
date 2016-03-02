/**
 * Created by martin on 02.03.2016.
 */
import NewUser from '../components/NewUser.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearError}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('CREATE_USER_ERROR');

    //clearError when unmounting the component
    return clearErrors;
};

export const depsMapper = (context, actions) => ({
    create: actions.users.create,
    clearErrors: actions.users.clearErrors,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(NewUser);
