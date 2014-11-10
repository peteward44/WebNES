this.NesDb = this.NesDb || {};

NesDb[ '14CFB1BB84C5B26EA996F9D53DF645EC5DBB4E81' ] = {
	"$": {
		"name": "Nekketsu Koukou Dodgeball-bu",
		"altname": "熱血高校ドッジボール部",
		"class": "Licensed",
		"catalog": "TJC-ND",
		"publisher": "Technos",
		"developer": "Technos",
		"region": "Japan",
		"players": "2",
		"date": "1988-07-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "62C67984",
				"sha1": "14CFB1BB84C5B26EA996F9D53DF645EC5DBB4E81",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TJC-ND-0 PRG",
								"size": "128k",
								"crc": "7BD7B849",
								"sha1": "BE0F47968D7A6B3EC98EE58C6A4BCC3BA8C7DAD3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TJC-ND-0 CHR",
								"size": "128k",
								"crc": "93C241E7",
								"sha1": "CD56B1FA6C318FB31E8AB275F3471318BB45F729"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
