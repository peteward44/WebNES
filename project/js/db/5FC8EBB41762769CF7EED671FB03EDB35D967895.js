this.NesDb = this.NesDb || {};

NesDb[ '5FC8EBB41762769CF7EED671FB03EDB35D967895' ] = {
	"$": {
		"name": "Chiller",
		"class": "Unlicensed",
		"catalog": "AGCI-CH",
		"publisher": "AGCI",
		"developer": "Exidy",
		"portdeveloper": "AGCI",
		"region": "USA",
		"players": "2",
		"date": "1990"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "CHR-C9F4",
				"crc": "91467F41",
				"sha1": "5FC8EBB41762769CF7EED671FB03EDB35D967895",
				"dump": "bad",
				"dumper": "bootgod",
				"datedumped": "2008-05-02"
			},
			"board": [
				{
					"$": {
						"type": "COLORDREAMS-74*377",
						"pcb": "UNK-COLORDREAMS-REVA",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "CHILPRG",
								"size": "32k",
								"crc": "98E3B8BB",
								"sha1": "6BD003927954FE577E9C4F38FE796D2EF5FB23E4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CHILCHR",
								"size": "32k",
								"crc": "8504288F",
								"sha1": "F08271106734EE3A17EBEACA35F3E95C6FDF9C13"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx377"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
