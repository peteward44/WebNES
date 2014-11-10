this.NesDb = this.NesDb || {};

NesDb[ 'C8909540BC7C1EF643EADC8AB9477F5532E52945' ] = {
	"$": {
		"name": "F-117a Stealth Fighter",
		"class": "Licensed",
		"catalog": "NES-FA-USA",
		"publisher": "Microprose",
		"developer": "Microprose",
		"region": "USA",
		"players": "1",
		"date": "1992-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0A7E62D4",
				"sha1": "C8909540BC7C1EF643EADC8AB9477F5532E52945",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
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
								"name": "NES-FA-0 PRG",
								"size": "256k",
								"crc": "D5566EDF",
								"sha1": "59925D4FC25027CBBFC54E927E950EEB6C269F0F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-FA-0 CHR",
								"size": "256k",
								"crc": "7344D52A",
								"sha1": "4FC5B2331DCA300BF75D0A6C3996602B6DDA7191"
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
