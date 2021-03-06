import 'fetch-ie8';
import m from 'mithril';
import T from 's-types';
import GettingStarted from './views/_GettingStarted.js';
import Examples from './views/_Examples.js';
import Applications from './views/_Applications.js';
import Requests from './views/_Requests.js';
import Routing from './views/_Routing.js';
import Streams from './views/_Streams.js';

T.disabled = window.location.hostname !== 'localhost';

const routes = {
	'/': GettingStarted,
	'/gettingstarted': GettingStarted,
	'/examples': Examples,
	'/applications': Applications,
	'/requests': Requests,
	'/routing': Routing,
	'/routing/:param': Routing,
	'/streams': Streams
};

m.route.prefix('');
m.route(document.getElementById('app'), '/', routes);