(function (cobalt) {
    var plugin = {
        name: 'snackbar',

        duration: {
            INFINITE: -2,
            SHORT: -1,
            LONG: 0
        },

        init: function () {
            cobalt.snackbar = {
                show: this.show.bind(this),
                duration: this.duration
            };
        },

        show: function (text, duration, action) {
            this.send('show', { 'text': text, 'duration': duration, 'action': action }, action && action.callback);
        },

        handleEvent: function (json) {
            cobalt.log(this.name, ' received unhandled event: ', json);
        },

        send: function (action, data, callback) {
            cobalt.send({ type: 'plugin', name: this.name, action: action, data: data }, callback);
        }
    };

    cobalt.plugins.register(plugin);
})(cobalt || {});

