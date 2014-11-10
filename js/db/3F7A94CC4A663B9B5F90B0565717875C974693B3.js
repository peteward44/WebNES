this.NesDb = this.NesDb || {};

NesDb[ '3F7A94CC4A663B9B5F90B0565717875C974693B3' ] = {
	"$": {
		"name": "Last Ninja, The",
		"class": "Licensed",
		"catalog": "NES-J7-USA",
		"publisher": "Jaleco",
		"developer": "System 3",
		"portdeveloper": "Beam Software",
		"region": "USA",
		"players": "1",
		"date": "1991-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "E353969F",
				"sha1": "3F7A94CC4A663B9B5F90B0565717875C974693B3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-29"
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
								"name": "NES-J7-0 PRG",
								"size": "128k",
								"crc": "91209041",
								"sha1": "D936C69F543DB8BCAA2A3C6BB88A1816A5331F5C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-J7-0 CHR",
								"size": "128k",
								"crc": "38EED0F7",
								"sha1": "61D6304C693FA0F7828E58B8C9883DBCDE29601A"
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
