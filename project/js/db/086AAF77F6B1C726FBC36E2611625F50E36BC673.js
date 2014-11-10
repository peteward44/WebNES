this.NesDb = this.NesDb || {};

NesDb[ '086AAF77F6B1C726FBC36E2611625F50E36BC673' ] = {
	"$": {
		"name": "Hoops",
		"class": "Licensed",
		"catalog": "NES-2B-USA",
		"publisher": "Jaleco",
		"developer": "Aicom",
		"region": "USA",
		"players": "2",
		"date": "1989-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F4615036",
				"sha1": "086AAF77F6B1C726FBC36E2611625F50E36BC673",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-SL1ROM",
						"pcb": "NES-SL1ROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-2B-0 PRG",
								"size": "128k",
								"crc": "514B8C43",
								"sha1": "EA87587491A18FDB3B4A2F91B7AA733EA17FF11C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-2B-0 CHR",
								"size": "128k",
								"crc": "4BA913D0",
								"sha1": "2724A1EED2A995337E974E40D7B140795DF0EA7C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F4615036",
				"sha1": "086AAF77F6B1C726FBC36E2611625F50E36BC673",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2007-07-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-2B-0 PRG",
								"size": "128k",
								"crc": "514B8C43",
								"sha1": "EA87587491A18FDB3B4A2F91B7AA733EA17FF11C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-2B-0 CHR",
								"size": "128k",
								"crc": "4BA913D0",
								"sha1": "2724A1EED2A995337E974E40D7B140795DF0EA7C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
							}
						}
					]
				}
			]
		}
	]
};
