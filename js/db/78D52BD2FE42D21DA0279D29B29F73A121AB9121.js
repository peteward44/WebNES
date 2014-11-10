this.NesDb = this.NesDb || {};

NesDb[ '78D52BD2FE42D21DA0279D29B29F73A121AB9121' ] = {
	"$": {
		"name": "Kings of the Beach",
		"class": "Licensed",
		"catalog": "NES-VH-USA",
		"publisher": "Ultra Games",
		"developer": "Electronic Arts",
		"portdeveloper": "Konami",
		"region": "USA",
		"players": "4",
		"date": "1990-01"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F54B34BD",
				"sha1": "78D52BD2FE42D21DA0279D29B29F73A121AB9121",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-VH-0 PRG",
								"size": "32k",
								"crc": "AB8371F6",
								"sha1": "28EA520AD3D6BD7C982727FD3FE5C53442BD618A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-VH-0 CHR",
								"size": "32k",
								"crc": "34178709",
								"sha1": "8FFE9C01E493DEBE24841247CF9F209391CC981D"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
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
