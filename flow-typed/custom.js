// @flow

const forms = {
    STATES: {
        idle: 'idle',
        busy: 'busy',
    },
};

// This line causes the error. It otherwise works perfectly, if i delete it and access the STATES, without destructuring => declare type FormState = $Values<typeof forms.STATES>;
const {STATES} = forms;

declare type FormState = $Values<typeof STATES>;
