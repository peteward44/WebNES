this.NesDb = this.NesDb || {};

NesDb[ 'E54BB51B9D78810300F3A105F7437D73D7C8BCC1' ] = {
	"$": {
		"name": "Double Strike",
		"class": "Unlicensed",
		"catalog": "AVE-DS",
		"publisher": "AVE",
		"developer": "Sachen / Joy Van",
		"region": "USA",
		"players": "2",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "1.1",
				"crc": "1EB4A920",
				"sha1": "E54BB51B9D78810300F3A105F7437D73D7C8BCC1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
			},
			"board": [
				{
					"$": {
						"type": "AVE-NINA-06",
						"pcb": "NINA-06",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"name": "DOUB. ST. PGM - R11 9305",
								"size": "32k",
								"crc": "127436FC",
								"sha1": "D9461D1A8F7003DC7E6A754116AD1C90228A35FB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DOUB. ST. CHR 846B",
								"size": "32k",
								"crc": "39536D86",
								"sha1": "BB11F3E595403B3F32152535FC9915D66CDAEC27"
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
								"type": "74xx174"
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
