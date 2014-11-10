this.NesDb = this.NesDb || {};

NesDb[ 'B57C4E9CE3212F4E75B71A733FF2907970521D40' ] = {
	"$": {
		"name": "Terminator, The",
		"class": "Licensed",
		"catalog": "NES-NA-USA",
		"publisher": "Mindscape",
		"developer": "Radical Entertainment",
		"region": "USA",
		"players": "1",
		"date": "1992-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6272C549",
				"sha1": "B57C4E9CE3212F4E75B71A733FF2907970521D40",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-12"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-NA-0 PRG",
								"size": "128k",
								"crc": "5866AEBE",
								"sha1": "FD8F99E2DA408E30CF1D04360E53E44634943966"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-NA-0 CHR",
								"size": "128k",
								"crc": "DDBEA111",
								"sha1": "CBCCDBA8D3087802BA11BC141D0046667B5B8664"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
