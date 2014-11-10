this.NesDb = this.NesDb || {};

NesDb[ '32B6BE4598DBCE05559BDE7675D5238638FAF9BE' ] = {
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
				"crc": "915A53A7",
				"sha1": "32B6BE4598DBCE05559BDE7675D5238638FAF9BE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-05"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-NROM-128",
						"pcb": "400302H",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "806J0P",
								"size": "16k",
								"crc": "AC98CD70",
								"sha1": "191EDE32665DDC042126E90E48805846F76FBE7B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "806J0C",
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
		},
		{
			"$": {
				"system": "Famicom",
				"crc": "915A53A7",
				"sha1": "32B6BE4598DBCE05559BDE7675D5238638FAF9BE",
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
								"crc": "AC98CD70",
								"sha1": "191EDE32665DDC042126E90E48805846F76FBE7B"
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
