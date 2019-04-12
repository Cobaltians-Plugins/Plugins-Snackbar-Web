(function (cobalt) {
    var plugin = {
        classes: {
			ios: 'CobaltSnackbarPlugin',
			android: 'io.kristal.snackbarplugin.SnackbarPlugin'
        },
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
                    cobalt.plugins.send(this, 'show', { text: options }, options && options.callback);
                }
                else {
                    cobalt.plugins.send(this, 'show', options, options && options.callback);
                }
            }
        }
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});
