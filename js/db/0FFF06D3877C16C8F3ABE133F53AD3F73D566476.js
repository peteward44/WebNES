this.NesDb = this.NesDb || {};

NesDb[ '0FFF06D3877C16C8F3ABE133F53AD3F73D566476' ] = {
	"$": {
		"name": "Maxi 15",
		"class": "Unlicensed",
		"subclass": "Multi-cart",
		"catalog": "AVE-MG",
		"publisher": "AVE",
		"developer": "AVE",
		"region": "USA",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "2.0",
				"crc": "7EAE9A13",
				"sha1": "0FFF06D3877C16C8F3ABE133F53AD3F73D566476",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-12-16"
			},
			"board": [
				{
					"$": {
						"type": "MLT-MAXI15",
						"pcb": "D-1012",
						"mapper": "234"
					},
					"prg": [
						{
							"$": {
								"name": "MGC2-PGM U2-3410",
								"size": "512k",
								"crc": "D81467B4",
								"sha1": "842F6E430C51AED48F587C56138A6366AD1AAA39"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "MGC2-CHR U9-5436",
								"size": "512k",
								"crc": "B785A710",
								"sha1": "79AD55EE4B3E5727C895B4DDF67C9031A0A75823"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "4053"
							}
						},
						{
							"$": {
								"type": "74xx04"
							}
						},
						{
							"$": {
								"type": "74xx08"
							}
						},
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx175"
							}
						},
						{
							"$": {
								"type": "74xx175"
							}
						},
						{
							"$": {
								"type": "74xx273"
							}
						},
						{
							"$": {
								"type": "74xx30"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
								"type": "CIC Stun"
							}
						}
					]
				}
			]
		}
	]
};
