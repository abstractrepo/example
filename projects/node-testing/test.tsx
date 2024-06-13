import React from 'react';
import chalk from 'chalk';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from './source/app.js';

test('mock', t => {
	t.assert(1 + 1 === 2);
});
