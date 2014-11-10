this.NesDb = this.NesDb || {};

NesDb[ '0F4E4C212A6BCCAD4561EA31889D522007FD5D81' ] = {
	"$": {
		"name": "F-15 Strike Eagle",
		"class": "Licensed",
		"catalog": "NES-8F-SCN",
		"publisher": "Microprose",
		"developer": "Microprose",
		"region": "Scandinavia",
		"players": "1",
		"date": "1993-02-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "872DE7A2",
				"sha1": "0F4E4C212A6BCCAD4561EA31889D522007FD5D81",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-07-29"
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
								"name": "SWE-8F-0 PRG",
								"size": "256k",
								"crc": "2D11B2F4",
								"sha1": "BC04DA4FDC19DE7983B87B42CD54DAEFA17FEB08"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SWE-8F-0 CHR",
								"size": "256k",
								"crc": "C494BFA2",
								"sha1": "5AC4B2C6A61FBF86E5FD340A5B777489F5963D74"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
