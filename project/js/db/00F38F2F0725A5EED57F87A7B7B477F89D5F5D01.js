this.NesDb = this.NesDb || {};

NesDb[ '00F38F2F0725A5EED57F87A7B7B477F89D5F5D01' ] = {
	"$": {
		"name": "Hyper Sports",
		"altname": "ハイパースポーツ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC806",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1985-09-27"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "konamihypershot",
						"name": "Konami HyperShot"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "1.1",
				"crc": "6AE762AE",
				"sha1": "00F38F2F0725A5EED57F87A7B7B477F89D5F5D01",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-07-03"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-NROM-128",
						"pcb": "641-1-2",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"size": "16k",
								"crc": "BA5C8A54",
								"sha1": "F4FD4F13078C4AA758A5501D8270785C03018ABA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "8k",
								"crc": "51025F6B",
								"sha1": "87F653C8B22B5F131550FBB364021E48E6A5FE4E"
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
