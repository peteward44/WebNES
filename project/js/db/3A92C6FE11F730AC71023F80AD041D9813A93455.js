this.NesDb = this.NesDb || {};

NesDb[ '3A92C6FE11F730AC71023F80AD041D9813A93455' ] = {
	"$": {
		"name": "Mario Is Missing!",
		"class": "Licensed",
		"catalog": "NES-MQ-USA",
		"publisher": "The Software Toolworks",
		"developer": "Radical Entertainment",
		"region": "USA",
		"players": "1",
		"date": "1993-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2055971A",
				"sha1": "3A92C6FE11F730AC71023F80AD041D9813A93455",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
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
								"name": "NES-MQ-0 PRG",
								"size": "128k",
								"crc": "60A01CAB",
								"sha1": "771B5CA89C1B9C571430DF60BD40097735A8D6BD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-MQ-0 CHR",
								"size": "128k",
								"crc": "B3935866",
								"sha1": "F82B0341C7FE0670E297245544CDA89AC5489E6F"
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
