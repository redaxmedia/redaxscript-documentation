module.exports = () =>
{
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
					'!documentation/06.modules/03.module-hooks.md'
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
