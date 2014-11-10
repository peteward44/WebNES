this.NesDb = this.NesDb || {};

NesDb[ '8E7260F2F2775CFF1A774F61A157F8B4477D1038' ] = {
	"$": {
		"name": "Crime Busters",
		"class": "Unlicensed",
		"catalog": "UNL-GRA-CB",
		"publisher": "Gradiente",
		"developer": "Bit Corp",
		"region": "Brazil",
		"players": "1",
		"date": "1989"
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
				"crc": "4D68CFB1",
				"sha1": "8E7260F2F2775CFF1A774F61A157F8B4477D1038",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-08-28"
			},
			"board": [
				{
					"$": {
						"type": "UNL-PCI556",
						"pcb": "PCI556",
						"mapper": "38"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "1A8B558E",
								"sha1": "E881A8DF5352CB21D49A5AB154BA59DA2FFC0534"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "75CE915A",
								"sha1": "5DC790274CE46A56F968E898D8EC80C45BA6DC07"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx161"
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
