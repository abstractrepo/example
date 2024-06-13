import React from 'react';
import {Box, Text, useStdout} from 'ink';

const expose = [
	{
		title: 'node:init',
		desc: 'an node plugin command for init repository',
	},
	{
		title: 'node:add',
		desc: "an node plugin command for install node packages that don't requires package manager name",
	},
];

export default function Table() {
	const {stdout} = useStdout();

	React.useEffect(() => {
		stdout.write('');
	}, [stdout]);

	return null;
}
