this.NesDb = this.NesDb || {};

NesDb[ '0BF53ABFB80755F4570864432BC37A86AA93B3C8' ] = {
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
				"crc": "36B35988",
				"sha1": "0BF53ABFB80755F4570864432BC37A86AA93B3C8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-03-01"
			},
			"board": [
				{
					"$": {
						"type": "AVE-MB-91",
						"pcb": "MB-91«J»",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "EF344C6F",
								"sha1": "86E482C16F3D08FC86C42A8A21B5E14EFF7F69C8"
							}
						}
					],
					"chr": [
						{
							"$": {
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
								"type": "74xx175"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "MX8018"
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
