this.NesDb = this.NesDb || {};

NesDb[ 'F602F841744E7B077148655DF01B0F03E4EDA625' ] = {
	"$": {
		"name": "Moero!! Pro Yakyuu",
		"altname": "燃えろ！！プロ野球",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-13",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "2",
		"date": "1987-06-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "1.2",
				"crc": "5D2444D7",
				"sha1": "F602F841744E7B077148655DF01B0F03E4EDA625",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-08"
			},
			"board": [
				{
					"$": {
						"type": "JALECO-JF-13",
						"pcb": "JF-13",
						"mapper": "86"
					},
					"prg": [
						{
							"$": {
								"name": "JF13 PRG",
								"size": "128k",
								"crc": "E374C3E7",
								"sha1": "71F5C93019BBADC62372AF2901B57EA6BFA1A060"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CHR",
								"size": "64k",
								"crc": "26A94526",
								"sha1": "C06EF1F446C4E66CE5EFC4E8B282E5F7B9EB3BAA"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "74xx174"
							}
						},
						{
							"$": {
								"type": "74xx174"
							}
						},
						{
							"$": {
								"type": "D7756C"
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
