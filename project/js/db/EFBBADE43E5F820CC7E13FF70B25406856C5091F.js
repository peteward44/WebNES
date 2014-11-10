this.NesDb = this.NesDb || {};

NesDb[ 'EFBBADE43E5F820CC7E13FF70B25406856C5091F' ] = {
	"$": {
		"name": "Power Punch II",
		"class": "Licensed",
		"catalog": "NES-P2-USA",
		"publisher": "American Softworks",
		"developer": "Beam Software",
		"region": "USA",
		"players": "1",
		"date": "1992-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "90226E40",
				"sha1": "EFBBADE43E5F820CC7E13FF70B25406856C5091F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-16"
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
								"name": "NES-P2-0 PRG",
								"size": "128k",
								"crc": "7F7FEF6E",
								"sha1": "222A57B5CB41D79567D6F795A870560BC14CB696"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-P2-0 CHR",
								"size": "256k",
								"crc": "E4C22317",
								"sha1": "7103061EFCB723B8591F8AD39808DF3569CB63C2"
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
