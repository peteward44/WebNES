this.NesDb = this.NesDb || {};

NesDb[ '92AE9BD552B0008EE513FCB63D93F008716472BE' ] = {
	"$": {
		"name": "Sesame Street ABC",
		"class": "Licensed",
		"catalog": "NES-H4-USA",
		"publisher": "Hi Tech Expressions",
		"developer": "Zippo Games",
		"region": "USA",
		"players": "1",
		"date": "1989-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EC0FC2DE",
				"sha1": "92AE9BD552B0008EE513FCB63D93F008716472BE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-07"
			},
			"board": [
				{
					"$": {
						"type": "NES-SEROM",
						"pcb": "NES-SEROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-H4-0 PRG",
								"size": "32k",
								"crc": "2E6C3CA9",
								"sha1": "B40B971CDC7944EBDDC723425CED8D48737B3DAD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-H4-0 CHR",
								"size": "32k",
								"crc": "D3D8792A",
								"sha1": "3D4F7C2572B472C092F58F5C77B562AF19421505"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
