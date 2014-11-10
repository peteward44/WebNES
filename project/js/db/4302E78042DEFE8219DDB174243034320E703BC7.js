this.NesDb = this.NesDb || {};

NesDb[ '4302E78042DEFE8219DDB174243034320E703BC7' ] = {
	"$": {
		"name": "Michael Andretti's World GP",
		"class": "Licensed",
		"catalog": "NES-W4-USA",
		"publisher": "Sammy",
		"developer": "Human Entertainment",
		"region": "USA",
		"players": "1",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "942B1210",
				"sha1": "4302E78042DEFE8219DDB174243034320E703BC7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-W4-0 PRG",
								"size": "128k",
								"crc": "2E7F0B29",
								"sha1": "536C600F7C5D38BBF5EFF8592AB762595C64E95C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-W4-0 CHR",
								"size": "128k",
								"crc": "45784A2C",
								"sha1": "1AA46BB47D15D2B4CCAAA3AF7EB6EBC875F3E21F"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
