/**
 * Created by martin on 02.03.2016.
 */

export default {
    create({Meteor, LocalState}, email, password) {
        if (!email) {
            return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
        }

        if (!password) {
            return LocalState.set('CREATE_USER_ERROR','Password is required.')
        }

        LocalState.set('CREATE_USER_ERROR',null);

        Accounts.createUser({email, password});
        FlowRouter.go('/');
    },

    clearError({LocalState}) {
        return LocalState.set('SAVING_ERROR',null);
    }
}
