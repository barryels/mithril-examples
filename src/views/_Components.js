import m from 'mithril';
import Page from './Page.js';
import Tabs from './Tabs.js';

import {
	code as helloWorld1,
	Component as HelloWorldComponent1
} from '../examples/helloWorld1.js';

import {
	code as helloWorld2,
	Component as HelloWorldComponent2
} from '../examples/helloWorld2.js';

import {
	code as helloWorld3,
	Component as HelloWorldComponent3
} from '../examples/helloWorld3.js';

import {
	code as helloWorld4,
	Component as HelloWorldComponent4
} from '../examples/helloWorld4.js';

import {
	code as stopwatch1,
	Component as StopwatchComponent1
} from '../examples/stopwatch1.js';

import {
	code as stopwatch2,
	Component as StopwatchComponent2
} from '../examples/stopwatch2.js';

import {
	code as rotator1,
	Component as RotatorComponent1
} from '../examples/rotator1.js';

import {
	code as password1,
	Component as PasswordComponent1
} from '../examples/password1.js';

import {
	code as textarea1,
	Component as TextareaComponent1
} from '../examples/textarea1.js';

import {
	code as tabs1,
	Component as TabsComponent1
} from '../examples/tabs1.js';

function view() {
	return (
		m(Page, { id: 'Components' },
			m('.Section',
				m('h2', 'Overview'),
				m('p', 'Mithril is a client-side MVC framework. You can read more about it at the ',
					m('a[href=http://mithril.js.org]', 'official website'), '. ',
					'This is an unofficial guide and collection of examples using the upcoming ',
					m('a[href=https://github.com/lhorie/mithril.js/tree/rewrite/docs]', '1.0 rewrite'),
					' of Mithril.js.'
				)
			),
			m('.Section',
				m('h2', 'Basic components'),
				m('p',
					'Every component is at minimum an object with a ',
					m('code.inline', 'view'),
					' method that returns a mithril virtual dom node.'
				),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: helloWorld1 })
					),
					m('.Demo-right',
						m('.Demo-result', m(HelloWorldComponent1))
					)
				),
				m('p',
					'The first argument to ',
					m('code.inline', 'm'),
					' is the element (as a css selector-like string) or component that should be rendered, and the optional last argument(s)',
					' are the children of that component.'
				),
				m('p',
					'Components can pass properties down to their children by passing in an object as the second argument in the call to ',
					m('code.inline', 'm'),
					'. Those properties become available to the component through the ',
					m('code.inline', 'attrs'),
					' object in the mithril virtual dom node.'
				),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: helloWorld2 })
					),
					m('.Demo-right',
						m('.Demo-result', m(HelloWorldComponent2))
					)
				),
				m('p',
					'In addition to the ',
					m('code.inline', 'view'),
					' method, Mithril components have a variety of ',
					m('a[href=https://github.com/lhorie/mithril.js/blob/rewrite/docs/lifecycle-methods.renderToStaticMarkup]', 'lifecycle hooks'),
					'. Using the ',
					m('code.inline', 'oninit'),
					' lifecycle hook, which runs once immediately before rendering the component, ',
					' we can set the initial state. At this point it is worth noting that the ',
					m('code.inline', 'vnode'),
					' object that is passed to the ',
					m('code.inline', 'view'),
					' method contains, in addition to ',
					m('code.inline', 'attrs'),
					', a ',
					m('code.inline', 'state'),
					' object that can be used to store the state of that specific component.'
				),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: helloWorld3 })
					),
					m('.Demo-right',
						m('.Demo-result', m(HelloWorldComponent3))
					)
				),
				m('p',
					'Mithril provides two utilities ',
					m('code.inline', 'm.withAttr'),
					' and ',
					m('code.inline', 'm.prop'),
					' that help simplify this process.'
				),
				m('p',
					m('code.inline', m('a[href=https://github.com/lhorie/mithril.js/blob/rewrite/docs/prop.md]', 'm.prop')),
					' is, at its simplest, a getter-setter function, while ',
					m('code.inline', m('a[href=https://github.com/lhorie/mithril.js/blob/rewrite/docs/withAttr.md]', 'm.withAttr')),
					' creates an event handler that uses a specified dom element property as the argument to a provided callback. ',
					'We can use them both to simplify the previous code. All together, this is the final version of this example:'
				),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: helloWorld4 })
					),
					m('.Demo-right',
						m('.Demo-result', m(HelloWorldComponent4))
					)
				)
			),
			m('.Section',
				m('h2', 'Stopwatch'),
				m('p',
					'In the previous example there was no need to manually tell mithril to update the view when ',
					'the contents of the input changed, because mithril automatically redraws after event handlers ',
					'are called. In this example there are no events that trigger an update, so we tell mithril to update via',
					m('code.inline', 'm.redraw'),
					'.'
				),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: stopwatch1 })
					),
					m('.Demo-right',
						m('.Demo-result', m(StopwatchComponent1))
					)
				),
				m('p',
					'Adding a reset button is as simple as creating the button element in the ',
					m('code.inline', 'view'),
					' function and setting its ',
					m('code.inline', 'onclick'),
					' handler to a function that changes the count to 0. Similarly, the Start/Pause toggle',
					' is just a button that either clears or starts a new counter.'
				),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: stopwatch2 })
					),
					m('.Demo-right',
						m('.Demo-result', m(StopwatchComponent2))
					)
				)
			),
			m('.Section',
				m('h2', 'List rotator'),
				m('p',
					'When rendering a list of data, it is a good idea to supply Mithril with a ',
					m('code.inline', 'key'),
					' attribute for each element in that list. ',
					m('a[href=https://github.com/lhorie/mithril.js/blob/rewrite/docs/keys.md]', 'keys'),
					' help Mithril maintain references to each element and should be unique for each item in the list.'
				),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: rotator1 })
					),
					m('.Demo-right',
						m('.Demo-result', m(RotatorComponent1))
					)
				)
			),
			m('.Section',
				m('h2', 'Password input'),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: password1 })
					),
					m('.Demo-right',
						m('.Demo-result', m(PasswordComponent1))
					)
				)
			),
			m('.Section',
				m('h2', 'Autogrow textarea'),
				m('p',
					'In some cases it is necessary to interact directly with the rendered dom node, not ',
					'just mithril virtual dom nodes. For those cases, certain lifecycle methods (including ',
					m('code.inline', 'oncreate'),
					' provide access to the actual node through the ',
					m('code.inline', 'dom'),
					' property. This example uses it to set the height of the textarea.'
				),
				m('p',
					'This example also relies on the fact that, in addition to being a getter-setter, ',
					'any variable set to ',
					m('code.inline', 'm.prop()'),
					' can be observed for changes. Whenever the value is updated, its ',
					m('code.inline', 'map'),
					' function calls its callback with the new value. (In this case, we just ignore the ',
					' new value since the height is set regardless of the specific contents).'
				),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: textarea1 })
					),
					m('.Demo-right',
						m('.Demo-result', m(TextareaComponent1))
					)
				)
			),
			m('.Section',
				m('h2', 'Tabs'),
				m('p',
					'The only state that tabs need to keep internally is the index of the active tab. The example components ',
					'store this state in each instance of the tabs, whereas the ',
					m('a[href=https://github.com/sebastiansandqvist/mithril-examples/blob/master/src/views/Tabs.js?ts=2]', 'tabs on this site'),
					' keep that state globally so that all instances stay synced to the same active index.'
				),
				m('.Demo',
					m('.Demo-left',
						m(Tabs, { tabs: tabs1 })
					),
					m('.Demo-right',
						m('.Demo-result', m(TabsComponent1))
					)
				)
			)
		)
	);
}

const GettingStarted = {
	view
};

export default GettingStarted;