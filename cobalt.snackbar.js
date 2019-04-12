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
        show: function (options) {
            if (options) {
                if (typeof options === 'string') {
                    this.send('show', { text: options }, options && options.callback);
                }
                else {
                    this.send('show', options, options && options.callback);
                }
            }
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
