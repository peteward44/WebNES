this.NesDb = this.NesDb || {};

NesDb[ '4BEFBEB81265AEF234B031AAF86695FD69FD41AC' ] = {
	"$": {
		"name": "Archon",
		"class": "Licensed",
		"catalog": "NES-ON-USA",
		"publisher": "Activision",
		"developer": "Free Fall Associates",
		"portdeveloper": "Bullet-Proof Software",
		"region": "USA",
		"players": "2",
		"date": "1989-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F304F1B9",
				"sha1": "4BEFBEB81265AEF234B031AAF86695FD69FD41AC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-12"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-08",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-ON-0 PRG",
								"size": "128k",
								"crc": "F304F1B9",
								"sha1": "4BEFBEB81265AEF234B031AAF86695FD69FD41AC"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
	],
	"gameGenieCodes": [
		{
			"name": "Unrestricted ground movement",
			"codes": [
				[
					"AASSIEUT"
				]
			]
		},
		{
			"name": "Unrestricted flying movement",
			"codes": [
				[
					"AAKIGAGA"
				]
			]
		}
	]
};
