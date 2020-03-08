module.exports = () =>
{
	'use strict';

	const config =
	{
		documentation:
		{
			files:
			{
				src:
				[
					'documentation/**/*.md',
					'!documentation/03.languages/02.language-codes.md',
					'!documentation/06.modules/02.module-overview.md',
					'!documentation/06.modules/04.module-hooks.md'
				]
			},
			options:
			{
				ignoreNumbers: true
			}
		}
	};

	return config;
};